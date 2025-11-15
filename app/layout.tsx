import type { Metadata } from 'next';
import { Geist, Geist_Mono, Urbanist, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { FormProvider } from '@/hooks/FormContext';
import Providers from './providers';
import SubscribeSection from '@/components/subscribe/SubscribeSection';

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StorAid',
  description: 'Storages for all needs',
  authors: [{ name: 'Jari Leminaho' }],
  openGraph: {
    type: 'website',
    url: 'https://storaid-inlmn-2.vercel.app/',
    title: 'StorAid',
    description: 'Stoages for all needs',
    siteName: 'StorAid',
    images: [
      {
        url: 'https://storaid-inlmn-2.vercel.app/storaid-og.png',
        width: 1200,
        height: 630,
        alt: 'StorAid logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} ${inter.variable} antialiased`}>
        <Header />
        <Providers>
          {children}
          <SubscribeSection />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
