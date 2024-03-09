import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import { Poppins } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "ETurist",
  description: "Promoveaza-ti afacerea cu ETurist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={poppins.className + "scrollbar-hide"}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
