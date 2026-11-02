import type { Locale } from './dictionary';

/** 官网「校园生活 / 怪盗生活」逐屏文案，取自各语言官网原文 */
export type LifePage = {
  /** 小标题图片上的文字，用于 alt */
  title: string;
  /** 正文，按官网 <br> 分行 */
  lines: string[];
};

export type LifeCopy = {
  school: LifePage[];
  phantom: LifePage[];
};

const zhCN: LifeCopy = {
  school: [
    {
      title: '学生加怪盗 体验双重生活！',
      lines: [
        '白天是普普通通的高中生。在学校上课、放学后和朋友外出、体验丰富的校园活动，一年中都充满让人心动的事件！ 晚上化身怪盗。盗走堕落大人们的心！度过欢乐和悬疑同在的充实一年吧。',
      ],
    },
    {
      title: '体验学校中 丰富的事件！',
      lines: [
        '白天是上学的学生。',
        '早上坐电车去学校。在学校可以认真上课，满足特定条件还可以逃课……！？',
        '球类大赛、海边游玩，还有文化祭、社会参观活动和修学旅行等等，校园生活的四季被多彩的事件填满！',
      ],
    },
    {
      title: '今天放学后 要做点什么？',
      lines: [
        '放学后可以和朋友看电影、购物、去澡堂、打工等等，体验各种经历磨练自己吧！',
        '有了充实的放学后生活，说不定能离独当一面的贼人更近一步！？',
      ],
    },
    {
      title: '和协助人 加深感情吧！',
      lines: [
        '主角在学校和城市中遇到的人里有掌握着各种特技和技能的人。和他们利害一致，或是构筑起信赖关系，就能结成“协助”关系！加深和“协助”对象的羁绊，能借助他们的能力让怪盗生活更加顺利。',
        '积极和城市里的人们交流，加深羁绊结识值得信赖的协助人吧。',
      ],
    },
    {
      title: '初次体验 也不必担心！',
      lines: [
        '游戏开始时可以选择难度！',
        '难度不会影响游戏的推进，第一次玩的人或者想要轻松体验剧情的人推荐选择SAFETY或EASY难度。除此以外还提供了可供休息或存档的“安全屋”等方便游玩的功能。',
      ],
    },
  ],
  phantom: [
    {
      title: '让堕落的大人 真心悔改吧！',
      lines: [
        '主角一行自称“心灵怪盗”，席卷大城市。',
        '他们的目标是目中无人虐待学生的教师、明目张胆进行剽窃的创作者等，怀有扭曲欲望的“堕落大人”们。',
        '让这些大人悔改，为弱者夺回被偷走的世界吧！',
      ],
    },
    {
      title: '拿到宫殿中 沉睡的“秘宝”！',
      lines: [
        '宫殿里，看似无路可走的地方也许按下按钮就能跃上落脚处或是墙壁，抑或是穿越在吊灯之上。每个人都能简单体验炫目的怪盗动作。华丽地通关宫殿，偷出“秘宝”，让堕落的大人悔改吧。',
      ],
    },
    {
      title: '使用“异世界导航Ａｐｐ” 潜入内心！',
      lines: [
        '怪盗团会运用神秘的“异世界导航Ａｐｐ”。',
        '导航指引一行潜入坏人们用堕落之心看到的',
        '另一个现实，那是叫作“宫殿”的心灵异世界。',
      ],
    },
    {
      title: '炫目多彩的 爽快战斗！',
      lines: [
        '宫殿中满是守卫“秘宝”的哨兵“暗影”。小心接近别被发现，向“暗影”发起战斗吧。',
        '使用“快捷指令”，按下一个按钮就能进行攻击！',
        '命中弱点可以让敌人倒地。出现1MORE时可以再次攻击！使用武器或枪，以及自己的分身——心灵的力量“人格面具”，不断命中弱点，把战斗掌控在自己的节奏中。除此以外，还有结下深厚羁绊的怪盗团成员可以解锁的强力连招“SHOWTIME”等，让战斗更为有利的丰富技能！',
      ],
    },
    {
      title: '民众的宫殿 “印象空间”',
      lines: [
        '除了主线剧情，还可以自由接下名为“请求”的委托。故事的舞台是每次潜入时形状都会发生改变的特殊迷宫“印象空间”。“印象空间”是民众的宫殿，规模也无穷无尽。而且印象空间之中还有神秘少年……？',
        '乘上摩尔加纳变成的公交车，通关广阔的“印象空间”吧！',
      ],
    },
    {
      title: '天鹅绒房间 帮助主角“更生”',
      lines: [
        '主人公被带到的监狱“天鹅绒房间”中，可以让不同人格面具合体，诞生出新的人格面具。',
        '这也是“处刑”旧的自我，诞下新的自我的仪式。获得新的人格面具，挑战强敌。',
        '作为更生的一环，有时还可以和天鹅绒房间的双胞胎看守一起出门……？',
      ],
    },
  ],
};

