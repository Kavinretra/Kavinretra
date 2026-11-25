import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
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
  metadataBase: new URL(profile.siteUrl),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kavin Retra S N | Software Engineer & Full Stack Developer",
    description:
      "Full Stack Software Engineer developing enterprise business applications and AI agent workflows with Django, React, Node.js, and AWS.",
    url: profile.siteUrl,
    siteName: "Kavin Retra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Retra S N | Software Engineer & Full Stack Developer",
    description:
      "Full Stack Software Engineer developing enterprise business applications and AI agent workflows with Django, React, Node.js, and AWS.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    email: `mailto:${profile.socials.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanyakumari",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [profile.socials.github, profile.socials.linkedin],
    knowsAbout: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Node.js",
      "AI Agents",
      "Agentic Workflows",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-emerald-500/20 selection:text-emerald-400 font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-semibold focus:text-zinc-950 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
