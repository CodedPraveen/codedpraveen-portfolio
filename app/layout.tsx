import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodedPraveen — Freelance Developer",
  description: "Praveen Kumar is a freelance full-stack developer building fast, responsive websites and web applications.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
