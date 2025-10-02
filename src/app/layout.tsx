import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { FirebaseClientProvider } from '@/firebase';

const title = 'Codex for Tenno';
const description = 'A collection of guides and tips for new Warframe players.';
const url = 'https://codexftenno.com'; // Replace with your actual domain

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: url,
    images: [
      {
        url: 'https://media.discordapp.net/attachments/829820621142753300/1395284319248842792/metaicon.png?ex=6879e348&is=687891c8&hm=f70a304e782f81d2b4d52fbc432daaaf5018513bb2c9704304ca5dc985e5e358&=&format=webp&quality=lossless&width=655&height=655', // Replace with your actual image URL
        width: 70,
        height: 50,
        alt: 'Codex for Tenno Icon',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(124,82,183);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(55,137,215);stop-opacity:1' /%3E%3C/defs%3E%3Cpath fill='url(%23grad)' d='M12 2L2 12l10 10 10-10L12 2zm0 2.828L19.172 12 12 19.172 4.828 12 12 4.828zm0 3.414l-2.829 2.829L12 13.9l2.828-2.829L12 8.242z'/%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <LanguageProvider>
            {children}
            <Toaster />
            <Analytics />
          </LanguageProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
