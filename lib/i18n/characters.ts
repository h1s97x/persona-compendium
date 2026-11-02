export interface CharacterText {
  name: string;
  description: string;
  story: string;
}

type CharacterTextMap = Record<string, CharacterText>;

const zhTW: CharacterTextMap = {
  joker: {
    name: '雨宮蓮',
    description:
      '少年主人公因為某個緣由轉學到「東京」的高中，同時他也開始做起奇怪的夢。──你正是命運的「囚徒」。不遠的將來，你將面臨毀滅。',
    story:
      '為了完成賦予他的「更生」任務，也為了將人們從邪惡慾望中拯救出來，成為怪盜的主角與各種人邂逅，結下羈絆。',
  },
  skull: {
    name: '坂本龍司',
    description:
      '私立秀盡學園的二年級學生，父母已離婚，心之怪盜團的衝鋒隊長。粗暴的言語行動非常引人注目，學校內的「問題兒」。',
    story: '平時就經常被學園的教員與指導員「關照」，似乎品行很有問題。但內心善良，是主角最忠實的夥伴。',
  },
  panther: {
    name: '高卷杏',
    description:
      '私立秀盡學園的二年級學生，主人公的同班同學，心之怪盜團的女演員。美國混血的日本歸國子女，能說出一口流利的英語。',
    story: '性格天真率直，由於擁有模特兒的身材及亮麗的樣貌，使同學們對她產生距離感而被孤立。',
  },
  fox: {
    name: '喜多川祐介',
    description: '公立洸星高校的二年級生，擅長繪畫和節能派料理，興趣是以節省車費為目的的散步和人類觀察。',
    story: '作為畫家的弟子，追求藝術的真諦。性格認真，有時會顯得有些天然。',
  },
  queen: {
    name: '新島真',
    description:
      '私立秀盡學園的三年級生，學校的學生會長。品行端正、文武雙全，有著一本正經絕不妥協的優等生氣質。',
    story: '但也因此，站在學生會長的立場上有些飄忽不定。某些時候意外的容易受驚。',
  },
  oracle: {
    name: '佐倉雙葉',
    description:
      '勒布朗咖啡店老闆佐倉惣治郎的隱瞞了存在感的養女。天才少女，精通心理學、情報學、程式設計，尤其是駭客技術。',
    story: '愛好是點心、電子遊戲和動畫——以及朋友。',
  },
  noir: {
    name: '奧村春',
    description:
      '私立秀盡學園的三年級生，奧村集團的社長奧村邦和的女兒，出身於上流社會，擁有良好的教育和修養。',
    story: '溫柔善良，但在戰鬥中展現出驚人的力量。喜歡園藝和咖啡。',
  },
  mona: {
    name: '摩爾加納',
    description: '心之怪盜團的精神支柱。擁有變身能力，在現實世界以一隻普通的黑貓姿態示人。',
    story: '還會利用黑貓的姿態為怪盜團進行刺探的工作。自稱是人類，夢想著恢復原本的樣子。',
  },
  crow: {
    name: '明智吾郎',
    description:
      '高中生偵探，「偵探王子」，協助警方調查「廢人化」和「怪盜團」事件。經常參加電視訪談節目，擁有很高的人氣。',
    story: '被認為是正義的化身。自稱偵探工作和電視節目給他的學校出勤造成了不小的麻煩。',
  },
  violet: {
    name: '芳澤霞',
    description: '私立秀盡學園的一年級轉校生，怪盜團新成員。體育特長生，是一位成績優異的藝術體操選手。',
    story: '秀盡學園對其表現有著很高的期待。優雅而堅強，追求完美。',
  },
};

