import { DEFAULT_LOCALE, LOCALES, type Locale } from './dictionary';

/** 默认语言（简中）不带前缀，其余语言为 /ja、/en … */
export const localePath = (locale: Locale, path = '/') => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
};

/** 从当前路径里剥掉语言前缀，得到站内路径 */
export const stripLocale = (pathname: string) => {
  for (const { code } of LOCALES) {
    if (code === DEFAULT_LOCALE) continue;
    if (pathname === `/${code}`) return '/';
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(code.length + 1);
  }
  return pathname || '/';
};

/** hreflang / 站点地图用的多语言地址表 */
export const alternateLanguages = (path = '/') =>
  Object.fromEntries(LOCALES.map(({ code }) => [code, localePath(code, path)])) as Record<
    Locale,
    string
  >;
