import { OFFICIAL_CONTENT } from './official-content';
import { ko, fr, it, de, es } from './dictionaries-extra';

/** 顺序与官网语言菜单一致 */
export const LOCALES = [
  { code: 'zh-CN', label: '簡体中文', short: '简中' },
  { code: 'ja', label: '日本語', short: '日本語' },
  { code: 'zh-TW', label: '繁體中文', short: '繁中' },
  { code: 'ko', label: '한국어', short: '한국어' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'es', label: 'Español', short: 'ES' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: Locale = 'zh-CN';

export const LOCALE_STORAGE_KEY = 'p5r-locale';

export const isLocale = (value: string): value is Locale =>
  LOCALES.some((locale) => locale.code === value);

export type Dictionary = Record<string, string>;

const zhCN: Dictionary = {
  'nav.home': '首页',
  'nav.characters': '角色',
  'nav.gallery': '画廊',
  'nav.buy': '购买',
  'nav.official': '官方网站',

  'header.logoAria': 'Persona 5 Royal 首页',
  'header.menuOpen': '展开菜单',
  'header.menuClose': '收起菜单',
  'header.lang': '语言',

  'hero.pvAria': '播放《女神异闻录５ 皇家版》预告片',
  'hero.pvClose': '关闭预告片',
  'hero.buy': '立刻购买',
  'hero.availableNow': '现已发售',

  'news.label': 'INFORMATION',
  'news.1': '《女神异闻录５ 皇家版》重制版将于 2022 年 10 月 21 日发售！',
  'news.2': '《女神异闻录》系列接连登上最新平台！',

  'story.title': '2022年10月21日，拿走你的心。',
  'story.p1':
    '少年主角因某个缘由转学到“东京”的高中后，开始做起了奇异的梦。——你确实是命运之『囚』啊。少年被告知不久之后他就会迎来毁灭。',
  'story.p2':
    '为了完成赋予他的“更生”任务，也为了将人们从邪恶欲望中拯救出来，成为怪盗的主角与各种人邂逅，结下羁绊。在度过了宝贵的一年后，等待你的将是……？',

  'dual.day.badge': 'DAYTIME',
  'dual.day.title': '白天是普普通通的高中生',
  'dual.day.body':
    '在学校上课、放学后和朋友外出、体验丰富的校园活动，一年中都充满让人心动的事件！早上坐电车去学校，认真上课，满足特定条件还能加深与同伴的羁绊。',
  'dual.night.badge': 'NIGHT',
  'dual.night.title': '晚上化身怪盗，盗走堕落大人们的心',
  'dual.night.body':
    '主角一行自称“心灵怪盗”，席卷大城市。目标是目中无人虐待学生的教师、明目张胆进行剽窃的创作者等，怀有扭曲欲望的“堕落大人”们。让这些大人悔改，为弱者夺回被偷走的世界吧！',

  'dlc.title': 'DLC 追加内容',
  'dlc.note': '※商品名称以官方原文标示；发售情况与价格请以各平台商店页面为准。',

  'spec.name': '游戏名称',
  'spec.date': '发售日期',
  'spec.type': '游戏类别',
  'spec.players': '游玩人数',
  'spec.platforms': '支持平台',
  'spec.language': '支持语言',
  'spec.valueName': '女神异闻录５ 皇家版',
  'spec.valueDate': '好评发售中',
  'spec.valueType': 'RPG',
  'spec.valuePlayers': '1 人',
  'spec.valuePlatforms':
    'Xbox Series X|S / Xbox One / Windows / PlayStation®5 / Nintendo Switch™ / Steam',
  'spec.platformNote': '※PlayStation®5 / Nintendo Switch™ 以外的平台仅发售下载版',
  'spec.valueLanguage': '简体中文・繁体中文字幕／日语语音',

  'about.title': '《女神异闻录》是什么？',
  'about.p1':
    '『女神异闻录』为青少年侠盗 RPG 系列游戏，以现代日本都市为舞台，玩家在体验校园生活、友情、恋爱等生活小事的同时，必须挺身面对不可思议的谣言、都市传说等超自然事件。描写主角与觉醒「人格面具能力」的少年少女相遇，并对抗重重困难、逐渐成长的故事。近年亦将触角伸至电视动画、剧场版动画、武道馆 Live 音乐会、舞台剧、漫画等媒体，不断扩展其魅力。',
  'about.p2':
    '作品中的「人格面具」指的是沉睡于自身体内的「另一个人格」，化作「自古以来的神或恶魔」的样貌现身，是一种拥有强大力量的「另一个自己」。',
  'about.seriesAlt': 'Persona 系列',
  'about.shot1': '游戏画面 1',
  'about.shot2': '游戏画面 2',

  'cta.title': '现在就开始你的「更生」吧',
  'cta.buy': '前往购买',
  'cta.gallery': '游戏画廊',

  'chara.seeAll': '查看全部角色',
  'chara.detail': '详细档案 →',
  'chara.arcana': '阿尔卡那',
  'chara.personaLabel': '初期人格面具',
  'chara.costume': '切换服装',
  'chara.school': '校服',
  'chara.aria': '查看 {name} 的详细档案',

  'characters.subtitle': '心之怪盗团全体成员。|点击卡片查看角色档案与初期人格面具。',
  'characters.searchPlaceholder': '搜索角色名 / 代号 / 人格面具 / 阿尔卡那…',
  'characters.filterAll': '全部',
  'characters.resultPrefix': '共',
  'characters.resultSuffix': '位角色',
  'characters.clear': '清除筛选',
  'characters.emptyTitle': '没有找到符合条件的角色',
  'characters.emptyText': '换个关键词或清除筛选试试吧',
  'characters.cardPersona': '人格面具',

  'detail.back': '← 角色一览',
  'detail.ability': 'ABILITY',
  'detail.skill': 'SKILL',
  'detail.story': 'STORY',
  'detail.personaLabel': '初期人格面具',

  'gallery.subtitle': '截取自游戏内的名场面与战斗演出。|点击图片查看大图，支持左右切换。',
  'gallery.cat.all': '全部',
  'gallery.cat.scene': '游戏中的各种纪念照',
  'gallery.cat.battle': '战斗处决动画',
  'gallery.close': '关闭',
  'gallery.prev': '上一张',
  'gallery.next': '下一张',
  'gallery.altScene': '游戏截图',
  'gallery.altBattle': '战斗处决动画',
  'gallery.cta': '前往购买',

  'buy.title': '购买指南',
  'buy.physical': '实体版',
  'buy.digital': '下载版',
  'buy.intro': '选择你的平台，开始这段「更生」之旅。|实体版仅对应部分平台，其余平台仅发售下载版。',
  'buy.storeAria': '前往 {name} 商店',
  'buy.specTitle': 'SPEC',
  'buy.sysreq': '系统需求（PC）',
  'buy.sysreqAlt': 'PC 系统需求',
  'buy.note': '各平台售价与特典内容请以商店页面为准。',
  'buy.btnGallery': '先看看游戏画面',
  'buy.btnCharacters': '查看角色',

  'footer.disclaimer': '本页面为个人网页设计作业，与 ATLUS 无关，与 SEGA 无关',
  'footer.author': 'ElectroME 2026',
};

const zhTW: Dictionary = {
  ...zhCN,
  'nav.home': '首頁',
  'nav.characters': '角色',
  'nav.gallery': '畫廊',
  'nav.buy': '購買',
  'nav.official': '官方網站',

  'header.logoAria': 'Persona 5 Royal 首頁',
  'header.menuOpen': '展開選單',
  'header.menuClose': '收合選單',
  'header.lang': '語言',

  'hero.pvAria': '播放《女神異聞錄５ 皇家版》預告片',
  'hero.pvClose': '關閉預告片',
  'hero.buy': '立刻購買',
  'hero.availableNow': '現已發售',

  'news.1': '《女神異聞錄５ 皇家版》重製版將於 2022 年 10 月 21 日發售！',
  'news.2': '《女神異聞錄》系列接連登上最新平台！',

  'story.title': '2022年10月21日，拿走你的心。',
  'story.p1':
    '少年主角因某個緣由轉學到「東京」的高中後，開始做起了奇異的夢。——你確實是命運之『囚』啊。少年被告知不久之後他就會迎來毀滅。',
  'story.p2':
    '為了完成賦予他的「更生」任務，也為了將人們從邪惡慾望中拯救出來，成為怪盜的主角與各種人邂逅，結下羈絆。在度過了寶貴的一年後，等待你的將是……？',

  'dual.day.title': '白天是普普通通的高中生',
  'dual.day.body':
    '在學校上課、放學後和朋友外出、體驗豐富的校園活動，一年中都充滿讓人心動的事件！早上坐電車去學校，認真上課，滿足特定條件還能加深與同伴的羈絆。',
  'dual.night.title': '晚上化身怪盜，盜走墮落大人們的心',
  'dual.night.body':
    '主角一行自稱「心靈怪盜」，席捲大城市。目標是目中無人虐待學生的教師、明目張膽進行剽竊的創作者等，懷有扭曲慾望的「墮落大人」們。讓這些大人悔改，為弱者奪回被偷走的世界吧！',

  'dlc.title': 'DLC 追加內容',
  'dlc.note': '※商品名稱以官方原文標示；發售情況與價格請以各平台商店頁面為準。',

  'spec.name': '遊戲名稱',
  'spec.date': '發售日期',
  'spec.type': '遊戲類別',
  'spec.players': '遊玩人數',
  'spec.platforms': '支援平台',
  'spec.language': '支援語言',
  'spec.valueName': '女神異聞錄５ 皇家版',
  'spec.valueDate': '好評發售中',
  'spec.valuePlayers': '1 人',
  'spec.platformNote': '※PlayStation®5 / Nintendo Switch™ 以外的平台僅發售下載版',
  'spec.valueLanguage': '簡體中文・繁體中文字幕／日語語音',

  'about.title': '《女神異聞錄》是什麼？',
  'about.p1':
    '『女神異聞錄』為青少年俠盜 RPG 系列遊戲，以現代日本都市為舞台，玩家在體驗校園生活、友情、戀愛等生活小事的同時，必須挺身面對不可思議的謠言、都市傳說等超自然事件。描寫主角與覺醒「人格面具能力」的少年少女相遇，並對抗重重困難、逐漸成長的故事。近年亦將觸角伸至電視動畫、劇場版動畫、武道館 Live 音樂會、舞台劇、漫畫等媒體，不斷擴展其魅力。',
  'about.p2':
    '作品中的「人格面具」指的是沉睡於自身體內的「另一個人格」，化作「自古以來的魔神或惡魔」的樣貌現身，是一種擁有強大力量的「另一個自己」。',
  'about.seriesAlt': 'Persona 系列',
  'about.shot1': '遊戲畫面 1',
  'about.shot2': '遊戲畫面 2',

  'cta.title': '現在就開始你的「更生」吧',
  'cta.buy': '前往購買',
  'cta.gallery': '遊戲畫廊',

  'chara.seeAll': '查看全部角色',
  'chara.detail': '詳細檔案 →',
  'chara.arcana': '阿爾卡那',
  'chara.personaLabel': '初期人格面具',
  'chara.costume': '切換服裝',
  'chara.school': '校服',
  'chara.aria': '查看 {name} 的詳細檔案',

  'characters.subtitle': '心之怪盜團全體成員。|點擊卡片查看角色檔案與初期人格面具。',
  'characters.searchPlaceholder': '搜尋角色名 / 代號 / 人格面具 / 阿爾卡那…',
  'characters.filterAll': '全部',
  'characters.resultPrefix': '共',
  'characters.resultSuffix': '位角色',
  'characters.clear': '清除篩選',
  'characters.emptyTitle': '沒有找到符合條件的角色',
  'characters.emptyText': '換個關鍵字或清除篩選試試吧',
  'characters.cardPersona': '人格面具',

  'detail.back': '← 角色一覽',
  'detail.personaLabel': '初期人格面具',

  'gallery.subtitle': '截取自遊戲內的名場面與戰鬥演出。|點擊圖片查看大圖，支援左右切換。',
  'gallery.cat.all': '全部',
  'gallery.cat.scene': '遊戲中的各種紀念照',
  'gallery.cat.battle': '戰鬥處決動畫',
  'gallery.close': '關閉',
  'gallery.prev': '上一張',
  'gallery.next': '下一張',
  'gallery.altScene': '遊戲截圖',
  'gallery.altBattle': '戰鬥處決動畫',
  'gallery.cta': '前往購買',

  'buy.title': '購買指南',
  'buy.physical': '實體版',
  'buy.digital': '下載版',
  'buy.intro': '選擇你的平台，開始這段「更生」之旅。|實體版僅對應部分平台，其餘平台僅發售下載版。',
  'buy.storeAria': '前往 {name} 商店',
  'buy.sysreq': '系統需求（PC）',
  'buy.sysreqAlt': 'PC 系統需求',
  'buy.note': '各平台售價與特典內容請以商店頁面為準。',
  'buy.btnGallery': '先看看遊戲畫面',
  'buy.btnCharacters': '查看角色',

  'footer.disclaimer': '本頁面為個人網頁設計作業，與 ATLUS 無關，與 SEGA 無關',
};

const en: Dictionary = {
  'nav.home': 'Home',
  'nav.characters': 'Characters',
  'nav.gallery': 'Gallery',
  'nav.buy': 'Buy',
  'nav.official': 'Official Site',

  'header.logoAria': 'Persona 5 Royal home',
  'header.menuOpen': 'Open menu',
  'header.menuClose': 'Close menu',
  'header.lang': 'Language',

  'hero.pvAria': 'Play the Persona 5 Royal trailer',
  'hero.pvClose': 'Close trailer',
  'hero.buy': 'Buy now',
  'hero.availableNow': 'Available now',

  'news.label': 'INFORMATION',
  'news.1': 'Persona 5 Royal remaster launches on October 21, 2022!',
  'news.2': 'The Persona series arrives on the latest platforms!',

  'story.title': 'October 21, 2022 — take their hearts.',
  'story.p1':
    'After transferring to a high school in Tokyo for a certain reason, the young protagonist begins to have strange dreams. “You are truly a prisoner of fate.” He is told that ruin awaits him before long.',
  'story.p2':
    'To complete the “rehabilitation” assigned to him, and to save people from their twisted desires, the protagonist becomes a phantom thief, meets many people and forges bonds. After a precious year, what awaits him…?',

  'dual.day.badge': 'DAYTIME',
  'dual.day.title': 'An ordinary high school student by day',
  'dual.day.body':
    'Attend classes, head out with friends after school and enjoy a year packed with school events. Ride the train in the morning, study hard, and deepen bonds with confidants when conditions are met.',

  'dual.night.badge': 'NIGHT',
  'dual.night.title': 'A phantom thief by night, stealing corrupted hearts',
  'dual.night.body':
    'Calling themselves the Phantom Thieves of Hearts, the group takes the city by storm. Their targets are the “corrupted adults” driven by twisted desires — teachers who abuse students, creators who plagiarize. Make them repent and take back the world for the weak!',

  'dlc.title': 'DLC',
  'dlc.note':
    '※ Product names are shown in their original form. Availability and pricing vary by store.',

  'spec.name': 'Title',
  'spec.date': 'Release',
  'spec.type': 'Genre',
  'spec.players': 'Players',
  'spec.platforms': 'Platforms',
  'spec.language': 'Languages',
  'spec.valueName': 'Persona 5 Royal',
  'spec.valueDate': 'Available now',
  'spec.valueType': 'RPG',
  'spec.valuePlayers': '1 player',
  'spec.valuePlatforms':
    'Xbox Series X|S / Xbox One / Windows / PlayStation®5 / Nintendo Switch™ / Steam',
  'spec.platformNote': '※ Digital only on platforms other than PlayStation®5 / Nintendo Switch™',
  'spec.valueLanguage': 'Simplified & Traditional Chinese, English subtitles / Japanese voice',

  'about.title': 'What is Persona?',
  'about.p1':
    'Persona is a series of teen phantom-thief RPGs set in modern Japanese cities. While enjoying school life, friendship and romance, players confront supernatural incidents born from rumors and urban legends. The series follows youths who awaken the power of Persona as they face hardship and grow. It has also expanded into TV anime, feature films, Budokan live concerts, stage plays and manga.',
  'about.p2':
    'A “Persona” is the other self sleeping inside you, manifesting as a god or demon from myth — a powerful alter ego.',
  'about.seriesAlt': 'Persona series',
  'about.shot1': 'Gameplay screenshot 1',
  'about.shot2': 'Gameplay screenshot 2',

  'cta.title': 'Begin your rehabilitation',
  'cta.buy': 'Go to store',
  'cta.gallery': 'View gallery',

  'chara.seeAll': 'See all characters',
  'chara.detail': 'Full profile →',
  'chara.arcana': 'Arcana',
  'chara.personaLabel': 'Initial Persona',
  'chara.costume': 'Switch costume',
  'chara.school': 'School uniform',
  'chara.aria': 'Open the full profile of {name}',

  'characters.subtitle':
    'The Phantom Thieves of Hearts.|Tap a card to read the profile and initial Persona.',
  'characters.searchPlaceholder': 'Search by name / codename / Persona / Arcana…',
  'characters.filterAll': 'All',
  'characters.resultPrefix': '',
  'characters.resultSuffix': ' characters',
  'characters.clear': 'Clear filters',
  'characters.emptyTitle': 'No characters found',
  'characters.emptyText': 'Try another keyword or clear the filters',
  'characters.cardPersona': 'Persona',

  'detail.back': '← All characters',
  'detail.ability': 'ABILITY',
  'detail.skill': 'SKILL',
  'detail.story': 'STORY',
  'detail.personaLabel': 'Initial Persona',

  'gallery.subtitle':
    'Scenes and battle finishers captured in game.|Click an image to enlarge, then browse left and right.',
  'gallery.cat.all': 'All',
  'gallery.cat.scene': 'Memorable scenes',
  'gallery.cat.battle': 'Battle finishers',
  'gallery.close': 'Close',
  'gallery.prev': 'Previous',
  'gallery.next': 'Next',
  'gallery.altScene': 'Screenshot',
  'gallery.altBattle': 'Battle finisher',
  'gallery.cta': 'Go to store',

  'buy.title': 'Shop Guide',
  'buy.physical': 'Physical',
  'buy.digital': 'Digital',
  'buy.intro':
    'Pick your platform and start the rehabilitation.|Physical editions are available on selected platforms only.',
  'buy.storeAria': 'Open the {name} store',
  'buy.specTitle': 'SPEC',
  'buy.sysreq': 'System requirements (PC)',
  'buy.sysreqAlt': 'PC system requirements',
  'buy.note': 'Prices and bonus contents vary by store.',
  'buy.btnGallery': 'See the game first',
  'buy.btnCharacters': 'Meet the cast',

  'footer.disclaimer': 'This page is a personal design exercise, not affiliated with ATLUS or SEGA',
  'footer.author': 'ElectroME 2026',
};

const ja: Dictionary = {
  'nav.home': 'ホーム',
  'nav.characters': 'キャラクター',
  'nav.gallery': 'ギャラリー',
  'nav.buy': '購入',
  'nav.official': '公式サイト',

  'header.logoAria': 'ペルソナ５ ザ・ロイヤル ホーム',
  'header.menuOpen': 'メニューを開く',
  'header.menuClose': 'メニューを閉じる',
  'header.lang': '言語',

  'hero.pvAria': '『ペルソナ５ ザ・ロイヤル』PV を再生',
  'hero.pvClose': 'PV を閉じる',
  'hero.buy': '今すぐ購入',
  'hero.availableNow': '発売中',

  'news.label': 'INFORMATION',
  'news.1': '『ペルソナ５ ザ・ロイヤル』リマスター版が 2022 年 10 月 21 日に発売！',
  'news.2': '『ペルソナ』シリーズが最新プラットフォームに続々登場！',

  'story.title': '2022年10月21日、お前の心を頂く。',
  'story.p1':
    'とある理由で「東京」の高校に転校した少年は、奇妙な夢を見るようになる。――お前はまさに運命の『囚われ人』だ。遠からず破滅が訪れると告げられて――。',
  'story.p2':
    '与えられた「更生」の任務を果たすため、人々を邪悪な欲望から救うため、怪盗となった主人公は様々な人物と出会い、絆を結んでいく。かけがえのない一年の先に待つものは……？',

  'dual.day.badge': 'DAYTIME',
  'dual.day.title': '昼はごく普通の高校生',
  'dual.day.body':
    '学校で授業を受け、放課後は仲間と出かけ、充実した学校行事を体験する。一年を通して心躍る出来事が満載！ 朝は電車で通学し、条件を満たせば仲間との絆も深まる。',

  'dual.night.badge': 'NIGHT',
  'dual.night.title': '夜は怪盗となって、堕落した大人の心を盗め',
  'dual.night.body':
    '自らを「心の怪盗団」と名乗る一行は大都市を席巻する。標的は学生を虐げる教師、堂々と盗作する創作者など、歪んだ欲望を抱く「堕落した大人」たち。彼らを改心させ、弱者の奪われた世界を取り戻せ！',

  'dlc.title': 'DLC',
  'dlc.note': '※商品名は原文表記です。販売状況・価格は各ストアのページをご確認ください。',

  'spec.name': 'タイトル',
  'spec.date': '発売日',
  'spec.type': 'ジャンル',
  'spec.players': 'プレイ人数',
  'spec.platforms': '対応機種',
  'spec.language': '対応言語',
  'spec.valueName': 'ペルソナ５ ザ・ロイヤル',
  'spec.valueDate': '好評発売中',
  'spec.valueType': 'RPG',
  'spec.valuePlayers': '1人',
  'spec.valuePlatforms':
    'Xbox Series X|S / Xbox One / Windows / PlayStation®5 / Nintendo Switch™ / Steam',
  'spec.platformNote': '※PlayStation®5 / Nintendo Switch™ 以外はダウンロード版のみ',
  'spec.valueLanguage': '中国語（簡体字・繁体字）字幕／日本語音声',

  'about.title': '『ペルソナ』とは？',
  'about.p1':
    '『ペルソナ』は現代日本の都市を舞台にした青少年怪盗 RPG シリーズ。学園生活や友情、恋愛といった日常を体験しながら、噂や都市伝説から生まれる超常現象に立ち向かう。「ペルソナ能力」に目覚めた少年少女たちが出会い、困難を乗り越えて成長する物語を描く。テレビアニメ、劇場版アニメ、武道館ライブ、舞台、漫画などにも展開している。',
  'about.p2':
    '「ペルソナ」とは、自らの内に眠る「もう一人の自分」が、古の神や悪魔の姿をまとって現れた、強大な力を持つ「もう一人の自分」のこと。',
  'about.seriesAlt': 'ペルソナシリーズ',
  'about.shot1': 'ゲーム画面 1',
  'about.shot2': 'ゲーム画面 2',

  'cta.title': 'さあ、「更生」を始めよう',
  'cta.buy': '購入ページへ',
  'cta.gallery': 'ギャラリー',

  'chara.seeAll': 'キャラクター一覧',
  'chara.detail': '詳細プロフィール →',
  'chara.arcana': 'アルカナ',
  'chara.personaLabel': '初期ペルソナ',
  'chara.costume': 'コスチューム切替',
  'chara.school': '制服',
  'chara.aria': '{name} の詳細プロフィールを見る',

  'characters.subtitle': '心の怪盗団の全メンバー。|カードをクリックするとプロフィールを表示。',
  'characters.searchPlaceholder': '名前 / コードネーム / ペルソナ / アルカナで検索…',
  'characters.filterAll': 'すべて',
  'characters.resultPrefix': '該当',
  'characters.resultSuffix': '人',
  'characters.clear': '絞り込みを解除',
  'characters.emptyTitle': '該当するキャラクターがいません',
  'characters.emptyText': 'キーワードを変えるか、絞り込みを解除してください',
  'characters.cardPersona': 'ペルソナ',

  'detail.back': '← キャラクター一覧',
  'detail.ability': 'ABILITY',
  'detail.skill': 'SKILL',
  'detail.story': 'STORY',
  'detail.personaLabel': '初期ペルソナ',

  'gallery.subtitle':
    'ゲーム内の名場面と戦闘演出を収録。|画像をクリックすると拡大表示、左右に切り替え可能。',
  'gallery.cat.all': 'すべて',
  'gallery.cat.scene': '記念シーン',
  'gallery.cat.battle': '戦闘フィニッシュ',
  'gallery.close': '閉じる',
  'gallery.prev': '前へ',
  'gallery.next': '次へ',
  'gallery.altScene': 'ゲームスクリーンショット',
  'gallery.altBattle': '戦闘フィニッシュ',
  'gallery.cta': '購入ページへ',

  'buy.title': '購入ガイド',
  'buy.physical': 'パッケージ版',
  'buy.digital': 'ダウンロード版',
  'buy.intro':
    'プラットフォームを選んで、「更生」の旅を始めよう。|パッケージ版は一部機種のみ、その他はダウンロード版のみ。',
  'buy.storeAria': '{name} ストアを開く',
  'buy.specTitle': 'SPEC',
  'buy.sysreq': '動作環境（PC）',
  'buy.sysreqAlt': 'PC 動作環境',
  'buy.note': '価格・特典内容は各ストアのページをご確認ください。',
  'buy.btnGallery': 'ゲーム画面を見る',
  'buy.btnCharacters': 'キャラクターを見る',

  'footer.disclaimer': '本ページは個人の Web デザイン課題であり、ATLUS / SEGA とは関係ありません',
  'footer.author': 'ElectroME 2026',
};

/** 长文案与规格表取值优先使用官网原文，缺失时回退到手写文案 */
const withOfficial = (code: string, ui: Dictionary): Dictionary => {
  const official = OFFICIAL_CONTENT[code];
  if (!official) return ui;

  const merged: Dictionary = {
    ...ui,
    'story.p1': official.storyP1 || ui['story.p1'],
    'story.p2': official.storyP2 || ui['story.p2'],
    'about.p1': official.aboutP1 || ui['about.p1'],
    'about.p2': official.aboutP2,
    'spec.valueName': official.spec.title || ui['spec.valueName'],
    'spec.valueDate': official.spec.date || ui['spec.valueDate'],
    'spec.valueType': official.spec.genre || ui['spec.valueType'],
    'spec.valuePlayers': official.spec.players || ui['spec.valuePlayers'],
    'spec.valuePlatforms': official.spec.platforms || ui['spec.valuePlatforms'],
  };

  return merged;
};

export const DICTIONARIES: Record<Locale, Dictionary> = {
  'zh-CN': zhCN,
  ja: withOfficial('ja', ja),
  'zh-TW': withOfficial('zh-TW', zhTW),
  ko: withOfficial('ko', ko),
  en: withOfficial('en', en),
  fr: withOfficial('fr', fr),
  it: withOfficial('it', it),
  de: withOfficial('de', de),
  es: withOfficial('es', es),
};
