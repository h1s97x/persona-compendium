'use client';

import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import HeroPoster from '@/components/features/home/HeroPoster';
import CharacterShowcase from '@/components/features/home/CharacterShowcase';
import LifeSection from '@/components/features/home/LifeSection';
import { useI18n } from '@/components/providers/LocaleProvider';
import { localAsset } from '@/lib/i18n/assets';
import { useFitScale } from '@/hooks/useFitScale';
import type { CSSProperties } from 'react';

const DLC_ITEMS = [
  '女神异闻录４ 服装＆ＢＧＭ特别套组',
  '女神异闻录３ 服装＆ＢＧＭ特别套组',
  '女神异闻录２ 服装＆ＢＧＭ特别套组',
  'Ｐｅｒｓｏｎａ 服装＆ＢＧＭ特别套组',
  '真·女神转生ｉｆ… 服装＆ＢＧＭ特别套组',
  '女神异闻录４ 通宵热舞 服装＆ＢＧＭ特别套组',
  '女神异闻录４ 无敌究极后桥背摔 服装＆ＢＧＭ特别套组',
  '真·女神转生Ⅳ 服装＆ＢＧＭ特别套组',
  '凯瑟琳 服装＆ＢＧＭ特别套组',
  '俄耳甫斯＆俄耳甫斯·贼神 套组',
  '伊邪那岐＆伊邪那岐·贼神 套组',
  '塔纳托斯＆塔纳托斯·贼神 套组',
  '祸津伊邪那岐＆祸津伊邪那岐·贼神 套组',
  '辉夜＆辉夜·贼神 套组',
  '阿里亚德涅＆阿里亚德涅·贼神 套组',
  '亚斯泰利欧斯＆亚斯泰利欧斯·贼神 套组',
  '月读＆月读·贼神 套组',
  '弥赛亚＆弥赛亚·贼神 套组',
  '女神异闻录５ 皇家版 恢复道具套组',
  '女神异闻录５ 皇家版 技能卡',
  '女神异闻录５ 皇家版 便服·校服服装套组',
  '女神异闻录５ 皇家版 怪盗团标志摩尔加纳车贴纸',
  '女神异闻录５ 皇家版 泳装套组',
  '女神异闻录５ 皇家版 ２０周年ＬＯＧＯ摩尔加纳车贴纸',
  '女神异闻录５ 皇家版 女仆服＆管家服服装套组',
  '女神异闻录５ 皇家版 圣诞装服装套组',
  '女神异闻录５ 星夜热舞 服装＆ＢＧＭ特别套组',
  '女神异闻录５ 皇家版 天鹅绒房间服装＆ＢＧＭ特别套组',
  '女神异闻录５ 星夜热舞 翔羽侠服装＆ＢＧＭ特别套组',
  '真·女神转生 ＤＥＥＰ ＳＴＲＡＮＧＥ ＪＯＵＲＮＥＹ 服装＆ＢＧＭ特别套组',
  '女神异闻录５ 皇家版 运动服服装套组',
  '伊邪那岐大神＆伊邪那岐大神·贼神 套组',
  '俄耳甫斯＆俄耳甫斯·贼神（ｆ） 套组',
  '雅典娜＆雅典娜·贼神 套组',
  '女神异闻录５ 皇家版 探索支援组合包',
  '女神异闻录５ 皇家版 战斗支援组合包',
  '女神异闻录５ 皇家版 芳泽霞 系列作品服装套组',
  '女神异闻录５ 皇家版 芳泽霞 ＭＥＧＡＭＩ服装套组',
  '女神异闻录５ 皇家版 芳泽霞 追加服装套组1',
  '女神异闻录５ 皇家版 芳泽霞 追加服装套组2',
  '人格面具 劳尔',
  '女神异闻录５ 皇家版 挑战关卡 追加套组',
  '女神异闻录Ｑ２ 新电影迷宫 服装＆ＢＧＭ特别套组',
  '女神异闻录５ 皇家版 挑战关卡 最棒的客人',
];

