import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-16">
      <div className="flex flex-col items-center gap-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Connect with Paras
        </h2>

        {/* SOCIAL BADGE ICONS – ONLY ICONS, SQUARE, LARGE */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            aria-label="Email Paras"
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                       bg-slate-900 border border-slate-600/80 
                       hover:bg-slate-800 hover:border-slate-200 
                       shadow-md hover:shadow-xl 
                       transition-all duration-200 
                       hover:-translate-y-1 hover:scale-105"
          >
            <FaEnvelope className="text-2xl md:text-3xl text-slate-100" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            aria-label="Paras on LinkedIn"
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                       bg-[#0A66C2] border border-[#0A66C2] 
                       hover:bg-[#0d74de] hover:border-white/90 
                       shadow-md hover:shadow-xl 
                       transition-all duration-200 
                       hover:-translate-y-1 hover:scale-105"
          >
            <FaLinkedinIn className="text-2xl md:text-3xl text-white" />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            aria-label="Paras on GitHub"
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center 
                       bg-[#181717] border border-[#181717] 
                       hover:bg-black hover:border-white/80 
                       shadow-md hover:shadow-xl 
                       transition-all duration-200 
                       hover:-translate-y-1 hover:scale-105"
          >
            <FaGithub className="text-2xl md:text-3xl text-white" />
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-500 mt-2 tracking-wide">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
