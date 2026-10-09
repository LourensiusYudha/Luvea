import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import { SITE_URL } from '@/data/links';
import JsonLd from '@/components/seo/JsonLd';
import Analytics from '@/components/seo/Analytics';
import SmoothScroll from '@/components/ui/SmoothScroll';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const title = 'Luvea — Piyama Rayon Grade A Adem & Elegan';
const description =
  'Piyama wanita berbahan rayon grade A: adem, lembut, dan elegan. Belanja di TikTok Shop atau tanya via WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Luvea',
  },
  description,
  keywords: [
    'piyama rayon',
    'piyama grade A',
    'piyama wanita',
    'loungewear wanita',
    'piyama ibu menyusui',
    'piyama adem',
    'Luvea',
  ],
  applicationName: 'Luvea',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Luvea',
    title,
    description,
    images: [
      {
        url: '/images/hero-og.webp',
        width: 800,
        height: 1035,
        alt: 'Piyama Luvea rayon grade A',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero-og.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: '/images/Luvea.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
