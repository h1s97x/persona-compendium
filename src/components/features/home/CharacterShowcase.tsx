'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { CHARACTERS } from '@/lib/constants';
import { useCharacterText, useI18n } from '@/components/providers/LocaleProvider';
import { localAsset } from '@/lib/i18n/assets';
import { useFitScale } from '@/hooks/useFitScale';
import type { Locale } from '@/lib/i18n/dictionary';

/** 官网 1305×1000 画布；所有坐标直接取自官方 top.css，不做百分比换算 */
const CANVAS_W = 1305;

type Box = { top: number; left: number };

type CharaLayout = {
  /** 官网编号，对应 charaN / personaN 素材 */
  n: number;
  name: { w: number; h: number; top: number; left: number };
  thief: Box;
  school?: Box;
  persona: Box;
  pname: Box;
  txt: { top: number; left: number; pt: number; pl: number };
  txtBg: { w: number; h: number };
  pnameSize: { w: number; h: number };
};

const LAYOUT: Record<string, CharaLayout> = {
  joker: {
    n: 1,
    name: { w: 303, h: 185, top: 250, left: 59 },
    thief: { top: 260, left: 378 },
    school: { top: 226, left: 186 },
    persona: { top: 4, left: 540 },
    pname: { top: 326, left: 743 },
    txt: { top: 432, left: 69, pt: 39, pl: 28 },
    txtBg: { w: 395, h: 346 },
    pnameSize: { w: 280, h: 125 },
  },
  skull: {
    n: 2,
    name: { w: 345, h: 167, top: 272, left: 45 },
    thief: { top: 200, left: 400 },
    school: { top: 270, left: 290 },
    persona: { top: 150, left: 620 },
    pname: { top: 333, left: 710 },
    txt: { top: 432, left: 69, pt: 41, pl: 27 },
    txtBg: { w: 535, h: 307 },
    pnameSize: { w: 251, h: 125 },
  },
  panther: {
    n: 3,
    name: { w: 322, h: 187, top: 256, left: 39 },
    thief: { top: 198, left: 392 },
    school: { top: 83, left: 150 },
    persona: { top: 134, left: 550 },
    pname: { top: 390, left: 726 },
    txt: { top: 432, left: 69, pt: 39, pl: 27 },
    txtBg: { w: 423, h: 309 },
    pnameSize: { w: 229, h: 109 },
  },
  queen: {
    n: 4,
    name: { w: 299, h: 155, top: 272, left: 46 },
    thief: { top: 273, left: 454 },
    school: { top: 214, left: 360 },
    persona: { top: 173, left: 584 },
    pname: { top: 392, left: 713 },
    txt: { top: 432, left: 69, pt: 39, pl: 33 },
    txtBg: { w: 442, h: 309 },
    pnameSize: { w: 263, h: 135 },
  },
  noir: {
    n: 5,
    name: { w: 308, h: 171, top: 257, left: 39 },
    thief: { top: 238, left: 488 },
    school: { top: 199, left: 405 },
    persona: { top: 183, left: 536 },
    pname: { top: 410, left: 729 },
    txt: { top: 432, left: 69, pt: 40, pl: 33 },
    txtBg: { w: 509, h: 309 },
    pnameSize: { w: 278, h: 135 },
  },
  violet: {
    n: 6,
    name: { w: 339, h: 147, top: 272, left: 37 },
    thief: { top: 150, left: 450 },
    school: { top: 214, left: 430 },
    persona: { top: 130, left: 570 },
    pname: { top: 400, left: 715 },
    txt: { top: 432, left: 69, pt: 39, pl: 33 },
    txtBg: { w: 395, h: 269 },
    pnameSize: { w: 249, h: 143 },
  },
  mona: {
    n: 7,
    name: { w: 328, h: 162, top: 273, left: 36 },
    thief: { top: 200, left: 387 },
    persona: { top: 110, left: 720 },
    pname: { top: 370, left: 760 },
    txt: { top: 432, left: 69, pt: 40, pl: 33 },
    txtBg: { w: 480, h: 311 },
    pnameSize: { w: 257, h: 139 },
  },
  fox: {
    n: 8,
    name: { w: 365, h: 195, top: 251, left: 37 },
    thief: { top: 198, left: 395 },
    school: { top: 198, left: 395 },
    persona: { top: 157, left: 533 },
    pname: { top: 408, left: 724 },
    txt: { top: 432, left: 69, pt: 39, pl: 33 },
    txtBg: { w: 452, h: 346 },
    pnameSize: { w: 291, h: 136 },
  },
  navi: {
    n: 9,
    name: { w: 341, h: 160, top: 257, left: 30 },
    thief: { top: 307, left: 272 },
    school: { top: 261, left: 381 },
    persona: { top: 157, left: 627 },
    pname: { top: 366, left: 667 },
    txt: { top: 432, left: 69, pt: 40, pl: 34 },
    txtBg: { w: 458, h: 309 },
    pnameSize: { w: 301, h: 138 },
  },
  crow: {
    n: 10,
    name: { w: 362, h: 154, top: 270, left: 39 },
    thief: { top: 225, left: 458 },
    school: { top: 253, left: 376 },
    persona: { top: 37, left: 405 },
    pname: { top: 444, left: 709 },
    txt: { top: 432, left: 69, pt: 40, pl: 33 },
    txtBg: { w: 636, h: 343 },
    pnameSize: { w: 270, h: 154 },
  },
};

