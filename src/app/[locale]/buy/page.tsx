import type { Metadata } from 'next';
import BuyScreen from '@/components/features/buy/BuyScreen';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/dictionary';
import { buildMetadata } from '@/lib/i18n/meta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(isLocale(locale) ? locale : DEFAULT_LOCALE, 'buy', '/buy');
}

export default function Page() {
  return <BuyScreen />;
}
