import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Rainbow Unicorn Exim Services | Natural Food Powders Exporter',
  description: 'Premium natural food powders processed under hygienic standards. We export high-quality spinach, tomato, garlic, and other dehydrated ingredients globally.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-cream" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
