// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css"; // IMPORTANT: this pulls in Tailwind

export const metadata: Metadata = {
  title: "Paras.ly - URL Shortener",
  description: "Tiny URL shortener built by Paras Jindal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
