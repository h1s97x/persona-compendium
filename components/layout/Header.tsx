'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AudioPlayer from '@/components/effects/AudioPlayer';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { useI18n } from '@/components/providers/LocaleProvider';

const NAV_ITEMS = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/characters', labelKey: 'nav.characters' },
  { href: '/gallery', labelKey: 'nav.gallery' },
  { href: '/buy', labelKey: 'nav.buy' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="p5r-header">
      <div className="p5r-header__in">
        <Link href="/" className="p5r-header__logo" aria-label={t('header.logoAria')}>
          <Image src="/images/p5r.png" alt="Persona 5 Royal" width={824} height={567} priority />
        </Link>

        <div className="p5r-header__actions">
          <nav className="p5r-nav p5r-nav--desktop" aria-label="主导航">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`p5r-btn${isActive(item.href) ? ' p5r-btn--red' : ''}`}
              >
                <span>{t(item.labelKey)}</span>
              </Link>
            ))}
            <a
              href="https://asia.sega.com/persona-remaster/p5r/"
              target="_blank"
              rel="noopener noreferrer"
              className="p5r-btn p5r-btn--dark"
            >
              <span>{t('nav.official')}</span>
            </a>
          </nav>

          <LanguageSwitcher />
          <AudioPlayer />

          <button
            type="button"
            className="p5r-nav-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t('header.menuClose') : t('header.menuOpen')}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="p5r-nav p5r-nav--mobile" aria-label="移动端导航">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p5r-btn${isActive(item.href) ? ' p5r-btn--red' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{t(item.labelKey)}</span>
            </Link>
          ))}
          <a
            href="https://asia.sega.com/persona-remaster/p5r/"
            target="_blank"
            rel="noopener noreferrer"
            className="p5r-btn p5r-btn--dark"
          >
            <span>{t('nav.official')}</span>
          </a>
        </nav>
      )}
    </header>
  );
}
