'use client';

import Image from 'next/image';
import { useI18n } from '@/components/providers/LocaleProvider';

const BRAND_LOGOS = [
  { src: '/images/logos/sega_logo_s.webp', alt: 'SEGA', width: 160, height: 40 },
  { src: '/images/logos/atlus_logo.webp', alt: 'ATLUS', width: 160, height: 40 },
  { src: '/images/p_studio_logo.webp', alt: 'P-Studio', width: 57, height: 86 },
  { src: '/images/electrome.webp', alt: 'ElectroME', width: 1080, height: 1080 },
];

const PLATFORM_LOGOS = [
  { src: '/images/platforms/ps5_logo.webp', alt: 'PlayStation 5', width: 120, height: 30 },
  { src: '/images/platforms/steam_logo.webp', alt: 'Steam', width: 120, height: 30 },
  { src: '/images/platforms/switch_logo.webp', alt: 'Nintendo Switch', width: 120, height: 30 },
  { src: '/images/platforms/xbox_xs_logo.webp', alt: 'Xbox Series X|S', width: 120, height: 30 },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="p5r-footer">
      <div className="p5r-footer__inner">
        <div className="p5r-footer__logos">
          {BRAND_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>

        <div className="p5r-footer__platforms">
          {PLATFORM_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>

        <div className="p5r-footer__legal">
          <strong>{t('footer.disclaimer')}</strong>
          <p>
            Microsoft Xbox Series X, Xbox Series S, Xbox One and related Xbox logos are trademarks
            and/or registered trademarks of Microsoft Corporation and the Microsoft group of companies.
          </p>
          <p>
            “PlayStation”, “PS4” and “PS5” are trademarks and/or registered trademarks of Sony
            Interactive Entertainment Inc.
          </p>
          <p>The Nintendo Switch LOGO, Nintendo Switch is a trademark of Nintendo.</p>
          <p>
            ©2021 Valve Corporation. Steam is trademarks and/or registered trademarks of Valve
            Corporation in the U.S. and/or other countries.
          </p>
          <p>©ATLUS ©SEGA All rights reserved.</p>
          <p>{t('footer.author')}</p>
        </div>
      </div>
    </footer>
  );
}
