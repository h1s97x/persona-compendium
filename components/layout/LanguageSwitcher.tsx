'use client';

import { useEffect, useRef, useState } from 'react';
import { LOCALES } from '@/lib/i18n/dictionary';
import { useI18n } from '@/components/providers/LocaleProvider';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!isOpen) return;

    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="p5r-lang" ref={rootRef}>
      <button
        type="button"
        className="p5r-lang__btn"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t('header.lang')}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          aria-hidden
          className="p5r-lang__globe"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.6 2.7 2.6 15.3 0 18" />
          <path d="M12 3c-2.6 2.7-2.6 15.3 0 18" />
        </svg>
        <span>{current.short}</span>
        <span aria-hidden className="p5r-lang__caret">
          ▾
        </span>
      </button>

      {isOpen && (
        <ul className="p5r-lang__menu" role="listbox" aria-label={t('header.lang')}>
          {LOCALES.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                role="option"
                aria-selected={item.code === locale}
                data-active={item.code === locale}
                onClick={() => {
                  setLocale(item.code);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
