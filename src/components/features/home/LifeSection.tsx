'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useI18n } from '@/components/providers/LocaleProvider';
import { LIFE_COPY, LIFE_TITLES } from '@/lib/i18n/life';
import { lifeTitleAsset, localAsset } from '@/lib/i18n/assets';

const IMG = '/images/official';

type Shot = { name: string; w: number; h: number };

type Panel = {
  bg: string;
  /** 官网图片字小标题的素材名，运行时按语言从 /images/i18n/<locale>/ 取 */
  copy: string;
  layout: 'a' | 'b';
  shots: Shot[];
  deco: string;
};

/** 每屏 1~2 块黑金斜切面板，位置取自官网版式 */
type Slide = { panels: Panel[] };

const SCHOOL_SLIDES: Slide[] = [
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text1.webp`,
        copy: 'school_life_copy1',
        layout: 'a',
        shots: [{ name: 'school_life_ss1', w: 366, h: 273 }],
        deco: `${IMG}/school_life_deco1.webp`,
      },
      {
        bg: `${IMG}/bg_slider_text2.webp`,
        copy: 'school_life_copy2',
        layout: 'b',
        shots: [{ name: 'school_life_ss2', w: 358, h: 254 }],
        deco: `${IMG}/school_life_deco2.webp`,
      },
    ],
  },
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text1.webp`,
        copy: 'school_life_copy3',
        layout: 'a',
        shots: [{ name: 'school_life_ss3', w: 375, h: 289 }],
        deco: `${IMG}/school_life_deco3.webp`,
      },
      {
        bg: `${IMG}/bg_slider_text2.webp`,
        copy: 'school_life_copy4',
        layout: 'b',
        shots: [{ name: 'school_life_ss4', w: 337, h: 232 }],
        deco: `${IMG}/school_life_deco4.webp`,
      },
    ],
  },
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text3.webp`,
        copy: 'school_life_copy5',
        layout: 'a',
        shots: [{ name: 'school_life_ss5', w: 362, h: 249 }],
        deco: `${IMG}/school_life_deco5.webp`,
      },
    ],
  },
];

const PHANTOM_SLIDES: Slide[] = [
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text4.webp`,
        copy: 'phantom_life_copy1',
        layout: 'a',
        shots: [
          { name: 'phantom_life_ss1', w: 297, h: 202 },
          { name: 'phantom_life_ss2', w: 300, h: 215 },
        ],
        deco: `${IMG}/phantom_life_deco1.webp`,
      },
      {
        bg: `${IMG}/bg_slider_text5.webp`,
        copy: 'phantom_life_copy2',
        layout: 'b',
        shots: [
          { name: 'phantom_life_ss3', w: 303, h: 209 },
          { name: 'phantom_life_ss4', w: 303, h: 209 },
        ],
        deco: `${IMG}/phantom_life_deco2.webp`,
      },
    ],
  },
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text4.webp`,
        copy: 'phantom_life_copy3',
        layout: 'a',
        shots: [{ name: 'phantom_life_ss5', w: 386, h: 312 }],
        deco: `${IMG}/phantom_life_deco3.webp`,
      },
      {
        bg: `${IMG}/bg_slider_text6.webp`,
        copy: 'phantom_life_copy4',
        layout: 'b',
        shots: [
          { name: 'phantom_life_ss6', w: 350, h: 241 },
          { name: 'phantom_life_ss7', w: 350, h: 241 },
        ],
        deco: `${IMG}/phantom_life_deco4.webp`,
      },
    ],
  },
  {
    panels: [
      {
        bg: `${IMG}/bg_slider_text7.webp`,
        copy: 'phantom_life_copy5',
        layout: 'a',
        shots: [
          { name: 'phantom_life_ss8', w: 339, h: 244 },
          { name: 'phantom_life_ss9', w: 377, h: 304 },
        ],
        deco: `${IMG}/phantom_life_deco5.webp`,
      },
      {
        bg: `${IMG}/bg_slider_text8.webp`,
        copy: 'phantom_life_copy6',
        layout: 'b',
        shots: [
          { name: 'phantom_life_ss10', w: 361, h: 277 },
          { name: 'phantom_life_ss11', w: 347, h: 250 },
        ],
        deco: `${IMG}/phantom_life_deco6.webp`,
      },
    ],
  },
];

type Props = { kind: 'school' | 'phantom' };

export default function LifeSection({ kind }: Props) {
  const [index, setIndex] = useState(0);
  const { locale, t } = useI18n();

  const slides = kind === 'school' ? SCHOOL_SLIDES : PHANTOM_SLIDES;
  const pages = LIFE_COPY[locale][kind];
  const total = slides.length;
  const current = Math.min(index, total - 1);
  const slide = slides[current];

  const go = (step: number) => setIndex((prev) => (prev + step + total) % total);

  const title = LIFE_TITLES[locale][kind];

  return (
    <section
      id={kind === 'school' ? 'school-life' : 'phantom-life'}
      className={`p5r-life p5r-life--${kind}`}
    >
      <h2 className="p5r-life__title">
        <Image
          src={lifeTitleAsset(locale, kind)}
          alt={title}
          width={kind === 'school' ? 421 : 440}
          height={kind === 'school' ? 237 : 219}
        />
        <span className="p5r-visually-hidden">{title}</span>
      </h2>

      <div className="p5r-life__stage">
        {slide.panels.map((panel, panelIndex) => {
          const page = pages[panelIndex === 0 ? current * 2 : current * 2 + 1] ?? pages[0];
          return (
            <article
              key={`${current}-${panelIndex}`}
              className={`p5r-life__panel p5r-life__panel--${panel.layout} p5r-slide`}
              style={{ backgroundImage: `url('${panel.bg}')` }}
            >
              <Image
                src={localAsset(locale, panel.copy)}
                alt={page.title}
                width={440}
                height={160}
                className="p5r-life__copy"
              />
              <div className="p5r-life__body">
                {page.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="p5r-life__shots">
                {panel.shots.map((shot) => (
                  <Image
                    key={shot.name}
                    src={localAsset(locale, shot.name)}
                    alt=""
                    aria-hidden
                    width={shot.w}
                    height={shot.h}
                  />
                ))}
              </div>
              <Image
                src={panel.deco}
                alt=""
                aria-hidden
                width={320}
                height={300}
                className="p5r-life__deco"
              />
            </article>
          );
        })}
      </div>

      <div className="p5r-life__nav">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t('gallery.prev')}
          className="p5r-life__arrow p5r-life__arrow--prev"
        />
        <span className="p5r-life__dots" aria-hidden>
          {slides.map((_, dot) => (
            <i key={dot} data-active={dot === current} />
          ))}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t('gallery.next')}
          className="p5r-life__arrow p5r-life__arrow--next"
        />
      </div>
    </section>
  );
}
