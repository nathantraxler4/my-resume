import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/app/globals.css';
import { Merriweather } from 'next/font/google'

const roboto = Merriweather({ weight: "900", subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nathan Traxler Resume",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
