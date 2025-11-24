import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
          Connect with Paras
        </h2>

        {/* Icons Row */}
        <div className="flex items-center justify-center gap-12 md:gap-16 text-4xl">
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="text-slate-400 hover:text-indigo-400 transition-transform duration-150 hover:scale-110"
          >
            <FaEnvelope />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="text-slate-400 hover:text-sky-400 transition-transform duration-150 hover:scale-110"
          >
            <FaLinkedin />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-transform duration-150 hover:scale-110"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-[10px] text-slate-500 mt-4">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