const zhTW: LifeCopy = {
  school: [
    {
      title: '學生與怪盜的 兩種生活！',
      lines: [
        '白天是極為普通的高中生。',
        '白天在學校上課，放學就和朋友出去玩，',
        '全年都有學校慶典等令人雀躍的活動！',
        '晚上則化身怪盜在不為人知的地方大顯身手。',
        '偷走腐敗大人的心！',
        '精彩度過充滿笑料與懸疑的1年吧！',
      ],
    },
    {
      title: '多采多姿的 學校活動！',
      lines: [
        '白天會以學生身分上學。',
        '早上搭電車上學，可以在學校認真上課，滿足特定條件',
        '還能翹課……！？',
        '此外，校園生活的四季還有各式各樣的活動。例如球類',
        '大賽、海水浴、文化祭、社會參觀活動、畢業旅行等等。',
      ],
    },
    {
      title: '今天放學後，要做什麼打發時間？',
      lines: [
        '放學後可和朋友看電影、',
        '買東西、上澡堂，或是打工等等。',
        '體驗各式各樣的事來精進自己吧！',
        '充實放學後的生活，或許能早日成為獨當一面的俠盜!?',
      ],
    },
    {
      title: '加深與協助人 之間的羈絆吧！',
      lines: [
        '主人公在學校或路上遇到的形形色色的人之中，有些會擁',
        '有各式各樣的專長或技能。與他們建立利害關係或信賴',
        '關係，就能產生合作關係「協助」。加深與「協助」對象間',
        '的羈絆，就能享有他們能力所帶來的好處，讓怪盜生活過',
        '得更有利。積極與路上的人交流、加深羈絆，讓他們成為',
        '可靠的協助人吧！',
      ],
    },
    {
      title: '第一次玩的人 也不必擔心！',
      lines: [
        '遊戲開始時可選擇難易度！',
        '遊戲並不會依難易度有不同的劇情進展，',
        '因此第一次遊玩或想輕鬆享受故事內容的人，',
        '推薦選擇SAFETY或EASY。',
        '此外遊戲也內建了可用來休息或存檔的「安全小屋」',
        '功能，讓您玩得更輕鬆。',
      ],
    },
  ],
  phantom: [
    {
      title: '讓腐敗的大人 悔改吧！',
      lines: [
        '以「心之怪盜」之名驚動大都會',
        '主人公一行人的目標是不顧他人眼光虐待學生的教師，',
        '或是以剽竊自居的創作者等懷有扭曲慾望的「腐敗大人',
        '」們。',
        '讓這些大人悔改，為弱者拿回被搶走的世界吧！',
      ],
    },
    {
      title: '找到沉睡在 殿堂內的“祕寶”！',
      lines: [
        '殿堂裡看似沒有路的地方，說不定按一個鍵就能爬上平',
        '台或牆壁，或是通過水晶吊燈的上方。任誰都能輕鬆享',
        '受新鮮的怪盜動作。華麗地攻略殿堂，偷走"祕寶"，讓',
        '腐敗的大人悔改吧！',
      ],
    },
    {
      title: '使用“異世界導航Ａｐｐ” 潛入內心世界！',
      lines: [
        '「異世界導航Ａｐｐ」是一種怪盜團使用的神秘',
        'Ａｐｐ。',
        '導航所指引的，正是壞人們用扭曲心靈看管的另',
        '一個現實空間，人稱"殿堂"的異世界。',
      ],
    },
    {
      title: '耳目一新的 爽快戰鬥！',
      lines: [
        '殿堂裡埋伏著看管"祕寶"、如同守衛般的"陰影"。',
        '記得靠近"陰影"戰鬥時，要避免被他們發現！',
        '運用"快捷指令"，一鍵就能發動攻擊！',
        '攻擊命中敵人弱點，敵人就會倒地。１MORE發生時就',
        '能再次攻擊！活用武器、槍，或是自己分身的心之力「人',
        '格面具」，盡量攻擊弱點，讓戰鬥更有利吧！',
        '此外，遊戲內還有許多讓戰鬥更有利的招式，',
        '像是羈絆夠深的怪盜團伙伴可開放的強大合體技',
        '「SHOWTIME」。',
      ],
    },
    {
      title: '大眾的殿堂 “印象空間”',
      lines: [
        '有別於主線故事，玩家可自由接受「請求」。',
        '請求的舞台就在「印象空間」，是一種每次潛入都',
        '會改變構造的特殊迷宮。作為一個大眾殿堂，',
        '印象空間的規模可說是永無止盡。',
        '而且，印象空間裡竟然還出現了一名神秘少年，',
        '他究竟是……？',
        '搭乘變身成公車的摩爾加納，攻略廣大的「印象',
        '空間」吧！',
      ],
    },
    {
      title: '天鵝絨房間 將協助“更生”。',
      lines: [
        '主人公受邀前往的監獄「天鵝絨房間」可讓不同的人格',
        '面具合體，誕生出新的人格面具。',
        '這也是一種將舊我"處刑"以誕生新我的儀式。',
        '藉此獲得新的人格面具來對抗強敵吧！',
        '作為更生的一環，有時還能和看守天鵝絨房間的雙胞',
        '胎一起出門……？',
      ],
    },
  ],
};

