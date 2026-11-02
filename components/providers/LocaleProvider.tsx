'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {
  DEFAULT_LOCALE,
  DICTIONARIES,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from '@/lib/i18n/dictionary';
import { CHARACTER_TEXT, type CharacterText } from '@/lib/i18n/characters';
import { OFFICIAL_CONTENT } from '@/lib/i18n/official-content';

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

/* 语言存放在 localStorage，用外部 store 读取，避免水合期不一致 */
let cachedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  if (cachedLocale) return cachedLocale;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) {
      cachedLocale = stored;
      return cachedLocale;
    }
  } catch {
    // 隐私模式下 localStorage 可能不可用
  }
  cachedLocale = DEFAULT_LOCALE;
  return cachedLocale;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function writeLocale(next: Locale) {
  cachedLocale = next;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {
    // 忽略写入失败
  }
  listeners.forEach((listener) => listener());
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readStoredLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => writeLocale(next), []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      const dictionary = DICTIONARIES[locale];
      let text = dictionary[key] ?? DICTIONARIES[DEFAULT_LOCALE][key] ?? key;
      if (vars) {
        Object.entries(vars).forEach(([name, value]) => {
          text = text.replaceAll(`{${name}}`, value);
        });
      }
      return text;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useI18n = () => useContext(LocaleContext);

/** 取当前语言的文案，缺失时回退到中文原始数据 */
export function useCharacterText(
  id: string,
  fallback: CharacterText,
): CharacterText {
  const { locale } = useI18n();

  const handWritten = CHARACTER_TEXT[locale]?.[id];
  if (handWritten) return handWritten;

  const officialBio = OFFICIAL_CONTENT[locale]?.characters[id];
  if (officialBio) {
    const englishName = CHARACTER_TEXT.en?.[id]?.name;
    return {
      name: englishName ?? fallback.name,
      description: officialBio,
      story: '',
    };
  }

  return fallback;
}
