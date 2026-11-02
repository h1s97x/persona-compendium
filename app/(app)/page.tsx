import Image from 'next/image';
import Link from 'next/link';
import HeroPoster from '@/components/features/home/HeroPoster';
import CharacterShowcase from '@/components/features/home/CharacterShowcase';

const NEWS = [
  {
    date: '2022.06.13',
    text: '《女神异闻录５ 皇家版》重制版将于 2022 年 10 月 21 日发售！',
  },
  {
    date: '2022.06.13',
    text: '《女神异闻录》系列接连登上最新平台！',
  },
];

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
  '女神异闻录５ 皇家版 技能卡套组',
  '女神异闻录５ 皇家版 挑战关卡',
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

export default function Home() {
  return (
    <>
      <HeroPoster />

      {/* 新闻 */}
      <section className="p5r-section p5r-news" aria-label="最新情报">
        <div className="p5r-news__title">INFORMATION</div>
        <div className="p5r-news__list">
          {NEWS.map((item) => (
            <p key={item.text} className="p5r-news__item">
              <span className="p5r-news__date">{item.date}</span>
              <span>{item.text}</span>
            </p>
          ))}
        </div>
      </section>

      {/* 故事 */}
      <section className="p5r-section p5r-story" aria-label="故事">
        <Image
          src="/images/intro_title.webp"
          alt="2022年10月21日，拿走你的心。"
          width={840}
          height={275}
          className="p5r-story__title"
        />
        <div className="p5r-story__in">
          <div>
            <p>
              少年主角因某个缘由转学到“东京”的高中后，开始做起了奇异的梦。
              <br />
              ——你确实是命运之『囚』啊。
              <br />
              少年被告知不久之后他就会迎来毁灭。
            </p>
            <p>
              为了完成赋予他的“更生”任务，也为了将人们从邪恶欲望中拯救出来，
              <br />
              成为怪盗的主角与各种人邂逅，结下羁绊。
              <br />
              在度过了宝贵的一年后，等待你的将是……？
            </p>
          </div>
          <Image
            src="/images/ren.webp"
            alt="主角"
            width={465}
            height={545}
            className="p5r-story__art"
          />
        </div>
      </section>

      {/* 角色 */}
      <CharacterShowcase />

      {/* 双面生活 */}
      <section className="p5r-section p5r-dual" aria-label="双面生活">
        <article className="p5r-dual__card">
          <span className="p5r-dual__badge">DAYTIME</span>
          <h3>白天是普普通通的高中生</h3>
          <p>
            在学校上课、放学后和朋友外出、体验丰富的校园活动，一年中都充满让人心动的事件！
            早上坐电车去学校，认真上课，满足特定条件还能加深与同伴的羁绊。
          </p>
        </article>
        <article className="p5r-dual__card p5r-dual__card--night">
          <Image
            src="/images/phantom.webp"
            alt=""
            aria-hidden
            width={6410}
            height={6300}
            className="p5r-dual__mask"
          />
          <span className="p5r-dual__badge">NIGHT</span>
          <h3>晚上化身怪盗，盗走堕落大人们的心</h3>
          <p>
            主角一行自称“心灵怪盗”，席卷大城市。目标是目中无人虐待学生的教师、明目张胆进行剽窃的创作者等，
            怀有扭曲欲望的“堕落大人”们。让这些大人悔改，为弱者夺回被偷走的世界吧！
          </p>
        </article>
      </section>

      {/* DLC */}
      <section className="p5r-section p5r-dlc" aria-labelledby="dlc-title">
        <h2 id="dlc-title" className="p5r-h3">
          DLC 追加内容
        </h2>
        <ul>
          {DLC_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="p5r-dlc__note">※各追加内容的发售情况与价格请以各平台商店页面为准。</p>
      </section>

      {/* 规格 */}
      <section className="p5r-section p5r-spec" aria-label="游戏规格">
        <div className="p5r-spec__in">
          {SPEC_ROWS.map((row) => (
            <div key={row.label} className="p5r-spec__row">
              <span className="p5r-spec__label">
                <span>{row.label}</span>
              </span>
              <span className="p5r-spec__value">
                {row.value}
                {row.note && <small>{row.note}</small>}
              </span>
            </div>
          ))}
        </div>
        <Image
          src="/images/cover.webp"
          alt="《女神异闻录５ 皇家版》封面"
          width={334}
          height={481}
          className="p5r-spec__cover"
        />
      </section>

      <Image
        src="/images/system_requirements.webp"
        alt="系统需求"
        width={839}
        height={437}
        className="p5r-sysreq"
      />

      {/* 系列介绍 */}
      <section className="p5r-section p5r-about" aria-label="系列介绍">
        <div className="p5r-about__in">
          <div>
            <Image
              src="/images/bottom_info_title.webp"
              alt="《女神异闻录》是什么？"
              width={640}
              height={148}
              className="p5r-about__title"
            />
            <p>
              『女神异闻录』为青少年侠盗 RPG 系列游戏，以现代日本都市为舞台，玩家在体验校园生活、友情、恋爱等生活小事的同时，
              必须挺身面对不可思议的谣言、都市传说等超自然事件。描写主角与觉醒「人格面具能力」的少年少女相遇，
              并对抗重重困难、逐渐成长的故事。近年亦将触角伸至电视动画、剧场版动画、武道馆 Live 音乐会、舞台剧、漫画等媒体，
              不断扩展其魅力。
            </p>
            <p style={{ marginTop: 12 }}>
              作品中的「人格面具」指的是沉睡于自身体内的「另一个人格」，
              化作「自古以来的神或恶魔」的样貌现身，是一种拥有强大力量的「另一个自己」。
            </p>
            <Image
              src="/images/serise.webp"
              alt="Persona 系列"
              width={607}
              height={227}
              className="p5r-about__series"
            />
          </div>
          <div className="p5r-about__shots">
            <Image
              src="/images/bottom_info_ss1.webp"
              alt="游戏画面 1"
              width={590}
              height={428}
            />
            <Image
              src="/images/bottom_info_ss2.webp"
              alt="游戏画面 2"
              width={629}
              height={449}
            />
          </div>
        </div>
      </section>

      {/* 购买引导 */}
      <section className="p5r-section p5r-cta" aria-label="购买">
        <div className="p5r-cta__badges">
          <Image src="/images/st.webp" alt="实体版" width={213} height={90} />
          <Image src="/images/dl.webp" alt="下载版" width={213} height={90} />
        </div>
        <p className="p5r-cta__title">现在就开始你的「更生」吧</p>
        <div className="p5r-cta__actions">
          <Link href="/buy" className="p5r-btn">
            <span>前往购买</span>
          </Link>
          <Link href="/gallery" className="p5r-btn p5r-btn--dark">
            <span>游戏画廊</span>
          </Link>
        </div>
      </section>
    </>
  );
}
