import type { Metadata } from 'next';
import { Libre_Franklin, Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/data/projects';

/* ─── Fonts ─────────────────────────────────────────── */
const franklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-franklin',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

/* ─── Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
};

/* ─── Layout ─────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${franklin.variable} ${baskerville.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
