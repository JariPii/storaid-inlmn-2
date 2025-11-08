import type { Metadata } from 'next';
import { Geist, Geist_Mono, Urbanist, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SubscribeSection from '@/components/subscribe/SubscribeSection';
import { BookingProvider } from '@/hooks/BookingContext';
import Providers from './providers';
import Logo from '../public/images/Logo.png';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StorAid',
  description: 'Stoages for all needs',
  authors: [{ name: 'Jari Leminaho' }],
  openGraph: {
    type: 'website',
    url: 'https://storaid-inlmn-2.vercel.app/',
    title: 'StorAid',
    description: 'Stoages for all needs',
    siteName: 'StorAid',
    images: [
      {
        url: 'public/images/Logo.png',
      },
    ],
  },

  facebook: { appId: '123456' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <BookingProvider>
          <Providers>
            {children}
            <SubscribeSection />
          </Providers>
        </BookingProvider>
        <Footer />
      </body>
    </html>
  );
}
