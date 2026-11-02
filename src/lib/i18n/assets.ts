import type { Locale } from './dictionary';

/**
 * 官网把「图片字」素材（标题、标语、角色名）按语言分别出图，
 * 这些图里烧死了文字，不会随词典切换，必须按语言取不同文件。
 * 统一存放在 public/images/i18n/<locale>/<name>.webp；
 * 日文、韩文官方未提供对应图片，构建素材时已回退英文版。
 */
export const localAsset = (locale: Locale, name: string) => `/images/i18n/${locale}/${name}.webp`;

/** 小标题图名字，供生活区块与角色区块复用 */
export const lifeTitleAsset = (locale: Locale, kind: 'school' | 'phantom') =>
  localAsset(locale, `${kind}_life_title`);

/**
 * 首屏文案图：
 * - 简中 / 繁中：官网「以新价格 最新平台 登陆」原图
 * - 其他语言：官网 AVAILABLE NOW 角标（尺寸更小，用不同版式）
 */
export const heroPrBadge = (locale: Locale) =>
  locale === 'zh-CN' || locale === 'zh-TW'
    ? { kind: 'copy' as const, src: localAsset(locale, 'text1') }
    : { kind: 'badge' as const, src: localAsset(locale, 'available-now') };

/** 「立刻购买」图仅简中官网提供，其余语言改用文字按钮 */
export const heroBuyImage = (locale: Locale) => (locale === 'zh-CN' ? '/images/buynow.webp' : null);
