import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-12">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Connect with Paras
        </h2>

        {/* Icons row – simple emojis */}
        <div className="flex items-center justify-center gap-10 text-3xl md:text-4xl">
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="hover:scale-125 hover:-translate-y-0.5 transition-transform duration-150"
          >
            📧
          </Link>

          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="hover:scale-125 hover:-translate-y-0.5 transition-transform duration-150"
          >
            💼
          </Link>

          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="hover:scale-125 hover:-translate-y-0.5 transition-transform duration-150"
          >
            🐱
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-500 mt-2">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
