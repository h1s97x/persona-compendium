import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Persona Compendium - 人格面具全书",
    template: "%s | Persona Compendium",
  },
  description: "Persona 全系列角色与内容介绍网站",
  keywords: ["Persona", "女神异闻录", "Persona Compendium", "人格面具全书", "角色介绍"],
  openGraph: {
    title: "Persona Compendium - 人格面具全书",
    description: "Persona 全系列角色与内容介绍网站",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
