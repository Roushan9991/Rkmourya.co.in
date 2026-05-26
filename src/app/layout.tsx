import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Roushan Kumar Mourya | Data-Driven Strategy",
  description: "Portfolio of Roushan Kumar Mourya, Business Analyst & MBA Analytics Candidate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden max-w-full">
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-body-md overflow-x-hidden max-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
