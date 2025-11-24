import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-14">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
          Connect with Paras
        </h2>

        {/* Icons row – ONLY ICONS, clean */}
        <div className="flex items-center justify-center space-x-12 text-4xl md:text-5xl">
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="text-slate-400 hover:text-indigo-400 transition-transform duration-150 hover:scale-125"
          >
            <FaEnvelope />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="text-slate-400 hover:text-sky-400 transition-transform duration-150 hover:scale-125"
          >
            <FaLinkedin />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-transform duration-150 hover:scale-125"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Small footer text */}
        <p className="text-xs text-slate-500 mt-2">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