const ja: LifeCopy = {
  school: [
    {
      title: '学生と怪盗の二重生活！',
      lines: [
        '昼間はごく普通の高校生。学校の授業を受けたり、放課後は友達と出かけたり、学校行事などの心躍るイベントも年中盛りだくさん！',
        '夜は怪盗として暗躍。腐った大人たちの心を盗み出せ！笑いあり、サスペンスありの濃密な1年を過ごそう。',
      ],
    },
    {
      title: '学校はイベントが盛りだくさん！',
      lines: [
        '昼間は学生として学校へ。朝は電車に揺られて通学。学校では授業をまじめにうけるもよし。ある特定の条件を満たせばサボることも…！？球技大会、海水浴に文化祭、社会見学に修学旅行など、学校生活には四季折々のイベントが盛りだくさん！',
      ],
    },
    {
      title: '',
      lines: [
        '放課後には、友達と映画を観たり、買い物したり、銭湯に行ったり、アルバイトしたり。いろんなことを体験して自分を磨こう!',
        '放課後を充実させると、一人前の賊に近づけるかも!?',
      ],
    },
    {
      title: '協力者と絆を深めよう！',
      lines: [
        '主人公が学校や街中で出会う人々の中には様々な特技や技能を持つ者たちがいる。彼らと利害が一致したり、信頼関係を築いていくことで、協力関係『コープ』が結べる!『コープ』の相手と絆を深めれば、彼らの能力でより有利に怪盗ライフが過ごせるようになっていく。街の人々と積極的に交流し、絆を深めて心強い協力者を得よう。',
      ],
    },
    {
      title: '初めての人でも大丈夫！',
      lines: [
        'ゲーム開始時に難易度が選べる！',
        '難易度でゲームの展開が変化することはないので、初めての人やサクサクストーリーを楽しみたい人はSAFETYやEASYがオススメ。',
        'ほかにも休憩やセーブが可能な「セーフルーム」など遊びやすい機能が用意されています。',
      ],
    },
  ],
  phantom: [
    {
      title: '腐った大人を改心させろ！',
      lines: [
        '“心の怪盗”を名乗り、大都会を騒がせる主人公たちのターゲットは傍若無人に生徒を虐げられる教師や盗作上等のクリエイターなど歪んだ欲望を抱く「腐った大人」達。',
        'そんな大人たちを改心させ、弱き人々のために盗まれた世界を取り戻せ！',
      ],
    },
    {
      title: 'パレスに眠る”オタカラ”をGET！',
      lines: [
        'パレスの最深部には歪んだ心の大元“オタカラ”が眠っている。',
        'パレスでは、一見道がないと思えるような場所でもボタン一つで足場や壁をよじ登ったり、シャンデリアの上を渡ったり。誰でもカンタンに鮮やかな怪盗アクションが楽しめる。華麗にパレスを攻略し、“オタカラ”を盗み出し、腐った大人を改心させよう。',
      ],
    },
    {
      title: '”イセカイナビ”で心に潜入！',
      lines: [
        '怪盗団が駆使する謎のアプリ『イセカイナビ』。ナビが導く先は悪い奴らがその歪んだ心で見ているもう一つの現実、“パレス”と呼ばれる心の異世界だ。',
      ],
    },
    {
      title: '目にも鮮やかな爽快バトル！',
      lines: [
        'パレスの中は、“オタカラ”を守る番兵のような存在“シャドウ”がひしめいている。見つからないよう“シャドウ”に近づき戦闘をしかけよう。“ダイレクトコマンド”で、ボタン一つで攻撃！弱点を突くと、敵がダウン。１MOREが発生して、もう一度攻撃が可能に！武器や銃、そして自分自身の分身である心の力「ペルソナ」を用いて、どんどん弱点を突いてバトルを有利に進めよう。ほかにも、絆が深まった怪盗団のメンバーが開放できる強力なコンビ技「SHOWTIME」などバトルを有利に進める技が盛りだくさん！',
      ],
    },
    {
      title: '大衆のパレス”メメントス”',
      lines: [
        '本編のシナリオとは別に、自由に受けられる依頼『リクエスト』。その舞台となるのが、潜入するたびに形が変わる特殊なダンジョン“メメントス”だ。大衆のパレスである“メメントス”は、その規模も果てしない。しかも、メメントスの中には、謎の少年が…？',
        'バスに変身したモルガナに乗って、広大な“メメントス”を攻略しよう！',
      ],
    },
    {
      title: 'ベルベットルームが”更生”を手助け',
      lines: [
        '主人公がいざなわれる監獄「ベルベットルーム」では、異なるペルソナ同士を合体して、「新たな」ペルソナを生み出すことができる。それは古き己を“処刑”して新たな自分を生み出す儀式でもある。新たなペルソナを手に入れて、強敵に立ち向かおう。',
        '時に更生の一環として、ベルベットルームの看守である双子と共にお出かけすることも……？',
      ],
    },
  ],
};