/** 底部两排切换图标，顺序取自官网 .character-btn（1/3/5/7/9 在流内，2/4/6/8/10 绝对定位） */
const STRIP = [
  { id: 'joker', img: 'btn_chara_hero' },
  { id: 'violet', img: 'btn_chara_kasumi' },
  { id: 'skull', img: 'btn_chara_ryuji' },
  { id: 'mona', img: 'btn_chara_morugana' },
  { id: 'panther', img: 'btn_chara_anne' },
  { id: 'fox', img: 'btn_chara_yusuke' },
  { id: 'queen', img: 'btn_chara_makoto' },
  { id: 'navi', img: 'btn_chara_futaba' },
  { id: 'noir', img: 'btn_chara_haru' },
  { id: 'crow', img: 'btn_chara_akechi' },
];

/** 每个 txt_bg 斜切面板内可安全排字的列宽：量自贴图不透明黑底的右边界 - 左内边距 */
const TXT_WIDTH: Record<number, number> = {
  1: 192,
  2: 212,
  3: 240,
  4: 164,
  5: 182,
  6: 169,
  7: 181,
  8: 205,
  9: 192,
  10: 240,
};

const namePlateOf = (n: number, locale: Locale) => localAsset(locale, `chara${n}_name`);

type Costume = 'thief' | 'school';

