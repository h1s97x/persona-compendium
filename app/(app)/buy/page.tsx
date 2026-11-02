import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '购买指南',
  description:
    '《女神异闻录５ 皇家版》购买指南：对应平台、实体版与下载版、游戏规格与 PC 系统需求。',
};

const STORES = [
  { name: 'PlayStation 5', image: '/images/ps5_btn.webp', link: 'https://store.playstation.com' },
  { name: 'Nintendo Switch', image: '/images/switch_btn.webp', link: 'https://store.nintendo.com' },
  { name: 'Steam', image: '/images/steam_btn.webp', link: 'https://store.steampowered.com' },
  { name: 'Xbox Series X|S', image: '/images/xbox_xs_btn.webp', link: 'https://www.xbox.com' },
  { name: 'Xbox One', image: '/images/xbox_one_btn.webp', link: 'https://www.xbox.com' },
  { name: 'Windows', image: '/images/windows_btn.webp', link: 'https://www.microsoft.com/store' },
];

const SPEC_ROWS = [
  { label: '游戏名称', value: '女神异闻录５ 皇家版' },
  { label: '发售日期', value: '好评发售中' },
  { label: '游戏类别', value: 'RPG' },
  { label: '游玩人数', value: '1 人' },
  {
    label: '支持平台',
    value: 'Xbox Series X|S / Xbox One / Windows / PlayStation®5 / Nintendo Switch™ / Steam',
    note: '※PlayStation®5 / Nintendo Switch™ 以外的平台仅发售下载版',
  },
  { label: '支持语言', value: '简体中文・繁体中文字幕／日语语音' },
];

export default function BuyPage() {
  return (
    <div className="p5r-page">
      <div className="p5r-shop-head">
        <Image
          src="/images/shopguide_title.webp"
          alt="购买指南 SHOP GUIDE"
          width={318}
          height={249}
          priority
        />
        <Image src="/images/st.webp" alt="实体版" width={213} height={90} />
        <Image src="/images/dl.webp" alt="下载版" width={213} height={90} />
      </div>

      <p
        style={{
          textAlign: 'center',
          color: '#cfc6b4',
          fontSize: 14,
          lineHeight: 1.9,
          marginBottom: 26,
        }}
      >
        选择你的平台，开始这段「更生」之旅。
        <br />
        实体版仅对应部分平台，其余平台仅发售下载版。
      </p>

      {/* 商店按钮 */}
      <div className="p5r-stores">
        {STORES.map((store) => (
          <a
            key={store.name}
            href={store.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p5r-store"
            aria-label={`前往 ${store.name} 商店`}
          >
            <Image src={store.image} alt={store.name} width={292} height={70} />
          </a>
        ))}
      </div>

      {/* 规格 */}
      <section style={{ marginTop: 66 }}>
        <h2 className="p5r-h2" style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          SPEC
        </h2>
        <div className="p5r-panel" style={{ maxWidth: 860, margin: '0 auto' }}>
          {SPEC_ROWS.map((row) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                padding: '11px 0',
                borderBottom: '1px dashed rgba(216,180,95,0.2)',
              }}
            >
              <span
                style={{
                  flex: '0 0 104px',
                  fontSize: 13,
                  fontWeight: 800,
                  color: 'var(--p5r-gold-light)',
                  transform: 'skewX(-6deg)',
                }}
              >
                {row.label}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.85, color: '#ded5c4' }}>
                {row.value}
                {row.note && (
                  <small style={{ display: 'block', color: '#9b9385', fontSize: 11, marginTop: 2 }}>
                    {row.note}
                  </small>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 系统需求 */}
      <section style={{ marginTop: 60, textAlign: 'center' }}>
        <h2 className="p5r-h3" style={{ marginBottom: 18, transform: 'skewX(-6deg)' }}>
          系统需求（PC）
        </h2>
        <Image
          src="/images/system_requirements.webp"
          alt="PC 系统需求"
          width={839}
          height={437}
          style={{ width: 'min(760px, 92%)', height: 'auto', margin: '0 auto', display: 'block' }}
        />
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 50, flexWrap: 'wrap' }}>
        <Link href="/gallery" className="p5r-btn p5r-btn--dark">
          <span>先看看游戏画面</span>
        </Link>
        <Link href="/characters" className="p5r-btn">
          <span>查看角色</span>
        </Link>
      </div>

      <p style={{ textAlign: 'center', fontSize: 11, color: '#7d766a', marginTop: 30, lineHeight: 1.9 }}>
        各平台售价与特典内容请以商店页面为准。
        <br />
        ©ATLUS ©SEGA All rights reserved.
      </p>
    </div>
  );
}
