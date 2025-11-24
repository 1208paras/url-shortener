import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 mt-24 py-20">
      <div className="flex flex-col items-center gap-12">

        {/* ✨ BEAUTIFUL BIG HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-slate-200">
          Connect with Paras
        </h2>

        {/* ✨ ICON ROW WITH REAL BIG GAP */}
        <div className="flex items-center justify-center gap-20">

          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-xl"
          >
            <FaEnvelope className="text-5xl text-slate-700" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            className="w-24 h-24 rounded-full bg-[#0A66C2] flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-xl"
          >
            <FaLinkedinIn className="text-5xl text-white" />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            className="w-24 h-24 rounded-full bg-black flex items-center justify-center 
                       hover:scale-125 transition-all duration-200 shadow-xl"
          >
            <FaGithub className="text-5xl text-white" />
          </Link>

        </div>

        {/* ✨ MORE LINE SPACING FOR CLEANER LOOK */}
        <p className="text-sm text-slate-500 tracking-wide mt-4">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>

      </div>
    </section>
  );
}
