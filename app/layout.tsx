import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AiAssistantModal } from "@/components/AiAssistantModal";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Manthan Ank — Full-Stack Engineer & SaaS Architect",
    template: "%s | Manthan Ank",
  },
  description:
    "Portfolio and technical showcase of 10 modern full-stack projects built with Next.js 15, TypeScript, PostgreSQL, Stripe, WebSockets, and AI Document Intelligence.",
  keywords: [
    "Full-Stack Engineer",
    "Next.js 15",
    "TypeScript",
    "PostgreSQL",
    "Stripe",
    "SaaS Architecture",
    "Prisma",
    "WebSockets",
    "RAG",
    "OpenAI",
  ],
  authors: [{ name: "Manthan Ank", url: "https://github.com/manthanank" }],
  creator: "Manthan Ank",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manthanank.dev",
    siteName: "Manthan Ank Portfolio CMS",
    title: "Manthan Ank — Full-Stack Engineer & SaaS Architect",
    description:
      "Explore 10 production-grade full-stack web applications, technical deep-dives, and system designs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manthan Ank — Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Ank — Full-Stack Engineer",
    description:
      "10 modern full-stack web applications built with Next.js, TypeScript, PostgreSQL, Stripe, and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manthan Ank",
    url: "https://github.com/manthanank",
    jobTitle: "Full-Stack Software Engineer",
    sameAs: [
      "https://github.com/manthanank",
      "https://twitter.com",
      "https://linkedin.com",
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "WebSockets",
      "Artificial Intelligence",
      "System Architecture",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AiAssistantModal />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
