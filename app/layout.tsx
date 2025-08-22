import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/foooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liumgo",
  description: "Premium logistics and transport solutions across the city.",
  icons: {
    icon: "/liumgologo.png",
    shortcut: "/liumgologo.png",
    apple: "/liumgologo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-y-auto`}
      >
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