const ko: LifeCopy = {
  school: [
    {
      title: '학생과 괴도의 이중생활!',
      lines: [
        '낮에는 극히 평범한 고등학생. 학교에서 수업을 듣고, 방과 후에는 친구들과 놀러다니며, 학교 행사에 참여하는 등',
        '가슴 설레는 이벤트도 1년 내내 한가득!',
        '밤에는 괴도로서 암약. 부패한 어른들의 마음을 훔쳐내라!',
        '웃음과 서스펜스가 넘치는 충실한 1년을 보내자.',
      ],
    },
    {
      title: '학교에는 풍부한 이벤트가 한가득!',
      lines: [
        '낮에는 학생으로서 학교에. 아침에는 전철을 타고 등교.',
        '학교에서는 수업을 성실하게 받는 것도 좋지만, 어느 특정 조건을 채우면 땡땡이를 칠 수도…?!',
        '구기대회, 해수욕, 문화제, 사회견학, 수학여행 등, 학교 생활에는 사계절마다의 이벤트가 한가득!',
      ],
    },
    {
      title: '오늘 방과 후에는 뭘 하며 보낼까?',
      lines: [
        '방과 후에는 친구와 영화를 보거나, 쇼핑을 하거나,',
        '목욕탕에 가고 아르바이트를 하는 등, 다양한 경험을 하며 자신을 성장시키자!',
        '방과 후를 충실하게 보내면 어엿한 괴도에 더',
        '가까워질지도?!',
      ],
    },
    {
      title: '협력자와 인연을 맺어나가자!',
      lines: [
        '주인공이 학교나 거리에서 만나는 사람들 중에는 다양한 특기나 기술을 가진 사람이 있다. 그들과 마음이 맞거나 신뢰 관계를 쌓게 되면 협력 관계 『코옵』을 맺을 수 있다!',
        '『코옵』상대와 깊은 인연을 맺게 되면, 그들의 능력으로 더욱 유리하게 괴도 라이프를 즐길 수 있다.',
        '거리의 사람들과 적극적으로 교류하며 깊은 인연을 맺고 든든한 협력자를 얻자.',
      ],
    },
    {
      title: '처음 하는 사람도 안심하고 플레이!',
      lines: [
        '게임 시작 시에 난이도를 선택할 수 있다!',
        '난이도로 게임의 전개가 변하는 일은 없으므로, 처음 플레이하는 사람이나 쾌적하게 스토리를 즐기고 싶은 사람은 SAFETY 또는 EASY를 추천.',
        '그 밖에도 휴식이나 저장을 할 수 있는 「세이프 룸」 등 플레이를 편하게 해주는 기능이 준비되어 있다.',
      ],
    },
  ],
  phantom: [
    {
      title: '부패한 어른을 개심시켜라!',
      lines: [
        '"마음의 괴도"를 자칭하며 대도시를 놀라게 한',
        '주인공 일행의 타깃은 방약무인하게 학생들을 괴롭히는 교사나 타인의 작품을 가로챈 예술가 등 뒤틀린 욕망을 품은 「부패한 어른」들.',
        '그런 어른들을 개심시키고, 약자들을 위해 도둑 맞은 세계를 되찾아라!',
      ],
    },
    {
      title: '팰리스에 잠든 “보물”을 GET!',
      lines: [
        '팰리스에서는 언뜻 길이 없다고 생각되는 장소에서도 버튼 하나로 발판이나 벽을 타고 오르거나, 샹들리에 위를 건너는 등, 누구든 간단하고 쾌적하게 괴도 액션을 즐길 수 있다. 멋지게 팰리스를 공략해 "보물"을',
        '훔쳐내고, 부패한 어른들을 개심시키자.',
      ],
    },
    {
      title: '“이세계 내비”로 마음에 잠입!',
      lines: [
        '괴도단이 사용하는 수수께끼의 앱 『이세계 내비』. 내비게이션이 이끄는 곳은 악한 이들이 그 왜곡된 마음으로 보고 있는 또 하나의 현실, "팰리스"라고 불리는 마음속 이세계다.',
      ],
    },
    {
      title: '화려한 상쾌 배틀!',
      lines: [
        '팰리스 안에는 "보물"을 지키는 경비병 같은 존재 "섀도"가 득실대고 있다. 들키지 않고 "섀도"에게 다가간 후 전투를 시작하자.',
        '"다이렉트 커맨드"는 버튼 하나로 공격할 수 있다!',
        '약점을 찌르면 적이 다운. 1MORE가 발생해 다시 한 번 공격 가능! 무기와 총, 그리고 자신의 분신인 마음의 힘「페르소나」를 사용해 계속해서 약점을 찌르고 배틀을 유리하게 이끌자. 그 외에도, 인연이 깊어진 괴도단의 멤버가 사용할 수 있는 강력한 콤비 기술 「SHOWTIME」등 배틀을 유리하게 만드는 기술이 한가득!',
      ],
    },
    {
      title: '대중의 팰리스“메멘토스”',
      lines: [
        '본편의 시나리오와는 별개로, 자유롭게 받을 수 있는 의뢰 『리퀘스트』. 그 무대가 되는 곳이 잠입할 때마다 모습이 바뀌는 특수한 던전 "메멘토스"다. 대중의 팰리스인 "메멘토스"는 그 규모도 가늠할 수 없다. 게다가 메멘토스 안에는 수수께끼의 소년이…?',
        '버스로 변신한 모르가나를 타고 광대한 "메멘토스"를 공략하자!',
      ],
    },
    {
      title: '벨벳 룸이“갱생”을 서포트.',
      lines: [
        '주인공이 불려간 감옥 「벨벳 룸」에서는 서로 다른 페르소나를 합체시켜 새로운 페르소나를 만들어낼 수 있다. 그것은 예전의 자신을 "처형"하고 새로운 자신으로 태어나는 의식이다. 새로운 페르소나를 획득해 강적과 맞서자.',
        '때로는 갱생의 일환으로 벨벳 룸의 간수인 쌍둥이와 함께 외출을 하기도……?',
      ],
    },
  ],
};

