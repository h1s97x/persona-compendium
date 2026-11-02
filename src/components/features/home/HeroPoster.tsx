'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useI18n } from '@/components/providers/LocaleProvider';
import { useFitScale } from '@/hooks/useFitScale';

/** 官网 main section.first-view + .kv-wrapper 的画布宽度 */
const CANVAS_W = 1024;

export default function HeroPoster() {
  const [isPvOpen, setIsPvOpen] = useState(false);
  const { t } = useI18n();
  const { ref, scale } = useFitScale(CANVAS_W);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPvOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="p5r-hero">
      <div
        className="p5r-hero__fit"
        ref={ref}
        style={{ '--hero-scale': scale } as CSSProperties}
      >
        <div className="p5r-hero__canvas">
          {/* 主视觉：官网 .kv（918×670，居中） */}
          <div className="p5r-hero__kv" aria-hidden />

          {/* 左列：文案条 + 主标语 + PV（官网 .first-view .column:first-child） */}
          <div className="p5r-hero__col p5r-hero__col--l">
            <Image
              src="/images/official/fv_copy1.webp"
              alt=""
              aria-hidden
              width={326}
              height={33}
              priority
              className="p5r-hero__copy1"
            />
            <Image
              src="/images/official/fv_copy2.webp"
              alt=""
              aria-hidden
              width={347}
              height={313}
              priority
              className="p5r-hero__copy2"
            />
            <button
              type="button"
              className="p5r-hero__pv"
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
          </div>

          {/* 右列：发售日 + 预购按钮（官网 .column:nth-child(2)，右对齐） */}
          <div className="p5r-hero__col p5r-hero__col--r">
            <Image
              src="/images/official/fv_release_date.webp"
              alt=""
              aria-hidden
              width={310}
              height={218}
              priority
              className="p5r-hero__release"
            />
            <LocaleLink href="/buy" className="p5r-hero__preorder" aria-label={t('hero.buy')}>
              <Image
                src="/images/official/pre_order_btn.webp"
                alt={t('hero.buy')}
                width={338}
                height={132}
              />
            </LocaleLink>
          </div>

          {/* 标题 logo：官网 h1.logo（339×237，压在画面左下） */}
          <Image
            src="/images/official/fv_logo.webp"
            alt="Persona 5 Royal"
            width={339}
            height={237}
            priority
            className="p5r-hero__logo"
          />
        </div>
      </div>

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
