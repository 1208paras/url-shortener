import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-14">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Connect with Paras
        </h2>

        {/* Clean text buttons row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="px-4 py-2 rounded-full border border-slate-600/80 bg-slate-900/60 text-sm md:text-base text-slate-200 hover:bg-slate-800 hover:border-slate-300 hover:text-slate-50 transition-all"
          >
            Email
          </Link>

          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="px-4 py-2 rounded-full border border-slate-600/80 bg-slate-900/60 text-sm md:text-base text-slate-200 hover:bg-slate-800 hover:border-slate-300 hover:text-slate-50 transition-all"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="px-4 py-2 rounded-full border border-slate-600/80 bg-slate-900/60 text-sm md:text-base text-slate-200 hover:bg-slate-800 hover:border-slate-300 hover:text-slate-50 transition-all"
          >
            GitHub
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-xs text-slate-500 mt-2 tracking-wide">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
