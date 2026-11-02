'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { useI18n } from '@/components/providers/LocaleProvider';
import { localAsset } from '@/lib/i18n/assets';

/** 商店按钮只作展示：保留官方贴图与悬浮效果，不再跳转外部商店 */
const STORES = [
  { name: 'PlayStation 5', image: '/images/ps5_btn.webp' },
  { name: 'Nintendo Switch', image: '/images/switch_btn.webp' },
  { name: 'Steam', image: '/images/steam_btn.webp' },
  { name: 'Xbox Series X|S', image: '/images/xbox_xs_btn.webp' },
  { name: 'Xbox One', image: '/images/xbox_one_btn.webp' },
  { name: 'Windows', image: '/images/windows_btn.webp' },
];

export default function BuyScreen() {
  const { t, locale } = useI18n();
  const [intro1, intro2] = t('buy.intro').split('|');
  /** 「购买指南」标题图与「实体版/下载版」牌子只有中文版，其他语言改用文字排版 */
  const hasCjkArt = locale === 'zh-CN' || locale === 'zh-TW';
  const titleSrc =
    locale === 'zh-CN' ? '/images/shopguide_title.webp' : localAsset(locale, 'shopguide_title');

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
        {hasCjkArt ? (
          <Image src={titleSrc} alt={t('buy.title')} width={318} height={249} priority />
        ) : (
          <h1 className="p5r-shop-head__title">{t('buy.title')}</h1>
        )}
        {hasCjkArt ? (
          <>
            <Image src="/images/st.webp" alt={t('buy.physical')} width={213} height={90} />
            <Image src="/images/dl.webp" alt={t('buy.digital')} width={213} height={90} />
          </>
        ) : (
          <>
            <span className="p5r-shop-head__badge">{t('buy.physical')}</span>
            <span className="p5r-shop-head__badge">{t('buy.digital')}</span>
          </>
        )}
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
          <div key={store.name} className="p5r-store" title={store.name}>
            <Image src={store.image} alt={store.name} width={292} height={70} />
          </div>
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
        <LocaleLink href="/gallery" className="p5r-btn p5r-btn--dark">
          <span>{t('buy.btnGallery')}</span>
        </LocaleLink>
        <LocaleLink href="/characters" className="p5r-btn">
          <span>{t('buy.btnCharacters')}</span>
        </LocaleLink>
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
