import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-16 flex flex-col items-center">
      
      <h2 className="text-3xl font-bold text-slate-200 mb-10">
        Connect with Paras
      </h2>

      {/* ICON ROW */}
      <div className="flex items-center gap-10">

        {/* Email */}
        <Link
          href="mailto:jindalparas961@gmail.com"
          className="p-4 rounded-full bg-slate-900 border border-slate-700 shadow-lg text-4xl text-slate-300 hover:text-indigo-400 hover:scale-125 hover:shadow-indigo-500/30 transition-all duration-200"
        >
          <FaEnvelope />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/paras-jindal-397561202/"
          target="_blank"
          className="p-4 rounded-full bg-slate-900 border border-slate-700 shadow-lg text-4xl text-slate-300 hover:text-sky-400 hover:scale-125 hover:shadow-sky-500/30 transition-all duration-200"
        >
          <FaLinkedin />
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/1208paras"
          target="_blank"
          className="p-4 rounded-full bg-slate-900 border border-slate-700 shadow-lg text-4xl text-slate-300 hover:text-emerald-400 hover:scale-125 hover:shadow-emerald-500/30 transition-all duration-200"
        >
          <FaGithub />
        </Link>

      </div>

      <p className="text-xs text-slate-500 mt-8">
        Built with ❤️ by Paras Jindal — Paras.ly
      </p>
    </section>
  );
}