export default function HomePage() {
  const { t, locale } = useI18n();
  /** 规格表画布：官网 section.spec 的 spec-box 尺寸 */
  const { ref: specRef, scale: specScale } = useFitScale(1147);

  /** size 对应官网 bg_spec_list_xs/s/m/l 四档标签贴图 */
  const specRows = [
    { label: t('spec.name'), value: t('spec.valueName'), note: '', size: 'l' },
    { label: t('spec.date'), value: t('spec.valueDate'), note: '', size: 'm' },
    { label: t('spec.type'), value: t('spec.valueType'), note: '', size: 's' },
    { label: t('spec.players'), value: t('spec.valuePlayers'), note: '', size: 'xs' },
    {
      label: t('spec.platforms'),
      value: t('spec.valuePlatforms'),
      note: t('spec.platformNote'),
      size: 'l',
    },
    { label: t('spec.language'), value: t('spec.valueLanguage'), note: '', size: 'l' },
  ];

  return (
    <>
      <HeroPoster />

      {/* 官网整页从新闻区起就是一片红色斜带底（bg-red-line + bg-red-shadow） */}
      <div className="p5r-redzone">
        <div className="p5r-redzone__line" aria-hidden />

        <section className="p5r-section p5r-news" aria-label={t('news.label')}>
          <Image
            src="/images/official/news_title.webp"
            alt={t('news.label')}
            width={65}
            height={30}
            className="p5r-news__title"
          />
          <div className="p5r-news__container">
            <Image
              src="/images/official/news_bg.webp"
              alt=""
              aria-hidden
              width={1024}
              height={94}
              className="p5r-news__bg"
            />
            <ul className="p5r-news__list">
              <li>
                <span className="p5r-news__date">2022.06.13</span>
                <span className="p5r-news__text">{t('news.1')}</span>
              </li>
              <li>
                <span className="p5r-news__date">2022.06.13</span>
                <span className="p5r-news__text">{t('news.2')}</span>
              </li>
            </ul>
          </div>
        </section>

      <section className="p5r-section p5r-story">
        <Image
          src={localAsset(locale, 'intro_title')}
          alt={t('story.title')}
          width={840}
          height={275}
          className="p5r-story__title"
        />
        <div className="p5r-story__in">
          <p>{t('story.p1')}</p>
          <p>{t('story.p2')}</p>
        </div>
      </section>

      <CharacterShowcase />

      {/* 两段生活区直接落在页面红色底上（官网同样是整页红底） */}
      <LifeSection kind="school" />
      <LifeSection kind="phantom" />

      <section className="p5r-section p5r-dlc" aria-labelledby="dlc-title">
        <h2 id="dlc-title" className="p5r-h3">
          {t('dlc.title')}
        </h2>
        <ul>
          {DLC_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="p5r-dlc__note">{t('dlc.note')}</p>
      </section>

      {/* 规格表：官网 section.spec，1147×854 画布（阴影 + 底板 + 贴图标签） */}
      <section className="p5r-section p5r-spec" aria-label={t('spec.name')}>
        <div
          className="p5r-spec__fit"
          ref={specRef}
          style={{ '--spec-scale': specScale } as CSSProperties}
        >
          <div className="p5r-spec__canvas">
            <div className="p5r-spec__shadow" aria-hidden />
            <div className="p5r-spec__box">
              <Image
                src="/images/official/spec_title.webp"
                alt=""
                aria-hidden
                width={271}
                height={130}
                className="p5r-spec__title"
              />
              <div className="p5r-spec__info">
                <ul>
                  {specRows.map((row) => (
                    <li key={row.label}>
                      <span
                        className={`p5r-spec__label p5r-spec__label--${row.size}`}
                        style={{ backgroundImage: `url('/images/official/bg_spec_list_${row.size}.webp')` }}
                      >
                        {row.label}
                      </span>
                      <span className="p5r-spec__value">
                        {row.value}
                        {row.note && <small>{row.note}</small>}
                      </span>
                    </li>
                  ))}
                </ul>
                <Image
                  src="/images/official/spec_img.webp"
                  alt={t('spec.valueName')}
                  width={334}
                  height={481}
                  className="p5r-spec__img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Image
        src="/images/system_requirements.webp"
        alt={t('buy.sysreqAlt')}
        width={839}
        height={437}
        className="p5r-sysreq"
      />

      {/* 系列介绍：官网 section.bottom-info（bg_bottom 满宽 + 两张斜贴截图 + 系列横幅） */}
      <section className="p5r-section p5r-bottom" aria-label={t('about.title')}>
        <div className="p5r-bottom__in">
          <Image
            src={localAsset(locale, 'bottom_info_title')}
            alt={t('about.title')}
            width={640}
            height={148}
            className="p5r-bottom__title"
          />
          <div className="p5r-bottom__box">
            <div className="p5r-bottom__text">
              <p>{t('about.p1')}</p>
              {t('about.p2') && <p>{t('about.p2')}</p>}
            </div>
            <Image
              src="/images/bottom_info_ss1.webp"
              alt={t('about.shot1')}
              width={590}
              height={428}
              className="p5r-bottom__ss p5r-bottom__ss--1"
            />
            <Image
              src="/images/bottom_info_ss2.webp"
              alt={t('about.shot2')}
              width={629}
              height={449}
              className="p5r-bottom__ss p5r-bottom__ss--2"
            />
          </div>
          <div className="p5r-bottom__platform">
            <Image
              src="/images/serise.webp"
              alt={t('about.seriesAlt')}
              width={607}
              height={227}
              className="p5r-bottom__series"
            />
          </div>
        </div>
      </section>

      <section className="p5r-section p5r-cta">
        <div className="p5r-cta__badges">
          <Image src="/images/st.webp" alt="Physical edition" width={213} height={90} />
          <Image src="/images/dl.webp" alt="Digital edition" width={213} height={90} />
        </div>
        <p className="p5r-cta__title">{t('cta.title')}</p>
        <div className="p5r-cta__actions">
          <LocaleLink href="/buy" className="p5r-btn">
            <span>{t('cta.buy')}</span>
          </LocaleLink>
          <LocaleLink href="/gallery" className="p5r-btn p5r-btn--dark">
            <span>{t('cta.gallery')}</span>
          </LocaleLink>
        </div>
      </section>
      </div>
    </>
  );
}