export default function CharacterShowcase() {
  const [current, setCurrent] = useState(0);
  const [costume, setCostume] = useState<Costume>('thief');
  const { ref: fitRef, scale } = useFitScale(CANVAS_W);
  const { t, locale } = useI18n();

  const character = CHARACTERS[current];
  const layout = LAYOUT[character.id] ?? LAYOUT.joker;
  const text = useCharacterText(character.id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });
  const hasSchool = Boolean(character.images.school);

  const selectCharacter = (id: string) => {
    const index = CHARACTERS.findIndex((item) => item.id === id);
    if (index >= 0) setCurrent(index);
    setCostume('thief');
  };

  const vars = {
    '--chara-scale': scale,
    '--name-w': `${layout.name.w}px`,
    '--name-h': `${layout.name.h}px`,
    '--name-top': `${layout.name.top}px`,
    '--name-left': `${layout.name.left}px`,
    '--c1-top': `${layout.thief.top}px`,
    '--c1-left': `${layout.thief.left}px`,
    '--c2-top': `${layout.school?.top ?? 0}px`,
    '--c2-left': `${layout.school?.left ?? 0}px`,
    '--persona-top': `${layout.persona.top}px`,
    '--persona-left': `${layout.persona.left}px`,
    '--pname-top': `${layout.pname.top}px`,
    '--pname-left': `${layout.pname.left}px`,
    '--txt-top': `${layout.txt.top}px`,
    '--txt-left': `${layout.txt.left}px`,
    '--txt-pt': `${layout.txt.pt}px`,
    '--txt-pl': `${layout.txt.pl}px`,
    '--txt-w': `${TXT_WIDTH[layout.n] ?? 200}px`,
  } as CSSProperties;

  return (
    <section id="characters" className="p5r-section p5r-chara" style={vars}>
      <h2 className="p5r-chara__title">
        <Image src={localAsset(locale, 'chara_title')} alt="CHARACTER" width={515} height={157} />
      </h2>

      <div className="p5r-chara__fit" ref={fitRef}>
        <div className="p5r-chara__canvas">
          <Image
            src="/images/chara_star.webp"
            alt=""
            aria-hidden
            width={739}
            height={719}
            className="p5r-chara__star"
          />

          <h3 className="p5r-chara__name">
            <Image
              src={namePlateOf(layout.n, locale)}
              alt={character.codename}
              width={layout.name.w}
              height={layout.name.h}
            />
          </h3>

          <div className="p5r-chara__box" data-costume={costume}>
            <div className="p5r-chara__costume p5r-chara__costume--1">
              <Image
                src={character.images.character}
                alt={character.codename}
                width={600}
                height={740}
                priority
              />
            </div>
            {hasSchool && (
              <div className="p5r-chara__costume p5r-chara__costume--2">
                <Image
                  src={character.images.school!}
                  alt={`${character.codename} ${t('chara.school')}`}
                  width={600}
                  height={740}
                />
              </div>
            )}

            {hasSchool && (
              <button
                type="button"
                className="p5r-chara__change"
                data-on={costume === 'school'}
                onClick={() => setCostume((prev) => (prev === 'thief' ? 'school' : 'thief'))}
                aria-label={t('chara.costume')}
              >
                <Image
                  src="/images/official/change_btn.webp"
                  alt=""
                  aria-hidden
                  width={221}
                  height={167}
                />
                <Image
                  src="/images/official/change_btn2.webp"
                  alt=""
                  aria-hidden
                  width={221}
                  height={167}
                />
              </button>
            )}
          </div>

          <div className="p5r-chara__persona">
            <Image
              src={character.images.persona}
              alt={character.persona}
              width={900}
              height={780}
            />
          </div>

          <div className="p5r-chara__pname">
            <Image
              src={`/images/official/persona${layout.n}_name.webp`}
              alt={`${t('chara.personaLabel')} ${character.persona}`}
              width={layout.pnameSize.w}
              height={layout.pnameSize.h}
            />
          </div>

          <div className="p5r-chara__txt">
            <Image
              src={`/images/official/chara${layout.n}_txt_bg.webp`}
              alt=""
              aria-hidden
              width={layout.txtBg.w}
              height={layout.txtBg.h}
              className="p5r-chara__txt-bg"
            />
            <p className="p5r-chara__profile">{text.description}</p>

            <div className="p5r-chara__meta">
              <span>
                {t('chara.arcana')} · {character.arcana}
              </span>
              <LocaleLink
                href={`/characters/${character.id}`}
                className="p5r-stage__link"
                aria-label={t('chara.aria', { name: character.codename })}
              >
                {t('chara.detail')}
              </LocaleLink>
            </div>
          </div>

          <div className="p5r-chara__strip" role="tablist" aria-label="角色切换">
            {STRIP.map((item) => {
              const target = CHARACTERS.find((c) => c.id === item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={target?.id === character.id}
                  aria-label={target?.codename ?? item.id}
                  data-current={target?.id === character.id}
                  onClick={() => selectCharacter(item.id)}
                >
                  <Image
                    src={`/images/official/${item.img}.webp`}
                    alt=""
                    aria-hidden
                    width={130}
                    height={180}
                    className="p5r-chara__strip-img"
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="p5r-chara__arrow p5r-chara__arrow--prev"
            aria-label={t('gallery.prev')}
            onClick={() =>
              selectCharacter(CHARACTERS[(current - 1 + CHARACTERS.length) % CHARACTERS.length].id)
            }
          />
          <button
            type="button"
            className="p5r-chara__arrow p5r-chara__arrow--next"
            aria-label={t('gallery.next')}
            onClick={() => selectCharacter(CHARACTERS[(current + 1) % CHARACTERS.length].id)}
          />
        </div>
      </div>

      <div className="p5r-chara__more">
        <LocaleLink href="/characters" className="p5r-btn p5r-btn--dark">
          <span>{t('chara.seeAll')}</span>
        </LocaleLink>
      </div>
    </section>
  );
}
