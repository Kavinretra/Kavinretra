import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin Retra | Full-Stack Software Engineer & Product Builder",
  description:
    "Full-Stack Developer with 1–2 years of experience building scalable web applications using React, Python, Django, Node.js, and MySQL. Passionate about end-to-end product engineering and system design.",
  keywords: [
    "Kavin Retra",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Python",
    "Django",
    "Node.js",
    "MySQL",
    "TypeScript",
    "System Design",
    "Product Engineer",
  ],
  authors: [{ name: "Kavin Retra", url: "https://github.com/Kavinretra" }],
  openGraph: {
    title: "Kavin Retra | Full-Stack Software Engineer & Product Builder",
    description:
      "Full-Stack Developer building scalable web applications using React, Python, Django, Node.js, and MySQL.",
    url: "https://github.com/Kavinretra",
    siteName: "Kavin Retra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Retra | Full-Stack Software Engineer & Product Builder",
    description:
      "Full-Stack Developer building scalable web applications using React, Python, Django, Node.js, and MySQL.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-emerald-500/20 selection:text-emerald-400 font-sans">
        {children}
      </body>
    </html>
  );
}
