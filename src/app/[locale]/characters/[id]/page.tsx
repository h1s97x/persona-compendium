import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CHARACTERS } from '@/lib/constants';
import CharacterProfile from '@/components/features/character/CharacterProfile';
import { buildCharacterMetadata } from '@/lib/i18n/character-meta';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/dictionary';

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  return CHARACTERS.map((character) => ({ id: character.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  return buildCharacterMetadata(isLocale(locale) ? locale : DEFAULT_LOCALE, id);
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const character = CHARACTERS.find((item) => item.id === id);

  if (!character) notFound();

  return <CharacterProfile character={character} />;
}
