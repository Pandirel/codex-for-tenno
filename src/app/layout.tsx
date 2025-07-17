import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import { Toaster } from '@/components/ui/toaster';

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
        width: 2400,
        height: 1260,
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👾</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z' /%3E%3Cpath d='M12 2v20' /%3E%3Cpath d='M12 12c-3.75 0-7.5 3-7.5 6' /%3E%3Cpath d='M12 12c3.75 0 7.5 3 7.5 6' /%3E%3Cpath d='M12 12c-3.75 0-7.5-3-7.5-6' /%3E%3Cpath d='M12 12c3.75 0 7.5-3 7.5-6' /%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
