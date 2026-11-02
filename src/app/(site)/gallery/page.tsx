import type { Metadata } from 'next';
import GalleryBrowser from '@/components/features/gallery/GalleryBrowser';
import { buildMetadata } from '@/lib/i18n/meta';

export const metadata: Metadata = buildMetadata('zh-CN', 'gallery', '/gallery');

export default function Page() {
  return <GalleryBrowser />;
}
