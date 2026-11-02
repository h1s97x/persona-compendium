import type { Metadata } from 'next';
import RootShell from '@/components/layout/RootShell';
import { DEFAULT_LOCALE, LOCALES, isLocale } from '@/lib/i18n/dictionary';
import { buildMetadata } from '@/lib/i18n/meta';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.filter((item) => item.code !== DEFAULT_LOCALE).map((item) => ({
    locale: item.code,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const current = isLocale(locale) ? locale : DEFAULT_LOCALE;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
    ...buildMetadata(current, 'home', '/'),
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return <RootShell locale={isLocale(locale) ? locale : DEFAULT_LOCALE}>{children}</RootShell>;
}
