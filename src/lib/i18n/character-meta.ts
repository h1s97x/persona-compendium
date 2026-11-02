import type { Metadata } from 'next';
import { CHARACTERS } from '@/lib/constants';
import { resolveCharacterText } from './characters';
import { alternateLanguages, localePath } from './paths';
import type { Locale } from './dictionary';

export function buildCharacterMetadata(locale: Locale, id: string): Metadata {
  const character = CHARACTERS.find((item) => item.id === id);

  if (!character) {
    return { title: 'Not found' };
  }

  const text = resolveCharacterText(locale, id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });

  const path = `/characters/${id}`;
  const title = `${text.name} - ${character.codename}`;
  const description = text.description.slice(0, 160);
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
      type: 'profile',
      url: canonical,
      locale,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
