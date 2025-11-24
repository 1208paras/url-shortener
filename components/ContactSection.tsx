import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// --- Reusable Contact Card Component ---
// This improves readability and reusability
const ContactCard = ({ href, icon, label, description, colorClass }) => (
  <Link
    href={href}
    target={label !== "Email" ? "_blank" : "_self"} // Open new tab for external links
    className={`
      flex flex-col items-center p-6 rounded-xl border border-slate-700 
      bg-slate-800 transition-all duration-300 ease-in-out
      hover:shadow-lg hover:shadow-slate-700/50 hover:-translate-y-1
      w-full max-w-xs
    `}
  >
    <div className={`text-5xl mb-4 ${colorClass}`}>{icon}</div>
    <h3 className="text-xl font-semibold text-slate-50 mb-1">{label}</h3>
    <p className="text-sm text-slate-400 text-center">{description}</p>
  </Link>
);

// --- Main Component ---
export default function ContactSection() {
  return (
    <section className="w-full bg-slate-900 mt-20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-3">
            Let's Build Together 🚀
          </h2>
          <p className="text-lg text-slate-400">
            I'm currently open to new opportunities and collaborations. Get in touch!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Email Card */}
          <ContactCard
            href="mailto:jindalparas961@gmail.com"
            icon={<FaEnvelope />}
            label="Email Me"
            description="The best way to reach me for professional inquiries."
            colorClass="text-indigo-400"
          />

          {/* LinkedIn Card */}
          <ContactCard
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            icon={<FaLinkedin />}
            label="Connect on LinkedIn"
            description="View my professional background and work history."
            colorClass="text-sky-400"
          />

          {/* GitHub Card */}
          <ContactCard
            href="https://github.com/1208paras"
            icon={<FaGithub />}
            label="Check out GitHub"
            description="Explore my latest projects and open-source contributions."
            colorClass="text-emerald-400"
          />
        </div>
        
        {/* Separator */}
        <hr className="mt-20 border-slate-800" />

        {/* Small footer text */}
        <div className="text-center mt-6">
            <p className="text-sm text-slate-500">
                Built with Next.js and Tailwind CSS by Paras Jindal — Paras.ly
            </p>
        </div>
      </div>
    </section>
  );
}