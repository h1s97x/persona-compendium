import type { Metadata } from 'next';
import RootShell from '@/components/layout/RootShell';
import { buildMetadata } from '@/lib/i18n/meta';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  ...buildMetadata('zh-CN', 'home', '/'),
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="zh-CN">{children}</RootShell>;
}
