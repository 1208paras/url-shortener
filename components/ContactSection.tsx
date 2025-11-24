import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// --- Simple Icon Link Component (Re-used for clarity) ---
// This component encapsulates the improved styling and interactivity.
const IconLink = ({ href, icon: IconComponent, colorClass, label }) => (
  <Link
    href={href}
    // Open new tab for LinkedIn/GitHub, stay in the same tab for mailto
    target={label !== "Email" ? "_blank" : "_self"} 
    aria-label={label}
    className={`
      ${colorClass} 
      text-5xl // **FIX: Larger icon size for presence**
      mx-6 // **FIX: Increased horizontal margin for proper spacing**
      opacity-75 // Slightly subdued by default
      transition-all duration-300 ease-in-out 
      hover:opacity-100 // **FIX: Fade-in on hover**
      hover:scale-110 // **FIX: Subtle lift and scale on hover**
      hover:drop-shadow-lg // **FIX: Add a glow effect on hover**
    `}
  >
    <IconComponent />
  </Link>
);


// --- Main Component ---
export default function ContactSection() {
  return (
    // Set a solid, dark background
    <section className="w-full bg-slate-950 text-slate-50 mt-20 py-16">
      <div className="flex flex-col items-center">
        {/* Subdued Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-10">
          Connect with Paras
        </h2>

        {/* Icons Row with proper spacing */}
        <div className="flex items-center justify-center">
          
          {/* Email */}
          <IconLink
            href="mailto:jindalparas961@gmail.com"
            icon={FaEnvelope}
            colorClass="text-indigo-400 hover:text-indigo-300"
            label="Email"
          />

          {/* LinkedIn */}
          <IconLink
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            icon={FaLinkedin}
            colorClass="text-sky-400 hover:text-sky-300"
            label="LinkedIn"
          />

          {/* GitHub */}
          <IconLink
            href="https://github.com/1208paras"
            icon={FaGithub}
            colorClass="text-emerald-400 hover:text-emerald-300"
            label="GitHub"
          />
        </div>

        {/* Small footer text */}
        <p className="text-xs text-slate-500 mt-12">
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}