import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-14">
      <div className="flex flex-col items-center gap-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Connect with Paras
        </h2>

        {/* ICONS ROW - BIGGER + MORE GAP */}
        <div className="flex items-center justify-center gap-14">

          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="w-20 h-20 rounded-full bg-white flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-md"
          >
            <FaEnvelope className="text-4xl text-slate-700" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="w-20 h-20 rounded-full bg-[#0A66C2] flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-md"
          >
            <FaLinkedinIn className="text-4xl text-white" />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="w-20 h-20 rounded-full bg-black flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-md"
          >
            <FaGithub className="text-4xl text-white" />
          </Link>

        </div>

        {/* Footer */}
        <p className="text-xs text-slate-500 tracking-wide">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
