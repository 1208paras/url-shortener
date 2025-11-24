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

export default function AdminPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";

  async function fetchLinks() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/links", {
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to load links");
      } else {
        setLinks(data);
      }
    } catch {
      setError("Network error while loading links");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  async function toggleActive(id: number, isActive: boolean) {
    setUpdatingId(id);
    setError(null);
    try {
      const res = await fetch(`/api/admin/links/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !isActive }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to update link");
      } else {
        setLinks((prev) =>
          prev.map((l) =>
            l.id === id ? { ...l, is_active: !isActive } : l
          )
        );
      }
    } catch {
      setError("Network error while updating link");
    } finally {
      setUpdatingId(null);
    }
  }

  function formatDate(str: string | null) {
    if (!str) return "—";
    return new Date(str).toLocaleString();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-indigo-300">
              Paras.ly Admin Dashboard
            </h1>
            <p className="text-sm text-slate-400">
              View all shortened URLs (including hidden) and manage visibility.
            </p>
          </div>
          <button
            onClick={fetchLinks}
            className="rounded-lg border border-slate-700/80 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            Refresh
          </button>
        </header>

        {error && (
          <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        )}

        {loading ? (
          <p className="text-sm text-slate-400">Loading links…</p>
        ) : links.length === 0 ? (
          <p className="text-sm text-slate-400">
            No links found in the database yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="min-w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/80 text-slate-400 text-[11px] uppercase tracking-wide">
                <tr>
                  <th className="px-3 py-2">ID</th>
                  <th className="px-3 py-2">Short</th>
                  <th className="px-3 py-2">Original URL</th>
                  <th className="px-3 py-2">Clicks</th>
                  <th className="px-3 py-2">Active</th>
                  <th className="px-3 py-2">Created</th>
                  <th className="px-3 py-2">Last Click</th>
                  <th className="px-3 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {links.map((link) => (
                  <tr
                    key={link.id}
                    className={
                      link.is_active ? "bg-slate-900/60" : "bg-slate-950/80"
                    }
                  >
                    <td className="px-3 py-2 align-top text-slate-400">
                      {link.id}
                    </td>
                    <td className="px-3 py-2 align-top">
                      <a
                        href={`/${link.short_code}`}
                        target="_blank"
                        className="text-indigo-300 hover:underline"
                      >
                        {baseUrl}/{link.short_code}
                      </a>
                    </td>
                    <td className="px-3 py-2 align-top max-w-xs sm:max-w-md">
                      <a
                        href={link.original_url}
                        target="_blank"
                        className="truncate text-slate-100 hover:underline"
                      >
                        {link.original_url}
                      </a>
                    </td>
                    <td className="px-3 py-2 align-top text-emerald-300">
                      {link.click_count}
                    </td>
                    <td className="px-3 py-2 align-top">
                      {link.is_active ? (
                        <span className="inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-slate-700/40 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                          Hidden
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2 align-top text-slate-300">
                      {formatDate(link.created_at)}
                    </td>
                    <td className="px-3 py-2 align-top text-slate-400">
                      {formatDate(link.last_clicked_at)}
                    </td>
                    <td className="px-3 py-2 align-top text-right">
                      <button
                        disabled={updatingId === link.id}
                        onClick={() => toggleActive(link.id, link.is_active)}
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-100 hover:bg-slate-800 disabled:opacity-60"
                      >
                        {updatingId === link.id
                          ? "Updating..."
                          : link.is_active
                          ? "Hide (soft delete)"
                          : "Show again"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-[11px] text-slate-500">
          Hidden links (is_active = false) are not visible on the public
          Paras.ly page and their short URLs stop redirecting, but records stay
          in the database for auditing.
        </p>
      </div>
    </main>
  );
}
