// 由官方多语言站点抽取的文案（构建时静态生成，勿手改）
export interface OfficialLocaleContent {
  storyP1: string;
  storyP2: string;
  aboutP1: string;
  aboutP2: string;
  spec: { title: string; date: string; genre: string; players: string; platforms: string };
  characters: Record<string, string>;
}

export const OFFICIAL_CONTENT: Record<string, OfficialLocaleContent> = {
  en: {
    storyP1:
      'Forced to transfer to a high school in Tokyo, the protagonist has a strange dream. “You truly are a prisoner of fate. In the near future, ruin awaits you.”',
    storyP2:
      'With the goal of “rehabilitation” looming overhead, he must save others from distorted desires by donning the mask of a Phantom Thief.',
    aboutP1:
      'Persona is a RPG series set in modern-day Japan that is acclaimed for its narrative style of confronting everyday realities such as forging friendships and romances, alongside supernatural and paranormal themes, including uncovering and solving mysterious rumors and various urban legends. The series typically follows a story that unfolds after a group of teenagers discover their abilities as Persona-users, chronicling the growth of their friendship and inner selves as they confront numerous obstacles. In recent years, the franchise has been adapted to animated TV series, animated films, music concerts, theatrical stages, manga, and continues to expand its influence. “Persona” refers to the alternate persona that lies within you—another “you” who materializes themselves in form of mythical deities and demons possessing great power.',
    aboutP2: '',
    spec: {
      title: 'Persona 5 Royal',
      date: 'October 21, 2022',
      genre: 'RPG',
      players: '1',
      platforms:
        'Xbox Game Pass Xbox Series X|S Xbox One Windows Steam PlayStation®5 Nintendo Switch™',
    },
    characters: {
      joker:
        'A second-year high school student who moved in the spring and transferred to Shujin Academy. One day, with his back against the wall, his powers as a Persona-user awakens. He lives as a normal student in the day as a tenant of a café owned by a family friend. After school, he turns into a Phantom Thief who upheaves the city.',
      violet:
        'A beautiful girl who transfers to Shujin Academy the same spring as the protagonist. She’s a talented gymnast since middle schooland Shujin Academy holds high hopes for her because of her excellent athletic records.',
      skull:
        'A fellow second-year student at Shujin Academy. Although his words and actions can be crude, he has a caring, dependable, and outgoing personality. Due to an incident, he is labeled as a delinquent and fellow students begin distancing themselves from him. After befriending the recently transferred protagonist, he awakens his abilities as a Persona-user.',
      mona: 'A mysterious cat-like creature that the protagonist and Ryuji encounter in the Metaverse, he decides to accompany them shortly after. He can communicate with humans and claims to be able to transform into various objects, yet many things about him remain shrouded in mystery. Although he can be aggressive at times, he’s also incredibly selfless and supports his teammates. He often exclaims, “I’m not a cat!”',
      panther:
        'A fellow second-year student at Shujin Academy, and a classmate to the protagonist. She’s an attractive girl who is one quarter American and models on the side. She’s free-spirited and has an honest personality, but due to her striking appearance, she’s isolated from everyone around her. After befriending the protagonist, an incident acts as a catalyst to awaken her abilities as a Persona-user.',
      fox: 'A second-year art student at Kosei High School who specializes in painting. His attractive appearance draws attention, but his unique artistic sensibilities often lead to him being out of touch with others. He‘s a live-in apprentice for Ichiryusei Madarame, a master artist. A turn of events leads him to befriend the protagonist and awaken his abilities as a Persona-user.',
      queen:
        'A third-year student attending Shujin Academy. She is intelligent, well-mannered, and serves as the student body president. Calm and collected, she has a strong sense of responsibility and is quick to take action, but due to her straight-forward personality she can also be quite stubborn. A series of events trigger her powers as a Persona-user before she joins the Phantom Thieves. She acts as the brains of the team.',
      oracle:
        'A girl one year younger than the protagonist. She boasts an incredibly mathematical brain along with a prodigious talent for computer programming, but struggles with social communication. She lives a cloistered life trapped in her own home. She encounters the protagonists one day and awakens her abilities as a Persona-user.',
      noir: 'A third-year student at Shujin Academy, and the daughter of the CEO of one of the largest food companies in the country. Her soft appearance and docile personality present someone capable of maintaining positive relationships, but due to the environment she grew up in, she struggles to find value in building meaningful relationships, often avoiding them altogether. What will lead her to awakening her abilities as a Persona-user...?',
      crow: 'A third-year high school student who is also a professional detective. With a track record of solving numerous crimes, he maintains a respectable reputation even among law enforcement officials. His sharp intellect, sociable personality, and good looks attracts the attention of many. He frequently appears on media, often touted as the “The Second Coming of the Detective Prince.” Although he is formally in the position of chasing after the Phantom Thieves, he eventually works alongside them.',
    },
  },
  fr: {
    storyP1:
      'Transféré bon gré mal gré dans un lycée de Tokyo, le protagoniste est en proie à un rêve étrange. "Tu es bel et bien un prisonnier du destin. Dans un avenir proche, c\'est la ruine qui t\'attend."',
    storyP2:
      'Pour mieux être "réhabilité", il doit protéger les autres des désirs pervertis en enfilant le masque d\'un Voleur fantôme.',
    aboutP1:
      "Persona est une série de RPG se déroulant dans le Japon moderne, plébiscitée pour son style narratif qui associe la réalité du quotidien (nouer des relations amicales et amoureuses, etc.) à des thèmes surnaturels et paranormaux, par le biais d'enquêtes sur diverses rumeurs mystérieuses et légendes urbaines. Chaque épisode commence quand un groupe d'adolescents se découvrent capables d'utiliser des Personae : l'histoire suit l'évolution de leur amitié et de leurs personnalités face à de nombreux obstacles. Ces dernières années, la franchise a connu de nombreuses déclinaisons : anime (séries et longs-métrages), concerts, théâtre, manga. Son influence ne cesse de s'étendre. \"Persona\" désigne l'autre personnalité sous-jacente en chacun de nous : un autre \"moi\" qui emprunte les traits d'une divinité ou d'un démon mythique disposant de formidables pouvoirs.",
    aboutP2: '',
    spec: {
      title: 'Persona 5 Royal',
      date: '21 octobre 2022',
      genre: 'RPG',
      players: '1',
      platforms:
        'Xbox Game Pass Xbox Series X|S Xbox One Windows Steam PlayStation®5 Nintendo Switch™',
    },
    characters: {
      joker:
        "Lycéen de deuxième année transféré à la Shujin Academy au printemps. Un jour, face au danger, ses pouvoirs d'utilisateur de Persona se sont éveillés. Le jour, il mène une vie d'élève normal et habite dans un café tenu par un ami de la famille. Après les cours, il devient un Voleur fantôme avec la ville pour terrain de jeu.",
      violet:
        "Une belle jeune fille transférée dans le courant du printemps, comme le protagoniste. La Shujin Academy place beaucoup d'espoirs en cette gymnaste talentueuse qui multiplie les exploits athlétiques depuis le collège.",
      skull:
        "Camarade de classe à la Shujin Academy. Malgré son ton et son comportement un peu grossiers, c'est un garçon attentionné, fiable et plein d'entrain. Après un événement malencontreux, il passe pour un délinquant et il est mis au ban du lycée. C'est en devenant l'ami du protagoniste fraîchement transféré que s'éveillent ses talents d'utilisateur de Persona.",
      mona: "Quand le protagoniste et Ryuji rencontrent ce mystérieux être félin dans le métavers, celui-ci décide de les accompagner. Il est capable de communiquer avec les humains (et de se transformer en divers objets, selon lui), mais bien des choses à son sujet restent auréolées de mystère. Même s'il peut lui arriver d'être agressif, c'est un être extrêmement généreux sur qui ses alliés peuvent compter. Surtout, ne le traitez pas de chat.",
      panther:
        "Lycéenne de deuxième année à la Shujin Academy et camarade de classe du protagoniste, cette jeune fille séduisante fait aussi du mannequinat. Issue d'une famille américano-japonaise, elle est audacieuse et honnête, mais sa singulière apparence a tendance à l'isoler. Ses pouvoirs d'utilisatrice de Persona s'éveillent lors d'un événement fâcheux, peu après s'être liée d'amitié avec le protagoniste.",
      fox: "Élève en deuxième année au lycée Kosei, spécialisé dans la peinture. Son physique attire les regards, mais ses sensibilités artistiques très personnelles sont un obstacle dans ses relations. C'est l'apprenti d'Ichiryusai Madarame, un grand artiste qui l'a recueilli. Par la force des choses, il se lie d'amitié avec le protagoniste et s'éveille en tant qu'utilisateur de Persona.",
      queen:
        "Élève en troisième année à la Shujin Academy. Intelligente et bien élevée, calme et posée, elle est présidente du conseil des élèves. Son sens des responsabilités la pousse toujours à agir, mais elle peut aussi se montrer très bornée. Une série d'événements déclenchent ses pouvoirs d'utilisatrice de Persona avant qu'elle ne se joigne aux Voleurs fantômes. C'est un peu le cerveau de l'équipe.",
      oracle:
        "Cette jeune fille a un an de moins que le protagoniste. C'est une mathématicienne et une programmeuse de génie, mais elle a du mal à communiquer : elle vit cloîtrée, piégée chez elle. Quand elle rencontre le protagoniste, ses capacités d'utilisatrice de Persona s'éveillent.",
      noir: "Élève en troisième année à la Shujin Academy et fille du directeur d'une des plus grandes sociétés alimentaires du pays. On pourrait croire à sa mine gracieuse et docile qu'elle a le chic pour se faire des amis, mais c'est tout le contraire : à cause de l'environnement dans lequel elle a grandi, elle peine à trouver de l'intérêt aux relations personnelles et préfère les éviter. Quel sera le déclic pour éveiller ses capacités d'utilisatrice de Persona ?",
      crow: "Ce lycéen de troisième année est aussi détective professionnel. Il a résolu de nombreuses affaires et suscite le respect même des forces de l'ordre. Très intelligent, sociable et séduisant, il attire d'autant plus les regards qu'il apparaît souvent dans les médias, sous le sobriquet de \"nouveau Prince des détectives\". Bien qu'il soit théoriquement chargé de pourchasser les Voleurs fantômes, il finit par leur prêter main-forte.",
    },
  },
  it: {
    storyP1:
      'Costretto a trasferirsi in un liceo di Tokyo, il protagonista fa uno strano sogno. "Sei davvero un prigioniero del fato. Nel prossimo futuro, la rovina ti attende.',
    storyP2:
      '"Sotto l\'incombente obiettivo della "riabilitazione", dovrà salvare gli altri dai desideri distorti indossando la maschera di un Ladro Fantasma.',
    aboutP1:
      'Persona è una serie di GDR ambientata nel Giappone moderno e acclamata per il suo approccio narrativo che accosta elementi quotidiani, come la nascita di amicizie e relazioni, a tematiche paranormali e soprannaturali, come la scoperta e la risoluzione di enigmi riguardanti leggende metropolitane e misteriose voci di corridoio. La serie tende a seguire delle storie che si sviluppano quando gruppi di adolescenti scoprono le proprie abilità di evocatori di Personae, raccontando la crescita della loro amicizia e del loro io interiore mentre affrontano numerosi ostacoli. Di recente il marchio ha dato vita a serie animate, film di animazione, concerti musicali, spettacoli teatrali, manga e continua a espandere la propria influenza. "Persona" si riferisce alla personalità alternativa che giace dentro di noi. Un altro "io" che si materializza sotto forma di divinità e demoni del mito, dai grandi poteri.',
    aboutP2: '',
    spec: {
      title: 'Persona 5 Royal',
      date: '21 ottobre 2022',
      genre: 'GDR',
      players: '1',
      platforms:
        'Xbox Game Pass Xbox Series X|S Xbox One Windows Steam PlayStation®5 Nintendo Switch™',
    },
    characters: {
      joker:
        'Un liceale del secondo anno arrivato in primavera e trasferitosi alla Shujin Academy. Un giorno, trovandosi con le spalle al muro, i suoi poteri di evocatore di Personae si sono risvegliati. Di giorno vive come un normale studente che alloggia nella caffetteria di un amico di famiglia. Dopo la scuola diventa un Ladro Fantasma che sconvolge la città.',
      violet:
        'Una splendida ragazza trasferitasi alla Shujin Academy nella stessa primavera del protagonista. È una ginnasta di talento fin dalle medie e, per via dei suoi impressionanti risultati atletici, la Shujin Academy ha grandi aspettative nei suoi confronti.',
      skull:
        'Un altro studente del secondo anno presso la Shujin Academy. Anche se parla e agisce in modo brusco, ha un carattere gentile, affidabile e socievole. In seguito a un incidente è stato etichettato come un teppista e gli altri studenti hanno preso le distanze da lui. Dopo aver legato con il protagonista fresco di trasferimento, risveglia i propri poteri di evocatore di Personae.',
      mona: 'Una misteriosa creatura dall\'aspetto simile a un gatto, che il protagonista e Ryuji incontrano nel Metaverso e che poco dopo decide di accompagnarli. Può comunicare con gli umani e dice di potersi trasformare in diversi oggetti, ma molte cose sul suo conto sono avvolte nel mistero. Anche se a volte si comporta in modo aggressivo, è anche molto altruista e supporta i compagni di squadra. Dice spesso: "Non sono un gatto!"',
      panther:
        "Un'altra studentessa del secondo anno presso la Shujin Academy e compagna di classe del protagonista. È una ragazza attraente, americana per un quarto e che lavora come modella. È uno spirito libero e ha un carattere sincero, ma per via dell'aspetto appariscente viene sempre isolata da tutti. Dopo aver fatto amicizia con il protagonista, in seguito a un incidente si risvegliano i suoi poteri di evocatrice di Personae.",
      fox: "Uno studente d'arte del secondo anno presso la Kosei High, specializzato nella pittura. Il suo aspetto affascinante attira l'attenzione, ma la peculiare sensibilità artistica lo fa sembrare spesso fuori dalla realtà. È l'apprendista del maestro artista Ichiryusai Madarame e vive con lui. Dopo una serie di eventi diventa amico del protagonista e risveglia i propri poteri di evocatore di Personae.",
      queen:
        'Una studentessa del terzo anno presso la Shujin Academy. È intelligente, educata e ricopre il ruolo di presidente del corpo studentesco. Calma e controllata, ha un forte senso di responsabilità ed è sempre pronta ad agire, ma il suo carattere schietto la rende spesso ostinata. Una serie di eventi scatena i suoi poteri di evocatrice di Personae prima del suo ingresso nei Ladri Fantasma. È la mente della squadra.',
      oracle:
        'Una ragazza di un anno più piccola del protagonista. Ha una mente matematica eccezionale e un talento prodigioso per la programmazione al computer, ma ha grosse difficoltà con la comunicazione sociale. Vive rinchiusa in casa propria. Un giorno incontra i protagonisti e risveglia i propri poteri di evocatrice di Personae.',
      noir: "Una studentessa del terzo anno presso la Shujin Academy, figlia del presidente di una delle più grandi aziende alimentari del paese. L'aspetto dolce e il carattere mite fanno pensare a una persona in grado di stringere rapporti positivi, ma a causa dell'ambiente in cui è cresciuta, fatica a dare valore alle relazioni solide e spesso tende a evitarle del tutto. Cosa la spingerà a risvegliare i propri poteri di evocatrice di Personae...?",
      crow: "Uno studente del terzo anno, ma anche un detective professionista. Con un record impressionante di casi risolti, è rispettato anche tra gli ufficiali delle forze dell'ordine. L'intelletto acuto, il carattere socievole e l'aspetto attraente attirano l'attenzione di molte persone. Appare spesso in TV con lo slogan \"Il ritorno del Principe Detective\". Pur essendo incaricato di dare la caccia ai Ladri Fantasma, lavorerà al loro fianco.",
    },
  },
  de: {
    storyP1:
      'Als der Protagonist auf eine Highschool in Tokio wechselt, hat er einen seltsamen Traum. „Du bist wahrhaftig dem Schicksal ausgeliefert. In naher Zukunft erwartet dich der Untergang“.',
    storyP2:
      'Mit dem Ziel seiner „Rehabilitierung“ muss er hinter der Maske eines Phantomdiebs andere Menschen von ihren verzerrten Begierden befreien.',
    aboutP1:
      'Persona ist eine RPG-Reihe, die im Japan der Gegenwart spielt und vor allem für die Storys und ihren Erzählstil gefeiert wird. In diesen Storys treffen Alltägliches wie Freundschaften und Romanzen auf übernatürliche Phänomene, die zur Enthüllung von Mysterien und Konfrontation mit verschiedenen Legenden führen. Für gewöhnlich dreht sich die Reihe jeweils um eine Gruppe von Teenagern, die ihre Persona-Kräfte entdecken und im Verlauf der Story zusammenwachsen, indem sie innere Konflikte und äußere Gefahren überwinden. In den letzten Jahren gab es von Persona nicht nur Animeserien, Filme und Mangas, sondern auch Konzerte und Adaptionen für die Theaterbühne, und die Zukunft verspricht noch mehr. Der Begriff „Persona“ bezieht sich auf ein anderes Selbst, das in einem verborgen liegt und sich in Form mythischer Götter und Dämonen mit großer Macht manifestiert.',
    aboutP2: '',
    spec: {
      title: 'Persona 5 Royal',
      date: '21. Oktober 2022',
      genre: 'Rollenspiel',
      players: '1',
      platforms:
        'Xbox Game Pass Xbox Series X|S Xbox One Windows Steam PlayStation®5 Nintendo Switch™',
    },
    characters: {
      joker:
        'Ein Highschool-Schüler im zweiten Jahr, der im Frühling an die Shujin-Akademie wechselt. Als er eines Tages bedroht wird, erwachen seine Persona-Kräfte. Tagsüber führt er ein normales Leben als Schüler, der bei einem Freund der Familie auf dem Dachboden eines Cafés wohnt. Doch nach der Schule versetzt er Tokio mit den Phantomdieben in Aufruhr.',
      violet:
        'Ein wunderschönes Mädchen, das zur gleichen Zeit an die Shujin-Akademie wechselt wie der Protagonist. Da sie seit der Mittelschule eine begabte Turnerin ist, setzt die Shujin-Akademie hohe Hoffnungen in sie als Athletin.',
      skull:
        'Ein extrovertierter Mitschüler des Protagonisten im zweiten Jahr an der Shujin-Akademie. Obwohl er manchmal etwas grob sein kann, hat er ein gutes Herz, auf das immer Verlass ist. Nach einem Vorfall gilt er als schwarzes Schaf, sodass ihn die anderen Schüler meiden. Als er den Protagonisten kennenlernt, erwachen seine Persona-Kräfte.',
      mona: 'Ein katzenartiges Wesen, das sich dem Protagonisten und Ryuji im Meta-Universum anschließt. Zwar bleibt seine Herkunft ein Rätsel, er kann sich jedoch mit Menschen verständigen und zum Beispiel in ein Fahrzeug verwandeln. Trotz aggressiver Anwandlungen unterstützt er seine Teamkameraden auf selbstlose Art und Weise. Morgana legt großen Wert darauf, dass er keine Katze ist!',
      panther:
        'Eine attraktive Klassenkameradin des Protagonisten im zweiten Jahr an der Shujin-Akademie. Sie ist zu einem Viertel Amerikanerin und arbeitet in ihrer Freizeit als Model. Als Freigeist hat sie ein aufrichtiges Wesen und legt viel Wert auf Ehrlichkeit. Da sie durch ihr Äußeres hervorsticht, hat sie in der Schule jedoch kaum Freunde, bis sie den Protagonisten kennenlernt. Als sie in eine Notlage gerät, erwachen auch ihre Persona-Kräfte.',
      fox: 'Ein Schüler im zweiten Jahr an der Kosei-Highschool, der ein angehender Maler ist. Durch sein gutes Aussehen zieht er die Aufmerksamkeit auf sich, da er eine Künstlerseele hat, wirkt er jedoch etwas exzentrisch. Yusuke lebt bei dem angesehenen Maler Ichiryusei Madarame als Lehrling. Durch unvorhergesehene Ereignisse erwachen seine Persona-Kräfte, als er den Protagonisten kennenlernt.',
      queen:
        'Eine Schülerin im dritten Jahr an der Shujin-Akademie. Als Schülerratspräsidentin ist sie äußerst intelligent und legt Wert auf gutes Benehmen. Obwohl sie äußerlich ruhig wirkt, zwingt ihr ausgeprägtes Verantwortungsbewusstsein sie von Zeit zu Zeit zum Handeln. Zudem kann sie äußerst stur sein. Durch eine Verkettung von Ereignissen erwachen auch bei ihr Persona-Kräfte. Sie ist gewissermaßen das Gehirn der Phantomdiebe.',
      oracle:
        'Sie ist ein Jahr jünger als der Protagonist, verfügt jedoch über eine unglaubliche mathematische Begabung, die sie zu einer Art Wunderkind im Programmieren macht. Allerdings ist sie sozial noch etwas unbeholfen und verlässt ihr Zimmer nicht, bis sie eines Tages auf den Protagonisten trifft und auch bei ihr die Persona-Kräfte erwachen.',
      noir: 'Eine Schülerin im dritten Jahr an der Shujin-Akademie und die Tochter des CEOs eines der größten Lebensmittelunternehmen des Landes. Durch ihre sanftmütige Art wirkt sie recht zugänglich, aufgrund ihrer Kindheit fällt es ihr jedoch schwer, anderen nahe zu kommen und Freundschaften zu knüpfen, weshalb sie beides vermeidet. Auch bei ihr wird ein entscheidendes Ereignis dazu führen, dass ihre Persona-Kräfte erwachen.',
      crow: 'Ein Schüler im dritten Jahr und angehender Detektiv, der bereits zahlreiche Fälle gelöst hat und darum bereits auch bei der Polizei schon einen ausgezeichneten Ruf hat. Da er nicht nur einen scharfen Verstand hat, sondern auch umgänglich ist und gut aussieht, erfreut er sich allgemeiner Beliebtheit. Bei seinen Fernsehauftritten wird er als der „neue Detektivprinz“ gefeiert. Obwohl er den Phantomdieben eigentlich das Handwerk legen will, arbeitet er schließlich mit ihnen zusammen.',
    },
  },
  es: {
    storyP1:
      'Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres sin lugar a dudas prisionero del destino. La perdición te aguarda en el futuro".',
    storyP2:
      'Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos.',
    aboutP1:
      'Persona es una serie de juegos de rol ambientada en el Japón actual aclamada por su estilo narrativo de confrontación de realidades cotidianas, como forjar amistades y romances, junto con temas sobrenaturales y paranormales, incluyendo el descubrimiento y la resolución de misteriosos rumores y diversas leyendas urbanas. La serie suele seguir una historia que se desarrolla cuando un grupo de adolescentes descubre sus habilidades como usuarios de Persona, y relata el crecimiento de su amistad y su yo interior mientras se enfrentan a numerosos obstáculos. En los últimos años, la franquicia se ha adaptado en series de televisión animadas, películas de animación, conciertos de música, escenarios teatrales y manga, y sigue ampliando su influencia. "Persona" se refiere a la persona alternativa que se encuentra dentro de ti: otro "tú" que se materializa en forma de deidades míticas y demonios que poseen un gran poder.',
    aboutP2: '',
    spec: {
      title: 'Persona 5 Royal',
      date: '21 de octubre de 2022',
      genre: 'RPG',
      players: '1',
      platforms:
        'Xbox Game Pass Xbox Series X|S Xbox One Windows Steam PlayStation®5 Nintendo Switch™',
    },
    characters: {
      joker:
        'Un estudiante de segundo año de secundariaque se mudó en primavera y se cambió al InstitutoShujin. Un día, cuando estaba conla espalda apoyada contra la pared, se despiertan sus poderes como usuario de Persona. Durante eldía es un estudiante normal que está de inquilinoen una cafetería propiedad de un amigode la familia. Al salir de clase se convierte en unLadrón Fantasma que asalta la ciudad.',
      violet:
        'Una chica muy guapa que se cambia al Instituto Shujin la misma primavera que el protagonista. Es una gimnasta de mucho talento desde la secundaria, y el instituto tiene grandes esperanzas puestas en ella debido a sus excelentes logros deportivos.',
      skull:
        'Un compañero de segundo año del Instituto Shujin. Aunque hable y actúe con cierta rudeza, tiene una personalidad bondadosa, fiable y extravertida. Debido a un incidente, se le etiqueta como delincuente y sus compañeros comienzan a distanciarse de él. Tras entablar amistad con el protagonista recién trasladado, despierta sus habilidades como usuario de Persona.',
      mona: 'Una misteriosa criatura parecida a un gato que el protagonista y Ryuji encuentran en el Metaverso y que decide acompañarlos poco después. Puede comunicarse con los humanos y afirma ser capaz de transformarse en varios objetos, pero muchas cosas sobre él siguen estando rodeadas de misterio. Aunque puede ser agresivo a veces, también es increíblemente desinteresado y apoya a sus compañeros de equipo. A menudo exclama: "¡No soy un gato!".',
      panther:
        'Una estudiante de segundo año del Instituto Shujin y compañera de clase del protagonista. Se trata de una chica atractiva que tiene ascendencia americana y trabaja como modelo. Es de espíritu libre y personalidad honesta, pero debido a su llamativo aspecto, está aislada de todos los que la rodean. Tras entablar amistad con el protagonista, un incidente actúa como catalizador para despertar sus habilidades como usuaria de Persona.',
      fox: 'Estudiante de segundo año de arte en el instituto Kosei, especializado en pintura. Su atractiva apariencia llama la atención, pero su singular sensibilidad artística le lleva a menudo a desentonar con los demás. Es el aprendiz de Ichiryusei Madarame, un maestro de la pintura. Un giro de los acontecimientos le lleva a hacerse amigo del protagonista y a despertar sus habilidades como usuario de Persona.',
      queen:
        'Estudiante de tercer año del Instituto Shujin. Es inteligente y educada y presidenta del cuerpo estudiantil. Tranquila y serena, tiene un gran sentido de la responsabilidad y es rápida a la hora de actuar, pero debido a su personalidad directa también puede ser bastante testaruda. Una serie de acontecimientos desencadenan sus poderes como usuaria de Persona antes de unirse a los Ladrones Fantasma. Actúa como el cerebro del equipo.',
      oracle:
        'Una chica un año más joven que el protagonista. Presume de tener un cerebro increíblemente matemático junto con un talento prodigioso para la programación informática, pero tiene dificultades para la comunicación social. Lleva una vida enclaustrada en su propia casa. Un día se encuentra con los protagonistas y despierta sus habilidades como usuaria de Persona.',
      noir: 'Estudiante de tercer año en el Instituto Shujin e hija del director general de una de las mayores empresas alimentarias del país. Su apariencia sumisa y su personalidad dócil la convierten en alguien capaz de mantener vínculos positivos, pero debido al entorno en el que creció, le cuesta entablar relaciones significativas, y a menudo las evita por completo. ¿Qué la llevará a despertar sus habilidades como usuaria de Persona...?',
      crow: 'Un estudiante de tercer año de instituto que también es detective profesional. Con un historial de resolución de numerosos crímenes, cuenta con una reputación respetable incluso entre los agentes de la ley. Su agudo intelecto, personalidad sociable y su buen aspecto atraen la atención de muchos. Aparece con frecuencia en los medios de comunicación, a menudo promocionado como "La segunda llegada del Príncipe Detective". Aunque oficialmente se encarga de perseguir a los Ladrones Fantasma, al final acaba trabajando junto a ellos.',
    },
  },
  ja: {
    storyP1:
      'ある事情で“東京”の高校に転入することになった主人公の少年は、奇妙な夢を見る。 ─お前はまさしく、運命の『囚われ』。 近い将来、その身に破滅が待ち受けている、と。 自身に課せられた『更生』のため、そして、悪しき欲望から人々を救うため、 怪盗となった主人公はたくさんの人々と出会い、絆を結んでゆく。 かけがえのない一年を過ごした後、あなたを待ち受けるものとは……?',
    storyP2: '',
    aboutP1:
      '現代日本の街を舞台に学校生活や友情、恋愛などの 身近な出来事を体験しながら、同時に不可思議な噂や 都市伝説などオカルティックな事件に立ち向かう ジュブナイルRPGシリーズ。 『ペルソナ能力』に目覚めた少年少女たちが出会い、 幾多の困難に抗い、成長していく物語が描かれます。 近年、TVアニメ、劇場版アニメ、武道館での音楽ライブ、 舞台、漫画などさまざまなメディア展開も行われ、 日々拡大を続けています。 表題の『ペルソナ』とは、自分の中に眠る『別人格』が 『伝来の神や悪魔』の姿となって出現したもので、 強大な力を持つ『もうひとりの自分』です。',
    aboutP2: '',
    spec: {
      title: 'ペルソナ５ ザ・ロイヤル',
      date: '好評発売中',
      genre: 'RPG',
      players: '１人',
      platforms:
        'Xbox Series X|S Xbox One Windows PlayStation®5 Nintendo Switch™ Steam ※Xbox Series X|S、Xbox One、 Windows、SteamはDL版のみ',
    },
    characters: {
      joker:
        '本作の主人公。春から上京し、 都会の学校に転入した高校２年生の少年。 ある事件をきっかけに、 ｢ペルソナ｣使いとして覚醒する。 両親の知人宅である場末の喫茶店を住居に、 昼は学生生活、放課後は都会を 騒がせる怪盗として暗躍することに。 初期ペルソナはアルセーヌ。',
      violet:
        '主人公の転入と同じ年の春に 秀尽学園へ入学した美少女。 中学時代から新体操選手として 優秀な成績を収めており、 その将来性を見越し 秀尽学園からも期待されている。',
      skull:
        '主人公と同じく、秀尽学園に通う２年生。 粗暴な言動が目立つが、情に厚く男気溢れる行動派。 ある事件により、学園内でも札付きの”問題児”として 周囲から浮いた存在になる。 転校してきたばかりの主人公と出会い、 ペルソナ能力を覚醒する。',
      mona: '主人公と竜司が異世界のパレスで出会った 黒猫のような謎の存在。 その後、主人公たちと行動を共にすることに。 人語を操り、様々な形状に変身することが その存在の多くは謎に包まれている。 乱暴な口調だが、献身的に怪盗団の仲間たちを支えてくれる。 口癖は「猫じゃねぇ！」',
      panther:
        '秀尽学園の２年生で、主人公のクラスメイト。 アメリカ系クォーターの美少女で、 モデルの仕事もこなす。 天真爛漫で素直な性格だが、 目立つ容姿ゆえ周りに馴染めず孤立している。 主人公と出会い、ある事件をきっかけに ペルソナ能力を覚醒する。',
      fox: '洸星高校の２年生で、 絵画に傾倒する美術コースの特待生。 人目を引く美少年だが、 独特の感性ゆえ浮世離れしたところも。 日本画の大家、斑目画伯の下で 住み込みの門下生として暮らしている。 ある事件をきっかけに主人公たちと出会い、 ペルソナ能力を覚醒する。',
      queen:
        '秀尽学園に通う高校三年生。 頭脳明晰、品行方正で、生徒会長を務めている。 冷静で責任感が強く、行動力もあるが、 生真面目で妥協ができない一面も。 ある事件をきっかけにペルソナ能力を覚醒し、 怪盗団の仲間になる。 怪盗団のブレーンとして活躍する。',
      oracle:
        '主人公より１つ年下の少女。 人間離れした計算能力と 天才的なプログラミングスキルを持つが、 コミュニケーションが極度に苦手なことに加え、 ある事件に巻き込まれ現在家に引きこもっている。 とあるきっかけで主人公たちと出会い、 ペルソナ能力を覚醒する。',
      noir: '秀尽学園の三年生で、大手外食メーカーの社長令嬢。 おっとりとした外見と穏やかで上品な性格から 普段は良好なコミュニケーションが取れるが、 生まれ育った環境の影響か人間関係に価値を見出せず、 深い関わり合いを避けることも。 そんな彼女がペルソナ能力に 目覚めることになるきっかけとは…？',
      crow: '探偵の肩書を持つ高校三年の少年。 これまでも様々な事件を解決に導いており、 捜査機関職員たちも一目置いている。 明晰な頭脳と人当たりのいい性格、 その容姿も相まって注目を集めている。 メディアにも多数出演し、”探偵王子の再来”と呼ばれることも。 怪盗団を追う立場だが、とあるきっかけから 主人公たちと行動を共にすることに。',
    },
  },
  'zh-TW': {
    storyP1:
      '少年主人公因為某個理由轉學到「東京」的高中，同時他也開始做起奇異的夢。 ──你正是命運的「囚徒」。 不遠的將來，你將面臨毀滅。 為了達成自己被賦予的『更生』任務， 也為了將人們從邪惡的慾望中拯救出來， 成為怪盜的主人公與各式各樣的人邂逅，締結了特別的羈絆關係。 度過這寶貴的一年後，等待著你的會是……?',
    storyP2: '',
    aboutP1:
      '『女神異聞錄』為青少年俠盜RPG系列遊戲， 以現代日本都市為舞台，玩家在體驗校園生活、友情、 戀愛等生活小事的同時，須挺身面對不可思議的謠言、 都市傳說等超自然事件。 描寫主角與覺醒「人格面具能力」的少年少女相遇， 並對抗重重困難，逐漸成長的故事。 近年亦將觸角伸至電視動畫、劇場版動畫、武道館Live音樂會、 舞台劇、漫畫等媒體，每天不斷地擴展其魅力。 作品中的「人格面具」指的是沉睡於自身體內的 「另一個人格」化身成「自古以來的神或惡魔」 的樣貌現身的個體，是一種擁有強大力量的 「另一個自己」。',
    aboutP2: '',
    spec: {
      title: '女神異聞錄５ 皇家版',
      date: '好評發售中',
      genre: 'RPG',
      players: '1人',
      platforms:
        'Xbox Series X|S Xbox One Windows PlayStation®5 Nintendo Switch™ Steam ※PlayStation®5/Nintendo Switch™ 以外的平台僅預定販售數位版',
    },
    characters: {
      joker:
        '本作的主角，春天來到東京， 並轉入都市學校就讀的高中二年級生， 因某起事件覺醒成為 「人格面具」使用者。 借住在雙親朋友家經營的咖啡廳，白天當學生， 放學後則化身驚動都市的怪盜， 在幕後大展身手。 初期人格面具是亞森羅蘋。',
      violet:
        '與主人公轉學同年春天進入 秀盡學園就讀的美少女。 從國中就是新體操選手， 且成績優秀，光明的 前途備受學校期待。 初期人格面具是「灰姑娘」。',
      skull:
        '和主人公一樣就讀秀盡學園的二年級生。 言行舉止粗魯，但是個重情重義、有男子氣慨的行動派。 因某起事件而在學校裡被視為「問題學生」， 並遭旁人排擠。 和剛轉學過來的主人公相遇， 覺醒了人格面具的能力。 初期人格面具是「船長基德」。',
      mona: '主人公與龍司在異世界的殿堂裡遇見、 宛如黑貓般的神秘存在。 後來與主人公一行人共同行動。會說人話， 能夠變身成各種模樣，是個充滿許多謎團的存在。 儘管說話口氣粗魯， 卻犧牲奉獻地支持著怪盜團的伙伴們。口頭禪是「我不是貓啦！」。 初期人格面具是「蘇洛」。',
      panther:
        '秀盡學園二年級生，主人公的同班同學。 是個日美混血美少女，平常也擔任模特兒。 個性天真無邪又直率的 她因外貌太過突出，無法融入身邊的社交圈而遭孤立。 和主人公相遇後， 因某起事件而覺醒人格面具的能力。 初期人格面具是「卡門」。',
      fox: '洸星高校二年級生， 是個為繪畫痴狂的美術班推薦生。 雖然是個引人矚目的美少年， 但因感受力獨特而有點不食人間煙火。 寄宿在日本繪畫大師－－斑目畫伯家當門徒， 因為某起事件而和主人公一行人相遇， 並覺醒人格面具的能力。 初期人格面具是「五右衛門」。',
      queen:
        '就讀秀盡學園的高三生， 頭腦清晰、品行端正，目前擔任學生會長。 她冷靜且富責任感，同時兼具行動力， 但也有正經八百、不願妥協的另一面。 因某起事件覺醒了人格面具能力，成為怪盜團的伙伴， 在怪盜團裡以智囊的角色大放異彩。 初期人格面具是「瓊安」。',
      oracle:
        '小主人公一歲的少女。 擁有異於常人的計算能力與天才般的程式編寫技術， 但極度不擅長人際溝通。 因為被捲入某起事件，目前成了整天待在家的繭居族。 在某個契機下與主人公一行人相遇， 覺醒了人格面具能力。 初期人格面具是「死靈之書」。',
      noir: '秀盡學園的三年級生，外食龍頭大廠的社長千金。 擁有溫文儒雅的外貌與穩重高雅的個性， 因此平時與人溝通相當融洽。 但或許是生長環境的緣故，她一直無法在人際關係裡找到價值， 因此有時甚至會避免與人深交。 讓這樣的她覺醒人格面具能力的契機究竟是……？ 初期人格面具是「米萊迪」。',
      crow: '擁有偵探名號的高三少年。 至今已替多起事件找到解決的出口， 連檢調機關的職員也刮目相看。 他清晰的頭腦、待人和善的個性， 搭配那張帥氣的臉蛋引起了眾人的關注。 不但攻佔了各大媒體版面，甚至還有「偵探王子再臨」之稱。 雖為追查怪盜團的一方，但因某種契機而讓他轉而與主人公一行人共同行動。 初期人格面具是「羅賓漢」。',
    },
  },
  ko: {
    storyP1:
      '어떤 사정으로 "도쿄"의 고등학교로 전학하게 된 주인공 소년은 기묘한 꿈을 꾼다. ─너는 바로 운명의 『포로』. 가까운 미래에 자신에게 다가올 파멸의 꿈을. 자신에게 주어진 『갱생』을 위하여, 그리고 악한 욕망으로부터 사람들을 구하기 위해 괴도가 된 주인공은 수많은 사람들과 만나 인연을 맺어간다. 소중한 1년을 지낸 후, 당신을 기다리고 있는 것은...?',
    storyP2: '',
    aboutP1:
      '현대 일본의 거리를 무대로 학교 생활과 우정, 연애 등의 일상적인 사건을 체험하며, 동시에 불가사의한 소문이나 도시 괴담 등 오컬트적 사건을 마주하는 쥬브나일 RPG 시리즈. 『페르소나 능력』에 각성한 소년 소녀들이 만나 수많은 역경에 맞서 성장해 가는 이야기가 그려집니다. 최근 TV 애니메이션과 극장판 애니메이션, 음악 라이브, 연극, 만화 등 다양한 미디어 전개를 통해 나날이 영향력을 확대해 나가고 있습니다. 표제인 『페르소나』란, 자신의 안에 잠든 『다른 인격』이 『전해져 오던 신이나 악마』의 모습으로 나타난 존재로 강력한 힘을 가진 『또 하나의 자신』입니다.',
    aboutP2: '',
    spec: {
      title: '페르소나5 더 로열',
      date: '절찬 판매 중',
      genre: 'RPG',
      players: '1명',
      platforms:
        'Xbox Series X|S Xbox One Windows PlayStation®5 Nintendo Switch™ Steam ※PlayStation®5/Nintendo Switch™ 이외에는 다운로드판 한정으로 발매 예정',
    },
    characters: {
      joker:
        '본작의 주인공. 봄에 상경해서 전학 온 2학년 남자 고등학생. 어떤 사건을 계기로「페르소나」구사자로 각성하게 된다. 부모님의 지인이 사는 골목 카페에 신세를 지며, 낮에는 학교 생활, 방과 후에는 도시를 놀라게 하는 괴도로서 암약하게 된다. 초기 페르소나는 아르센.',
      violet:
        '주인공이 전학 온 같은 해의 봄에 슈진 고교에 입학한 미소녀. 중학교 때부터 신체조 선수로 우수한 성적을 거두고 있으며 슈진 고교에서도 그 장래성을 기대하고 있다. 초기 페르소나는 「상드리용」',
      skull:
        '주인공과 같은 슈진 고등학교에 다니는 2학년생. 불량한 언행이 눈에 띄지만 의리 있는 행동파. 어떤 사건을 계기로 학교 내에서도 "문제아"가 되어 주위 학생들이 거리를 두는 존재이다. 전학 온 주인공과 만나 페르소나 능력을 각성한다. 초기 페르소나는 「캡틴 키드」',
      mona: '주인공과 류지가 이세계 팰리스에서 구해 준 고양이처럼 생긴 정체불명의 존재. 그 뒤로 주인공과 동행하며 함께 살게 된다. 사람처럼 말을 하고 복장뿐 아니라 모습 자체가 변하기도 하는 것 같지만, 그 정체는 베일에 싸여 있다. 입은 험하지만 헌신적으로 괴도단 동료들을 돕는다. 입버릇은 「고양이가 아니라니까!」 초기 페르소나는 「조로」',
      panther:
        '슈진 고등학교 2학년이며, 주인공의 반 친구. 미국계 쿼터 미소녀이며 모델 활동도 하고 있다. 천진난만한 성격이지만 외모가 워낙 눈에 띄어서 다른 학생들과 잘 어울리지 못한다. 주인공과 만난 후 어떤 사건을 계기로 페르소나 능력을 각성한다. 초기 페르소나는 「카르멘」',
      fox: '코세이 고등학교 2학년이며, 그림에 심취하는 미술 특기생. 수려한 외모의 미소년이지만 독특한 감성으로 인해 유별난 인상을 준다. 일본화 대가의 문하생으로 들어가 지내고 있다. 어떤 사건을 계기로 주인공과 만나게 되어 페르소나 능력을 각성한다. 초기 페르소나는 「고에몬」',
      queen:
        '슈진 고등학교 3학년. 학생회장을 맡고 있는 소녀. 명석한 두뇌를 가지고 있으며 품행 방정하다. 냉정하고 침착하며 책임감이 강하고 행동력도 있지만, 사소한 것까지도 타협을 용납하지 않는 일면도 있다. 어떤 사건을 계기로 페르소나 능력을 각성하고 괴도단 멤버가 된다. 괴도단의 브레인으로 활약한다. 초기 페르소나는 「요한나」',
      oracle:
        '주인공보다 1살 어린 소녀. 초인적인 계산 능력과 프로그래밍 스킬을 지니고 있지만, 커뮤니케이션 능력이 극도로 부족하며 어떤 사건에 휘말리게 되어 현재 자기 방에만 틀어박혀 모습을 드러내지 않는다. 어떤 사건을 계기로 주인공과 만나게 되며, 페르소나 능력을 각성한다. 초기 페르소나는 「네크로노미콘」',
      noir: '슈진 고등학교 3학년, 대형 외식 업체의 사장 따님. 차분해 보이는 모습과 온화하고 품위 있는 성격으로 대인 커뮤니케이션 능력은 좋은 편이지만 자라온 환경의 탓인지, 인간관계에서 그 가치를 찾지 못하고 깊게 관여하지도 않는다. 그런 그녀가 페르소나 능력을 각성하게 되는 계기란...? 초기 페르소나는 「밀라디」',
      crow: '탐정이자 고등학교 3학년 학생. 수없이 많은 사건을 해결로 이끌었으며, 조사기관 직원들도 눈여겨보고 있다. 명석한 두뇌와 친근한 성격, 그리고 외모까지 주목을 끌고 있다. 방송에도 다수 출연하여 "탐정 왕자의 재림"이라고 불리기도 했다. 괴도단을 쫓는 입장이지만, 어떤 사건을 계기로 주인공 일행과 행동을 같이하게 된다. 초기 페르소나는 「로빈 후드」',
    },
  },
};
