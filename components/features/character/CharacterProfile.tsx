'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CHARACTERS } from '@/lib/constants';
import { useCharacterText, useI18n } from '@/components/providers/LocaleProvider';
import type { Character } from '@/types';

const STAT_NAMES: Record<string, Record<string, string>> = {
  'zh-CN': { strength: '力量', magic: '魔力', endurance: '耐久', agility: '敏捷', luck: '运气' },
  'zh-TW': { strength: '力量', magic: '魔力', endurance: '耐久', agility: '敏捷', luck: '運氣' },
  en: { strength: 'STR', magic: 'MAG', endurance: 'END', agility: 'AGI', luck: 'LUK' },
  ja: { strength: '力', magic: '魔', endurance: '耐', agility: '速', luck: '運' },
};

const namePlateOf = (icon: string) => {
  const matched = icon.match(/changebtn(\d+)\./);
  return matched ? `/images/chara${matched[1]}_name.webp` : '/images/chara_title.webp';
};

export default function CharacterProfile({ character }: { character: Character }) {
  const { t, locale } = useI18n();
  const text = useCharacterText(character.id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });

  const index = CHARACTERS.findIndex((item) => item.id === character.id);
  const prev = CHARACTERS[(index - 1 + CHARACTERS.length) % CHARACTERS.length];
  const next = CHARACTERS[(index + 1) % CHARACTERS.length];
  const statNames = STAT_NAMES[locale] ?? STAT_NAMES['zh-CN'];

  return (
    <div className="p5r-page">
      <div style={{ marginBottom: 22 }}>
        <Link href="/characters" className="p5r-btn p5r-btn--dark">
          <span>{t('detail.back')}</span>
        </Link>
      </div>

      <article className="p5r-panel" style={{ padding: 0 }}>
        <div
          className="p5r-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
            gap: 0,
          }}
        >
          {/* 立绘舞台 */}
          <div
            style={{
              position: 'relative',
              minHeight: 420,
              overflow: 'hidden',
              background:
                'radial-gradient(circle at 55% 40%, rgba(230,0,18,0.32), transparent 62%), #070707',
              borderRight: '1px solid rgba(216,180,95,0.22)',
            }}
          >
            <Image
              src="/images/chara_star.webp"
              alt=""
              aria-hidden
              width={739}
              height={719}
              style={{
                position: 'absolute',
                left: '8%',
                top: '4%',
                width: '62%',
                height: 'auto',
                opacity: 0.75,
              }}
            />
            <Image
              src={character.images.persona}
              alt={character.persona}
              width={320}
              height={420}
              style={{
                position: 'absolute',
                right: '4%',
                bottom: 0,
                height: '78%',
                width: 'auto',
                opacity: 0.9,
                zIndex: 1,
              }}
            />
            <Image
              src={character.images.character}
              alt={character.codename}
              width={420}
              height={620}
              priority
              style={{
                position: 'absolute',
                left: '48%',
                bottom: 0,
                height: '92%',
                width: 'auto',
                transform: 'translateX(-50%)',
                zIndex: 2,
                filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.8))',
              }}
            />
          </div>

          {/* 档案 */}
          <div style={{ padding: '32px 30px 36px' }}>
            <Image
              src={namePlateOf(character.images.icon)}
              alt={character.codename}
              width={340}
              height={190}
              style={{
                width: '54%',
                height: 'auto',
                transform: 'rotate(-3deg)',
                marginBottom: 6,
              }}
            />

            <p
              style={{
                fontSize: 12,
                letterSpacing: '0.22em',
                color: 'var(--p5r-red)',
                fontWeight: 700,
              }}
            >
              {character.arcana}
            </p>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: 'var(--p5r-gold-light)',
                letterSpacing: '0.04em',
                marginBottom: 12,
              }}
            >
              {text.name}
            </h1>
            <p style={{ fontSize: 14, lineHeight: 2, color: '#d5ccba' }}>{text.description}</p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 22,
                padding: '10px 14px',
                border: '2px solid rgba(216,180,95,0.5)',
                background: 'rgba(0,0,0,0.45)',
                transform: 'skewX(-6deg)',
              }}
            >
              <span style={{ fontSize: 11, color: '#a89f8e', transform: 'skewX(6deg)' }}>
                {t('detail.personaLabel')}
              </span>
              <b
                style={{
                  fontSize: 16,
                  color: 'var(--p5r-gold-light)',
                  transform: 'skewX(6deg)',
                }}
              >
                {character.persona}
              </b>
            </div>

            <h2
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: 'var(--p5r-gold-light)',
                margin: '26px 0 12px',
                letterSpacing: '0.12em',
              }}
            >
              {t('detail.ability')}
            </h2>
            <div style={{ display: 'grid', gap: 9 }}>
              {Object.entries(character.stats).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 46, fontSize: 12, color: '#b8ae9b' }}>
                    {statNames[key] ?? key}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 8,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(216,180,95,0.25)',
                    }}
                  >
                    <div
                      style={{
                        width: `${value}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #e60012, #d8b45f)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      width: 26,
                      textAlign: 'right',
                      fontSize: 12,
                      color: 'var(--p5r-gold-light)',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <h2
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: 'var(--p5r-gold-light)',
                margin: '22px 0 10px',
                letterSpacing: '0.12em',
              }}
            >
              {t('detail.skill')}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {character.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '4px 10px',
                    fontSize: 12,
                    color: '#e8dfcd',
                    border: '1px solid rgba(216,180,95,0.4)',
                    background: 'rgba(230,0,18,0.12)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {text.story && (
        <section className="p5r-panel" style={{ marginTop: 26, padding: '24px 26px' }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 900,
              color: 'var(--p5r-gold-light)',
              marginBottom: 10,
              transform: 'skewX(-6deg)',
            }}
          >
            {t('detail.story')}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 2, color: '#d5ccba' }}>{text.story}</p>
        </section>
      )}

      <nav style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 26 }}>
        <Link href={`/characters/${prev.id}`} className="p5r-btn p5r-btn--dark">
          <span>← {prev.codename}</span>
        </Link>
        <Link href={`/characters/${next.id}`} className="p5r-btn p5r-btn--dark">
          <span>{next.codename} →</span>
        </Link>
      </nav>
    </div>
  );
}