const en: LifeCopy = {
  school: [
    {
      title: 'A Double Life — Student and Phantom Thief!',
      lines: [
        "By day you're an ordinary high school student. Attend classes, head out with friends after school, and enjoy school events — every month of the year is packed with heart-pounding moments!",
        'By night you act as a phantom thief. Steal the hearts of corrupt adults! Spend a dense year full of laughter and suspense.',
      ],
    },
    {
      title: 'School Is Packed With Events!',
      lines: [
        'By day you are a student. Ride the train to school each morning, study seriously in class — and, if certain conditions are met, you can even skip class…!?',
        'Sports day, trips to the beach, the culture festival, field trips and the school excursion — all four seasons of school life are filled with colorful events!',
      ],
    },
    {
      title: 'What Will You Do After School?',
      lines: [
        'After school you can watch movies with friends, go shopping, visit the bathhouse, take a part-time job and more — build yourself up through all kinds of experiences!',
        'A fulfilling after-school life may bring you one step closer to becoming a first-rate thief!?',
      ],
    },
    {
      title: 'Deepen Your Bonds With Confidants!',
      lines: [
        'Among the people you meet at school and around the city are those with special skills and talents. If your interests align, or if you build a relationship of trust, you can form a "Confidant" bond!',
        'Deepening your bonds with Confidants lets you borrow their abilities and makes your phantom thief life smoother. Talk to the people of the city, deepen your bonds and find Confidants you can trust.',
      ],
    },
    {
      title: 'No Need to Worry, Even on Your First Playthrough!',
      lines: [
        'You can choose the difficulty at the start of the game!',
        'Difficulty does not affect how the story progresses. For first-time players, or those who want to enjoy the story casually, SAFETY or EASY is recommended. There are also handy features such as Safe Rooms where you can rest and save.',
      ],
    },
  ],
  phantom: [
    {
      title: 'Make Corrupt Adults Truly Repent!',
      lines: [
        'Calling themselves the "Phantom Thieves of Hearts," the protagonist and his friends take the big city by storm.',
        'Their targets are teachers who abuse their students, creators who brazenly plagiarize, and other "corrupt adults" driven by twisted desires.',
        'Make these adults repent and take back the world that was stolen from the weak!',
      ],
    },
    {
      title: 'Steal the "Treasure" Sleeping in the Palace!',
      lines: [
        'Inside a Palace, a place that looks like a dead end may hide a button that lets you leap to a foothold or a wall, or you may cross above chandeliers. Anyone can easily enjoy flashy phantom thief action. Clear the Palace in style, steal the "Treasure" and make corrupt adults repent.',
      ],
    },
    {
      title: 'Infiltrate Their Hearts With the "Metaverse Navigator"!',
      lines: [
        'The Phantom Thieves use the mysterious "Metaverse Navigator" app.',
        'The app guides them into another reality, seen through the twisted hearts of villains — a cognitive world called a "Palace."',
      ],
    },
    {
      title: 'Flashy, Exhilarating Battles!',
      lines: [
        'Palaces are crawling with "Shadows," sentries that guard the "Treasure." Approach carefully without being spotted, then strike!',
        'With "shortcuts" you can attack with a single button press!',
        'Hitting an enemy\'s weakness knocks it down. When 1 MORE appears, you can attack again! Use your weapons, guns and the power of your other self — the "Persona" — to keep hitting weaknesses and control the flow of battle. On top of that, there are powerful combination attacks called "SHOWTIME" that unlock with Phantom Thief members you\'ve deeply bonded with, and many other skills to turn the fight in your favor!',
      ],
    },
    {
      title: 'The Public\'s Palace: "Mementos"',
      lines: [
        'Beyond the main story, you can freely take on requests called "Mementos requests." The stage is a special dungeon called "Mementos" whose shape changes every time you enter. Mementos is the public\'s Palace, and its scale is endless. And somewhere inside is a mysterious boy…?',
        'Ride the bus that Morgana transforms into and clear the vast "Mementos"!',
      ],
    },
    {
      title: 'The Velvet Room Helps the Protagonist "Rehabilitate"',
      lines: [
        'In the prison called the "Velvet Room" where the protagonist is taken, different Personas can be fused to give birth to new ones.',
        'It is also a ritual to "execute" the old self and give birth to a new one. Obtain new Personas and take on powerful enemies.',
        'As part of his rehabilitation, he can sometimes go out with the twin wardens of the Velvet Room…?',
      ],
    },
  ],
};

