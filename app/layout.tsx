import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./p5r.css";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Persona Compendium - 人格面具全书",
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}`,
      description: "Persona 全系列角色与内容介绍网站",
      inLanguage: "zh-CN",
    },
    {
      "@type": "VideoGame",
      name: "女神异闻录5 皇家版",
      alternateName: "Persona 5 Royal",
      description: "《女神异闻录5 皇家版》角色介绍 Fan Site",
      genre: "JRPG",
      applicationCategory: "Game",
      gamePlatform: ["PlayStation 5", "Xbox Series X|S", "Nintendo Switch", "Steam", "Windows"],
      inLanguage: "zh-CN",
    },
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
