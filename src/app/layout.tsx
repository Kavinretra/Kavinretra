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
  metadataBase: new URL("https://kavin-portfolio-amber.vercel.app"),
  title: "Kavin Retra S N | Software Engineer & Full Stack Developer",
  description:
    "Full Stack Software Engineer with 2+ years of experience developing enterprise applications (CRM, HRMS, Accounting) and AI agent workflows using Python, Django, React.js, Node.js, MySQL, and AWS.",
  keywords: [
    "Kavin Retra S N",
    "Kavin Retra",
    "Software Engineer",
    "Full Stack Developer",
    "AI Agents",
    "Agentic Workflows",
    "Django",
    "Django REST Framework",
    "React.js",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "CoolGen Solutions",
  ],
  authors: [{ name: "Kavin Retra S N", url: "https://github.com/Kavinretra" }],
  openGraph: {
    title: "Kavin Retra S N | Software Engineer & Full Stack Developer",
    description:
      "Full Stack Software Engineer developing enterprise business applications and AI agent workflows with Django, React, Node.js, and AWS.",
    url: "https://kavin-portfolio-amber.vercel.app",
    siteName: "Kavin Retra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kavin.jpg",
        width: 800,
        height: 1067,
        alt: "Kavin Retra S N - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Retra S N | Software Engineer & Full Stack Developer",
    description:
      "Full Stack Software Engineer developing enterprise business applications and AI agent workflows with Django, React, Node.js, and AWS.",
    images: ["/images/kavin.jpg"],
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
