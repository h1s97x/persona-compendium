import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import type { Locale } from '@/lib/i18n/dictionary';
import { siteTitle } from '@/lib/i18n/meta';

const jsonLd = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: siteTitle(locale),
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'}`,
      inLanguage: locale,
    },
    {
      '@type': 'VideoGame',
      name: 'Persona 5 Royal',
      alternateName: '女神异闻录5 皇家版',
      description: 'Persona 5 Royal fan site — characters, gallery and shop guide.',
      genre: 'JRPG',
      applicationCategory: 'Game',
      gamePlatform: ['PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch', 'Steam', 'Windows'],
      inLanguage: locale,
    },
  ],
});

/** 站点外壳：html/body 与全局样式由 app/layout.tsx 提供，这里只负责页头、页脚与语言上下文 */
export default function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
      />
      <LocaleProvider initialLocale={locale}>
        <div className="p5r-site">
          <Header />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </LocaleProvider>
    </>
  );
}
