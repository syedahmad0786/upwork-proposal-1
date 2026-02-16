import type { Metadata } from 'next';
import { Poppins, Anonymous_Pro } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-anonymous',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aixcelsolutions.com'),
  title: {
    default: 'AiXCEL Solutions — AI Agents & Enterprise Automation',
    template: '%s | AiXCEL Solutions',
  },
  description:
    'We automate the work that slows your business down. AI agents, voice AI, process automation, and custom development for teams that move fast.',
  keywords: [
    'AI agents',
    'enterprise automation',
    'voice AI',
    'process automation',
    'n8n automation',
    'AI consulting',
    'workflow automation',
    'business automation',
  ],
  authors: [{ name: 'Ahmad Bukhari', url: 'https://ahmadbukhari.com' }],
  creator: 'AiXCEL Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aixcelsolutions.com',
    siteName: 'AiXCEL Solutions',
    title: 'AiXCEL Solutions — AI Agents & Enterprise Automation',
    description:
      'We automate the work that slows your business down. AI agents, voice AI, process automation, and custom development.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiXCEL Solutions — AI Agents & Enterprise Automation',
    description:
      'We automate the work that slows your business down.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${anonymousPro.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
