import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      className="w-full bg-slate-950 text-slate-50"
      style={{ marginTop: "5rem", padding: "3rem 0" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* SMALLER CLEAN HEADING */}
        <h2
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
          }}
        >
          Connect with Paras
        </h2>

        {/* ICONS ROW – REDUCED SIZE, NO GLOW */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
          }}
        >
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.15s ease-out",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            <FaEnvelope style={{ fontSize: "32px", color: "#0f172a" }} />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.15s ease-out",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            <FaLinkedinIn style={{ fontSize: "32px", color: "#ffffff" }} />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.15s ease-out",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            <FaGithub style={{ fontSize: "32px", color: "#ffffff" }} />
          </Link>
        </div>

        {/* FOOTER */}
        <p
          style={{
            marginTop: "12px",
            fontSize: "0.9rem",
            color: "#94a3b8",
            letterSpacing: "0.05em",
          }}
        >
          Built with ❤️ by Paras Jindal — Paras.ly
        </p>
      </div>
    </section>
  );
}