const FALLBACK_COPY: LifeCopy = en;

/** 各语言文案；未单独翻译的语言复用英文 */
export const LIFE_COPY: Record<Locale, LifeCopy> = {
  'zh-CN': zhCN,
  ja,
  'zh-TW': zhTW,
  ko,
  en,
  fr: FALLBACK_COPY,
  it: FALLBACK_COPY,
  de: FALLBACK_COPY,
  es: FALLBACK_COPY,
};

/** 区块标题（标题图上的文字，用于 alt / 无障碍） */
export const LIFE_TITLES: Record<Locale, { school: string; phantom: string }> = {
  'zh-CN': { school: '校园生活', phantom: '怪盗生活' },
  'zh-TW': { school: '校園生活', phantom: '怪盜生活' },
  ja: { school: 'スクールライフ', phantom: '怪盗ライフ' },
  ko: { school: '스쿨 라이프', phantom: '괴도 라이프' },
  en: { school: 'Daily Life', phantom: 'Phantom Life' },
  fr: { school: 'Vie scolaire', phantom: 'Vie de voleur' },
  it: { school: 'Vita scolastica', phantom: 'Vita da ladro' },
  de: { school: 'Schulleben', phantom: 'Diebesleben' },
  es: { school: 'Vida escolar', phantom: 'Vida de ladrón' },
};
