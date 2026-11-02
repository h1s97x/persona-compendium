'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CHARACTERS } from '@/lib/constants';
import { useCharacterText, useI18n } from '@/components/providers/LocaleProvider';

const namePlateOf = (icon: string) => {
  const matched = icon.match(/changebtn(\d+)\./);
  return matched ? `/images/chara${matched[1]}_name.webp` : '/images/chara_title.webp';
};

export default function CharacterShowcase() {
  const [current, setCurrent] = useState(0);
  const { t } = useI18n();
  const character = CHARACTERS[current];
  const text = useCharacterText(character.id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });

  return (
    <section id="characters" className="p5r-section p5r-chara">
      <Image
        src="/images/chara_title.webp"
        alt="CHARACTER"
        width={515}
        height={157}
        className="p5r-chara__title"
      />

      <div className="p5r-stage">
        <div key={`art-${character.id}`} className="p5r-stage__art p5r-slide">
          <Image
            src="/images/chara_star.webp"
            alt=""
            aria-hidden
            width={739}
            height={719}
            className="p5r-stage__star"
          />
          <Image
            src={character.images.persona}
            alt={`${character.persona} 人格面具`}
            width={400}
            height={520}
            className="p5r-stage__persona"
          />
          <Image
            src={character.images.character}
            alt={character.codename}
            width={360}
            height={560}
            priority
            className="p5r-stage__kaitou"
          />
        </div>

        <div className="p5r-stage__panel">
          <div key={`info-${character.id}`} className="p5r-stage__panel-in p5r-slide">
            <Image
              src={namePlateOf(character.images.icon)}
              alt={character.codename}
              width={340}
              height={190}
              className="p5r-stage__name"
            />
            <p className="p5r-stage__desc">{text.description}</p>
            <div className="p5r-stage__meta">
              <span>
                {t('chara.arcana')} · {character.arcana}
              </span>
              <span>{text.name}</span>
              <Link
                href={`/characters/${character.id}`}
                className="p5r-stage__link"
                aria-label={t('chara.aria', { name: character.codename })}
              >
                {t('chara.detail')}
              </Link>
            </div>
          </div>
        </div>

        <div className="p5r-stage__persona-label">
          <em>{t('chara.personaLabel')}</em>
          <b>{character.persona}</b>
        </div>
      </div>

      <div className="p5r-changebar" role="tablist" aria-label="角色切换">
        {CHARACTERS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`查看 ${item.codename}`}
            data-active={index === current}
            onClick={() => setCurrent(index)}
          >
            <Image src={item.images.icon} alt="" aria-hidden width={120} height={120} />
          </button>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 26 }}>
        <Link href="/characters" className="p5r-btn p5r-btn--dark">
          <span>{t('chara.seeAll')}</span>
        </Link>
      </div>
    </section>
  );
}
