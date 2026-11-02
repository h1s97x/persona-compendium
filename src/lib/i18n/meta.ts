import type { Metadata } from 'next';
import { DICTIONARIES, type Locale } from './dictionary';
import { alternateLanguages, localePath } from './paths';

export const SITE_NAME = 'Persona Compendium';

const SITE_TITLE: Record<Locale, string> = {
  'zh-CN': 'Persona Compendium - 人格面具全书',
  ja: 'Persona Compendium - ペルソナ５ ザ・ロイヤル',
  'zh-TW': 'Persona Compendium - 人格面具全書',
  ko: 'Persona Compendium - 페르소나5 더 로열',
  en: 'Persona Compendium - Persona 5 Royal',
  fr: 'Persona Compendium - Persona 5 Royal',
  it: 'Persona Compendium - Persona 5 Royal',
  de: 'Persona Compendium - Persona 5 Royal',
  es: 'Persona Compendium - Persona 5 Royal',
};

const t = (locale: Locale, key: string) =>
  DICTIONARIES[locale]?.[key] ?? DICTIONARIES['zh-CN'][key] ?? '';

const oneLine = (value: string) =>
  value.replace(/\|/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);

export type RouteKey = 'home' | 'characters' | 'gallery' | 'buy';

const descriptionOf = (locale: Locale, key: RouteKey) => {
  switch (key) {
    case 'characters':
      return oneLine(t(locale, 'characters.subtitle'));
    case 'gallery':
      return oneLine(t(locale, 'gallery.subtitle'));
    case 'buy':
      return oneLine(t(locale, 'buy.intro'));
    default:
      return oneLine(t(locale, 'story.p1'));
  }
};

export function buildMetadata(locale: Locale, key: RouteKey, path: string): Metadata {
  const title =
    key === 'home' ? SITE_TITLE[locale] : `${t(locale, `nav.${key}`)} | ${SITE_TITLE[locale]}`;
  const description = descriptionOf(locale, key);
  const canonical = localePath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: SITE_NAME,
      locale,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export const siteTitle = (locale: Locale) => SITE_TITLE[locale];
