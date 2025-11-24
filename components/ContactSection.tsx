// components/ContactSection.tsx

import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50 border-t border-slate-800 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-12">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Let’s Connect 👋
        </h2>

        <p className="text-sm md:text-base text-slate-300 mb-8">
          Hi, I’m <span className="font-medium text-slate-100">Paras Jindal</span> – 
          a Java & web developer. If you liked this project or want to collaborate,
          feel free to reach out using any of the links below.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* Email */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-medium text-slate-100 mb-1">Email</h3>
            <p className="text-xs text-slate-400 mb-3">
              For opportunities, feedback, or collaboration.
            </p>
            <Link
              href="mailto:jindalparas961@gmail.com"
              className="inline-flex items-center text-sm font-medium rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
            >
              jindalparas961@gmail.com
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-medium text-slate-100 mb-1">LinkedIn</h3>
            <p className="text-xs text-slate-400 mb-3">
              Let’s connect professionally and grow our network.
            </p>
            <Link
              href="https://www.linkedin.com/in/paras-jindal-397561202/"
              target="_blank"
              className="inline-flex items-center text-sm font-medium rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
            >
              View LinkedIn Profile
            </Link>
          </div>

          {/* GitHub */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-medium text-slate-100 mb-1">GitHub</h3>
            <p className="text-xs text-slate-400 mb-3">
              Check out my other projects and experiments.
            </p>
            <Link
              href="https://github.com/1208paras"
              target="_blank"
              className="inline-flex items-center text-sm font-medium rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
            >
              Visit GitHub
            </Link>
          </div>

          {/* WhatsApp / Portfolio (you can change later) */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-medium text-slate-100 mb-1">
              Portfolio / WhatsApp
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Want to reach me quickly? Contact here.
            </p>
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="inline-flex items-center text-sm font-medium rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
            >
              Message on WhatsApp
            </Link>
          </div>

        </div>

        {/* Small footer text */}
        <p className="mt-8 text-[11px] text-slate-500">
          Built with ❤️ using Next.js, Tailwind CSS & Neon – Paras.ly
        </p>
      </div>
    </section>
  );
}
