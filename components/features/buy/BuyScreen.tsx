'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/components/providers/LocaleProvider';

const STORES = [
  { name: 'PlayStation 5', image: '/images/ps5_btn.webp', link: 'https://store.playstation.com' },
  { name: 'Nintendo Switch', image: '/images/switch_btn.webp', link: 'https://store.nintendo.com' },
  { name: 'Steam', image: '/images/steam_btn.webp', link: 'https://store.steampowered.com' },
  { name: 'Xbox Series X|S', image: '/images/xbox_xs_btn.webp', link: 'https://www.xbox.com' },
  { name: 'Xbox One', image: '/images/xbox_one_btn.webp', link: 'https://www.xbox.com' },
  { name: 'Windows', image: '/images/windows_btn.webp', link: 'https://www.microsoft.com/store' },
];

export default function BuyScreen() {
  const { t } = useI18n();
  const [intro1, intro2] = t('buy.intro').split('|');

  const specRows = [
    { label: t('spec.name'), value: t('spec.valueName'), note: '' },
    { label: t('spec.date'), value: t('spec.valueDate'), note: '' },
    { label: t('spec.type'), value: t('spec.valueType'), note: '' },
    { label: t('spec.players'), value: t('spec.valuePlayers'), note: '' },
    { label: t('spec.platforms'), value: t('spec.valuePlatforms'), note: t('spec.platformNote') },
    { label: t('spec.language'), value: t('spec.valueLanguage'), note: '' },
  ];

  return (
    <div className="p5r-page">
      <div className="p5r-shop-head">
        <Image
          src="/images/shopguide_title.webp"
          alt={t('buy.title')}
          width={318}
          height={249}
          priority
        />
        <Image src="/images/st.webp" alt="Physical edition" width={213} height={90} />
        <Image src="/images/dl.webp" alt="Digital edition" width={213} height={90} />
      </div>

      <p
        style={{
          textAlign: 'center',
          color: '#cfc6b4',
          fontSize: 14,
          lineHeight: 1.9,
          marginBottom: 26,
        }}
      >
        {intro1}
        {intro2 && (
          <>
            <br />
            {intro2}
          </>
        )}
      </p>

      <div className="p5r-stores">
        {STORES.map((store) => (
          <a
            key={store.name}
            href={store.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p5r-store"
            aria-label={t('buy.storeAria', { name: store.name })}
          >
            <Image src={store.image} alt={store.name} width={292} height={70} />
          </a>
        ))}
      </div>

      <section style={{ marginTop: 66 }}>
        <h2 className="p5r-h2" style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          {t('buy.specTitle')}
        </h2>
        <div className="p5r-panel" style={{ maxWidth: 860, margin: '0 auto' }}>
          {specRows.map((row) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                padding: '11px 0',
                borderBottom: '1px dashed rgba(216,180,95,0.2)',
              }}
            >
              <span
                style={{
                  flex: '0 0 110px',
                  fontSize: 13,
                  fontWeight: 800,
                  color: 'var(--p5r-gold-light)',
                  transform: 'skewX(-6deg)',
                }}
              >
                {row.label}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.85, color: '#ded5c4' }}>
                {row.value}
                {row.note && (
                  <small style={{ display: 'block', color: '#9b9385', fontSize: 11, marginTop: 2 }}>
                    {row.note}
                  </small>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 60, textAlign: 'center' }}>
        <h2 className="p5r-h3" style={{ marginBottom: 18, transform: 'skewX(-6deg)' }}>
          {t('buy.sysreq')}
        </h2>
        <Image
          src="/images/system_requirements.webp"
          alt={t('buy.sysreqAlt')}
          width={839}
          height={437}
          style={{ width: 'min(760px, 92%)', height: 'auto', margin: '0 auto', display: 'block' }}
        />
      </section>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 14,
          marginTop: 50,
          flexWrap: 'wrap',
        }}
      >
        <Link href="/gallery" className="p5r-btn p5r-btn--dark">
          <span>{t('buy.btnGallery')}</span>
        </Link>
        <Link href="/characters" className="p5r-btn">
          <span>{t('buy.btnCharacters')}</span>
        </Link>
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: 11,
          color: '#7d766a',
          marginTop: 30,
          lineHeight: 1.9,
        }}
      >
        {t('buy.note')}
        <br />
        ©ATLUS ©SEGA All rights reserved.
      </p>
    </div>
  );
}
