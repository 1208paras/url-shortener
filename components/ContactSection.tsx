import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 py-16 mt-24">
      <div className="flex flex-col items-center justify-center space-y-10">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
          Connect with Paras
        </h2>

        {/* Icons */}
        <div className="flex items-center justify-center gap-16">
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="text-slate-400 hover:text-indigo-400 transition-all duration-200 transform hover:scale-125 text-5xl"
          >
            <FaEnvelope />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="text-slate-400 hover:text-sky-400 transition-all duration-200 transform hover:scale-125 text-5xl"
          >
            <FaLinkedin />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-all duration-200 transform hover:scale-125 text-5xl"
          >
            <FaGithub />
          </Link>
        </div>

        <p className="text-[10px] text-slate-500 pt-6">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
