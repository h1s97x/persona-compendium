import type { Metadata } from 'next';
import './globals.css';
import './p5r.css';

/**
 * 唯一的根布局：样式与字体在这里引入，
 * 因此 zh-CN 与 /[locale] 之间切换时样式表不会随着布局卸载而丢失。
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-black antialiased">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* App Router 只有一个根布局，样式表全站只请求一次。
            CJK 字体若用 next/font 自托管，单字体单权重就会被拆成 300+ 个
            unicode-range 分片（三个字族 × 四档字重），构建与体积成本远高于 CDN。 */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
