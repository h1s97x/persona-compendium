import type { MetadataRoute } from 'next';
import { CHARACTERS } from '@/lib/constants';
import { LOCALES } from '@/lib/i18n/dictionary';
import { alternateLanguages, localePath } from '@/lib/i18n/paths';

const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/characters', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/buy', priority: 0.6, changeFrequency: 'monthly' },
  ...CHARACTERS.map((character) => ({
    path: `/characters/${character.id}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com').replace(/\/$/, '');
  const now = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map(({ code }) => ({
      url: `${siteUrl}${localePath(code, route.path)}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: alternateLanguages(route.path) },
    }))
  );
}
