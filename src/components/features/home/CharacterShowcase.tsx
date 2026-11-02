'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { useState } from 'react';
import { CHARACTERS } from '@/lib/constants';
import { useCharacterText, useI18n } from '@/components/providers/LocaleProvider';
import { localAsset } from '@/lib/i18n/assets';
import type { Locale } from '@/lib/i18n/dictionary';

/** 图标文件名里的序号与官网 charaN / personaN 素材编号一致 */
const indexOf = (icon: string) => icon.match(/changebtn(\d+)\./)?.[1] ?? '1';

const namePlateOf = (icon: string, locale: Locale) =>
  localAsset(locale, `chara${indexOf(icon)}_name`);
const personaPlateOf = (icon: string) => `/images/official/persona${indexOf(icon)}_name.webp`;
const profilePlateOf = (icon: string) => `/images/official/chara${indexOf(icon)}_txt_bg.webp`;

type Costume = 'thief' | 'school';

export default function CharacterShowcase() {
  const [current, setCurrent] = useState(0);
  const [costume, setCostume] = useState<Costume>('thief');
  const { t, locale } = useI18n();
  const character = CHARACTERS[current];
  const text = useCharacterText(character.id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });
  const hasSchool = Boolean(character.images.school);

  const selectCharacter = (index: number) => {
    setCurrent(index);
    setCostume('thief');
  };

  return (
    <section id="characters" className="p5r-section p5r-chara">
      <Image
        src={localAsset(locale, 'chara_title')}
        alt="CHARACTER"
        width={515}
        height={157}
        className="p5r-chara__title"
      />

      <div className="p5r-stage">
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
          alt={`${character.persona}`}
          width={600}
          height={600}
          className="p5r-stage__persona"
        />

        {/* 立绘：怪盗服 / 校服 双层叠放，点击右下角按钮淡入淡出切换（与官网一致） */}
        <div className="p5r-stage__art">
          <Image
            src={character.images.character}
            alt={character.codename}
            width={420}
            height={620}
            priority
            data-on={costume === 'thief'}
            className="p5r-stage__kaitou"
          />
          {hasSchool && (
            <Image
              src={character.images.school!}
              alt={`${character.codename} 校服`}
              width={420}
              height={620}
              data-on={costume === 'school'}
              className="p5r-stage__kaitou"
            />
          )}
        </div>

        <Image
          src={personaPlateOf(character.images.icon)}
          alt={`${t('chara.personaLabel')} ${character.persona}`}
          width={280}
          height={125}
          className="p5r-stage__persona-name"
        />

        <Image
          src={namePlateOf(character.images.icon, locale)}
          alt={character.codename}
          width={340}
          height={190}
          className="p5r-stage__name"
        />

        <div className="p5r-stage__panel">
          <Image
            src={profilePlateOf(character.images.icon)}
            alt=""
            aria-hidden
            width={395}
            height={346}
            className="p5r-stage__panel-bg"
          />
          <div className="p5r-stage__panel-in">
            <p className="p5r-stage__desc">{text.description}</p>
          </div>
        </div>

        <div className="p5r-stage__meta">
          <span>
            {t('chara.arcana')} · {character.arcana}
          </span>
          <span>{text.name}</span>
          <LocaleLink
            href={`/characters/${character.id}`}
            className="p5r-stage__link"
            aria-label={t('chara.aria', { name: character.codename })}
          >
            {t('chara.detail')}
          </LocaleLink>
        </div>

        {hasSchool && (
          <button
            type="button"
            className="p5r-stage__costume"
            onClick={() => setCostume((prev) => (prev === 'thief' ? 'school' : 'thief'))}
            aria-label={t('chara.costume')}
            data-costume={costume}
          >
            <Image
              src={
                costume === 'thief'
                  ? '/images/official/change_btn.webp'
                  : '/images/official/change_btn2.webp'
              }
              alt=""
              aria-hidden
              width={221}
              height={167}
            />
          </button>
        )}
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
            onClick={() => selectCharacter(index)}
          >
            <Image src={item.images.icon} alt="" aria-hidden width={120} height={120} />
          </button>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 26 }}>
        <LocaleLink href="/characters" className="p5r-btn p5r-btn--dark">
          <span>{t('chara.seeAll')}</span>
        </LocaleLink>
      </div>
    </section>
  );
}
