"use client";

import { useEffect, useState } from "react";

type Link = {
  id: number;
  short_code: string;
  original_url: string;
  click_count: number;
  created_at: string;
  last_clicked_at: string | null;
  is_active: boolean;
};

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";

  async function fetchLinks() {
    const res = await fetch("/api/links");
    const data = await res.json();
    setLinks(data);
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setUrl("");
        setLinks((prev) => [data, ...prev]);
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
  const res = await fetch(`/api/links/${id}`, { method: "DELETE" });

  if (!res.ok) {
    console.error("Failed to delete link");
    return;
  }

  setLinks((prev) => prev.filter((l) => l.id !== id));
}


  function formatDate(dateStr: string | null) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 bg-slate-950 text-slate-100">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-4xl font-extrabold text-transparent">
            Paras.ly
          </h1>
          <p className="mt-2 text-slate-300">
            Sleek URL shortener with click analytics.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl space-y-6">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 py-2 text-sm font-medium hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading ? "Shortening..." : "Shorten"}
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </form>

          <div className="h-px w-full bg-slate-700/50" />

          {/* Links */}
          <h2 className="text-lg font-semibold mb-3">Your URLs</h2>

          {links.length === 0 ? (
            <p className="text-slate-400 text-sm">No links yet.</p>
          ) : (
            <div className="space-y-3">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 flex flex-col gap-2"
                >
                  <a
                    href={`/${link.short_code}`}
                    target="_blank"
                    className="text-indigo-300 hover:underline"
                  >
                    {baseUrl}/{link.short_code}
                  </a>

                  <a
                    href={link.original_url}
                    target="_blank"
                    className="truncate text-slate-200 hover:underline"
                  >
                    {link.original_url}
                  </a>

                  <p className="text-xs text-slate-400">
                    Clicks: <span className="text-emerald-300">{link.click_count}</span>
                  </p>

                  <button
                    onClick={() => handleDelete(link.id)}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
