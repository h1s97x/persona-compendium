import type { Metadata } from 'next';
import CharactersScreen from '@/components/features/character/CharactersScreen';
import { buildMetadata } from '@/lib/i18n/meta';

export const metadata: Metadata = buildMetadata('zh-CN', 'characters', '/characters');

export default function Page() {
  return <CharactersScreen />;
}
