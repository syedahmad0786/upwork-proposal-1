import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aixcelsolutions.com"),
  title: {
    default: "Aixcel Solutions | AI Automation Agency",
    template: "%s | Aixcel Solutions",
  },
  description:
    "Aixcel Solutions is a premier AI automation agency delivering autonomous agents, voice intelligence, process automation, and strategic AI transformation for enterprises worldwide.",
  keywords: [
    "AI automation",
    "AI agents",
    "voice AI",
    "process automation",
    "enterprise AI",
    "AI strategy",
    "AI consulting",
    "digital transformation",
    "intelligent automation",
    "AI development",
  ],
  authors: [{ name: "Aixcel Solutions" }],
  creator: "Aixcel Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aixcelsolutions.com",
    siteName: "Aixcel Solutions",
    title: "Aixcel Solutions | AI Automation Agency",
    description:
      "Enterprise-grade AI automation solutions. Autonomous agents, voice intelligence, and intelligent process automation that deliver measurable ROI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aixcel Solutions - AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aixcel Solutions | AI Automation Agency",
    description:
      "Enterprise-grade AI automation solutions. Autonomous agents, voice intelligence, and intelligent process automation that deliver measurable ROI.",
    images: ["/og-image.png"],
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0E1A] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
