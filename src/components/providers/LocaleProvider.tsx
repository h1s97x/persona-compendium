'use client';

import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  DICTIONARIES,
  LOCALE_STORAGE_KEY,
  type Locale,
} from '@/lib/i18n/dictionary';
import { localePath, stripLocale } from '@/lib/i18n/paths';
import { resolveCharacterText, type CharacterText } from '@/lib/i18n/characters';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => undefined,
  t: (key) => key,
});

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // 根布局是数据无关的静态 <html lang>，这里按当前语言同步，保证可访问性与断词正确
  useEffect(() => {
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  // 语言由路由决定，切换即跳转到对应前缀
  const setLocale = useCallback(
    (next: Locale) => {
      if (next === initialLocale) return;
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        // 忽略隐私模式下的写入失败
      }
      router.push(localePath(next, stripLocale(pathname || '/')));
    },
    [initialLocale, pathname, router]
  );

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      const dictionary = DICTIONARIES[initialLocale];
      let text = dictionary[key] ?? DICTIONARIES[DEFAULT_LOCALE][key] ?? key;
      if (vars) {
        Object.entries(vars).forEach(([name, value]) => {
          text = text.replaceAll(`{${name}}`, value);
        });
      }
      return text;
    },
    [initialLocale]
  );

  const value = useMemo(
    () => ({ locale: initialLocale, setLocale, t }),
    [initialLocale, setLocale, t]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useI18n = () => useContext(LocaleContext);

/** 取当前语言的文案，缺失时回退到中文原始数据 */
export function useCharacterText(id: string, fallback: CharacterText): CharacterText {
  const { locale } = useI18n();
  return resolveCharacterText(locale, id, fallback);
}
