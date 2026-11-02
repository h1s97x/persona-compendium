import type { Metadata } from 'next';
import GalleryBrowser from '@/components/features/gallery/GalleryBrowser';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/dictionary';
import { buildMetadata } from '@/lib/i18n/meta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(isLocale(locale) ? locale : DEFAULT_LOCALE, 'gallery', '/gallery');
}

export default function Page() {
  return <GalleryBrowser />;
}
