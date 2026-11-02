'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { useEffect, useState } from 'react';
import { useI18n } from '@/components/providers/LocaleProvider';
import { heroBuyImage, heroPrBadge } from '@/lib/i18n/assets';

export default function HeroPoster() {
  const [isPvOpen, setIsPvOpen] = useState(false);
  const { t, locale } = useI18n();
  const badge = heroPrBadge(locale);
  const buyImage = heroBuyImage(locale);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPvOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="p5r-section p5r-hero">
      {badge.kind === 'copy' ? (
        <Image
          src={badge.src}
          alt=""
          aria-hidden
          width={347}
          height={313}
          className="p5r-float p5r-float--l"
        />
      ) : (
        <Image
          src={badge.src}
          alt={t('hero.availableNow')}
          width={168}
          height={126}
          className="p5r-float p5r-float--l p5r-float--badge"
        />
      )}
      <Image
        src="/images/text2.webp"
        alt=""
        aria-hidden
        width={310}
        height={218}
        className="p5r-float p5r-float--r"
      />

      <Image
        src="/images/p5r.png"
        alt="Persona 5 Royal"
        width={824}
        height={567}
        priority
        className="p5r-hero__logo"
      />

      <button
        type="button"
        className="p5r-pv"
        onClick={() => setIsPvOpen(true)}
        aria-label={t('hero.pvAria')}
      >
        <video
          src="/assets/p5r_pv.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      </button>

      <LocaleLink
        href="/buy"
        className={`p5r-hero__buynow${buyImage ? '' : ' p5r-hero__buynow--text'}`}
        aria-label={t('hero.buy')}
      >
        {buyImage ? (
          <Image src={buyImage} alt={t('hero.buy')} width={338} height={132} />
        ) : (
          <span>{t('hero.buy')}</span>
        )}
      </LocaleLink>

      {isPvOpen && (
        <div
          className="p5r-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPvOpen(false)}
        >
          <div className="p5r-modal__box" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="p5r-modal__close"
              onClick={() => setIsPvOpen(false)}
              aria-label={t('hero.pvClose')}
            >
              ✕
            </button>
            <video src="/assets/p5r_pv.mp4" controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
