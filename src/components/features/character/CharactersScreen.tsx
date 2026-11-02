'use client';

import Image from 'next/image';
import CharacterSearch from '@/components/features/character/CharacterSearch';
import CharacterList from '@/components/features/character/CharacterList';
import { useI18n } from '@/components/providers/LocaleProvider';
import { localAsset } from '@/lib/i18n/assets';

export default function CharactersScreen() {
  const { t, locale } = useI18n();
  const [line1, line2] = t('characters.subtitle').split('|');

  return (
    <div className="p5r-page">
      <div className="p5r-page__head">
        <Image
          src={localAsset(locale, 'chara_title')}
          alt="CHARACTER"
          width={515}
          height={157}
          priority
          className="p5r-page__title"
        />
        <p className="p5r-page__sub">
          {line1}
          {line2 && (
            <>
              <br />
              {line2}
            </>
          )}
        </p>
      </div>

      <CharacterSearch />
      <CharacterList />
    </div>
  );
}