const en: CharacterTextMap = {
  joker: {
    name: 'Ren Amamiya',
    description:
      'The young protagonist transfers to a Tokyo high school for a certain reason and begins to have strange dreams. “You are truly a prisoner of fate.” He is told that ruin awaits him before long.',
    story:
      'To complete the “rehabilitation” assigned to him and to save people from twisted desires, the protagonist becomes a phantom thief, meeting many people and forging bonds.',
  },
  skull: {
    name: 'Ryuji Sakamoto',
    description:
      'A second-year at Shujin Academy whose parents are divorced, and the charge leader of the Phantom Thieves. His rough words and behavior make him stand out as the school’s “problem child.”',
    story:
      'Constantly “looked after” by the faculty and counselors, he seems to have plenty of behavioral issues — yet he is kind at heart and the protagonist’s most loyal ally.',
  },
  panther: {
    name: 'Ann Takamaki',
    description:
      'A second-year at Shujin Academy, the protagonist’s classmate and the actress of the Phantom Thieves. A returnee with American heritage who speaks fluent English.',
    story:
      'Naive and straightforward, her model looks and striking appearance make classmates keep their distance, leaving her isolated.',
  },
  fox: {
    name: 'Yusuke Kitagawa',
    description:
      'A second-year at Kosei High School. Skilled at painting and thrifty cooking; his hobbies are walking to save train fare and observing people.',
    story:
      'An apprentice to a painter in pursuit of true art. Serious by nature, though sometimes unexpectedly absent-minded.',
  },
  queen: {
    name: 'Makoto Niijima',
    description:
      'A third-year at Shujin Academy and the student council president. Upright, talented in both academics and athletics, and a straight-laced honor student who refuses to compromise.',
    story:
      'That same seriousness makes her hesitate in her role as council president, and she can be surprisingly easily startled.',
  },
  oracle: {
    name: 'Futaba Sakura',
    description:
      'The adopted daughter of Sojiro Sakura, owner of Café Leblanc, who keeps a low profile. A prodigy in psychology, information science and programming — especially hacking.',
    story: 'Her hobbies are snacks, video games and anime — and friends.',
  },
  noir: {
    name: 'Haru Okumura',
    description:
      'A third-year at Shujin Academy and daughter of Kunikazu Okumura, president of the Okumura Group. Raised in high society with excellent education and manners.',
    story: 'Gentle and kind, yet she shows formidable strength in battle. She loves gardening and coffee.',
  },
  mona: {
    name: 'Morgana',
    description:
      'The spiritual pillar of the Phantom Thieves. Able to transform, he usually appears in the real world as an ordinary black cat.',
    story:
      'He also uses his cat form to scout for the team. He claims to be human and dreams of regaining his true form.',
  },
  crow: {
    name: 'Goro Akechi',
    description:
      'A high school detective known as the “Detective Prince” who assists the police with the mental shutdown and Phantom Thief cases. A frequent TV guest with a huge following.',
    story:
      'Considered the very image of justice. He claims his detective work and TV appearances badly hurt his school attendance.',
  },
  violet: {
    name: 'Kasumi Yoshizawa',
    description:
      'A first-year transfer student at Shujin Academy and a new member of the Phantom Thieves. A gifted athlete and accomplished rhythmic gymnast.',
    story: 'Shujin has high hopes for her performance. Elegant and strong, she pursues perfection.',
  },
};

const ja: CharacterTextMap = {
  joker: {
    name: '雨宮 蓮',
    description:
      'とある理由で「東京」の高校に転校した少年。同時に奇妙な夢を見るようになる。――お前はまさに運命の「囚われ人」だ。遠からず破滅が訪れると告げられる。',
    story:
      '与えられた「更生」の任務を果たすため、人々を邪悪な欲望から救うため、怪盗となった主人公は様々な人物と出会い、絆を結んでいく。',
  },
  skull: {
    name: '坂本 竜司',
    description:
      '私立秀尽学園の二年生。両親は離婚しており、心の怪盗団の突撃隊長。乱暴な言動が目立ち、学園の「問題児」として通っている。',
    story:
      '教員や指導員から常に目を付けられており、素行に難ありに見えるが、根は優しく主人公の最も忠実な相棒。',
  },
  panther: {
    name: '高巻 杏',
    description:
      '私立秀尽学園の二年生で、主人公のクラスメイト。心の怪盗団の女優。アメリカの血を引く帰国子女で、流暢な英語を話す。',
    story: '天真爛漫な性格。モデルのような容姿ゆえに周囲から距離を置かれ、孤立してしまう。',
  },
  fox: {
    name: '喜多川 祐介',
    description:
      '公立洸星高校の二年生。絵画と節約料理を得意とし、運賃を浮かすための散歩と人間観察が趣味。',
    story: '画家の弟子として芸術の真髄を追い求める。真面目な性格だが、時に天然な一面も。',
  },
  queen: {
    name: '新島 真',
    description:
      '私立秀尽学園の三年生で生徒会長。品行方正で文武両道、融通の利かない優等生気質の持ち主。',
    story: 'その真面目さゆえに生徒会長としての立場に揺れることも。意外と驚きやすい一面も。',
  },
  oracle: {
    name: '佐倉 双葉',
    description:
      '喫茶ルブランの店主・佐倉惣治郎の養女。心理学・情報学・プログラミング、とりわけハッキングに長けた天才少女。',
    story: '趣味はお菓子、ゲーム、アニメ――そして友達。',
  },
  noir: {
    name: '奥村 春',
    description:
      '私立秀尽学園の三年生。奥村グループ社長・奥村邦和の娘で、上流階級で育ち、高い教養と品を備える。',
    story: '優しく穏やかだが、戦いでは驚くべき力を発揮する。園芸とコーヒーが好き。',
  },
  mona: {
    name: 'モルガナ',
    description: '心の怪盗団の精神的支柱。変身能力を持ち、現実世界では普通の黒猫の姿で過ごす。',
    story: '黒猫の姿で怪盗団のために偵察もこなす。人間だと自称し、本来の姿に戻ることを夢見ている。',
  },
  crow: {
    name: '明智 吾郎',
    description:
      '高校生探偵「探偵王子」。廃人化事件と怪盗団事件の捜査に協力し、テレビ出演も多い人気者。',
    story: '正義の化身と見られている。探偵業とテレビ出演で学校の出席が危ういと本人は語る。',
  },
  violet: {
    name: '芳澤 かすみ',
    description: '私立秀尽学園の一年生転校生で、怪盗団の新メンバー。優秀な新体操選手でもある。',
    story: '秀尽学園からも大きな期待を寄せられている。優雅で強く、完璧を追い求める。',
  },
};

export const CHARACTER_TEXT: Partial<Record<string, CharacterTextMap>> = {
  'zh-TW': zhTW,
  en,
  ja,
};
