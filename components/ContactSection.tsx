import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-slate-950 text-slate-50" style={{ marginTop: "6rem", padding: "4rem 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* BIG, NICE HEADING */}
        <h2
          style={{
            fontSize: "3.2rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          Connect with Paras
        </h2>

        {/* ICON ROW – BIG + REAL GAP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "56px", // yahi se icons ke beech ka gap control hoga
          }}
        >
          {/* Email */}
          <Link
            href="mailto:jindalparas961@gmail.com"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 25px rgba(0,0,0,0.35)",
              transform: "translateY(0)",
              transition: "transform 0.15s ease-out",
            }}
          >
            <FaEnvelope style={{ fontSize: "40px", color: "#0f172a" }} />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/paras-jindal-397561202/"
            target="_blank"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 25px rgba(15,118,210,0.55)",
              transition: "transform 0.15s ease-out",
            }}
          >
            <FaLinkedinIn style={{ fontSize: "40px", color: "#ffffff" }} />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/1208paras"
            target="_blank"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 25px rgba(0,0,0,0.7)",
              transition: "transform 0.15s ease-out",
            }}
          >
            <FaGithub style={{ fontSize: "40px", color: "#ffffff" }} />
          </Link>
        </div>

        {/* FOOTER WITH EXTRA LINE GAP */}
        <p
          style={{
            marginTop: "18px",
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
