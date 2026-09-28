/**
 * Configuração central — Curadoria de Ofertas PlayStation
 * 
 * Identidade visual neutra — nome do site ainda não definido.
 * Conceito: Mês das Crianças + PlayStation + presentes + nostalgia + ofertas
 * 
 * Para trocar o link do canal, edite CONFIG.channelUrl.
 * Para ajustar datas, modifique campaignStart/campaignEnd.
 * Para adicionar produtos reais, preencha os arrays com dados válidos.
 * 
 * Estrutura de produto:
 * {
 *   id, name, category, platform?, audience?, ageRating?, ratingSystem?,
 *   description, whyWatch, whoIsItFor, buyingTips,
 *   image?, gallery[],
 *   price?, oldPrice?, discount?,
 *   offers: [{ merchant, price, oldPrice, discount, affiliateUrl, availability, lastChecked }]
 * }
 */

const CONFIG = {
  // ─── Identidade temporária (neutral, sem marca definitiva) ───────────────
  siteName: 'PlaystationOfertas',
  siteTagline: 'Curadoria Independente',

  // ─── URL do canal (troque aqui) ───────────────────────────────────────────
  channelUrl: 'https://t.me/seu-canal-de-ofertas',

  // ─── Período da campanha ──────────────────────────────────────────────────
  campaignStart: '2026-10-05T00:00:00-03:00',
  campaignEnd: '2026-10-11T23:59:59-03:00',

  // ─── Countdown ────────────────────────────────────────────────────────────
  countdownActive: true,
  countdownExpiredMessage: 'A campanha encerrou. Volte em breve!',

  // ─── UTMs ─────────────────────────────────────────────────────────────────
  utmParams: {
    source: 'landing',
    medium: 'organic',
    campaign: 'playstation-outlets-oct2026'
  },

  // ─── Hero products ────────────────────────────────────────────────────────
  heroProducts: [
    {
      id: 'hero-ps5pro',
      name: 'PS5 Pro',
      category: 'Console',
      badge: 'DESTAQUE'
    },
    {
      id: 'hero-ps5',
      name: 'PS5',
      category: 'Console',
      badge: 'POPULAR'
    },
    {
      id: 'hero-spiderman',
      name: "Marvel's Spider-Man 2",
      category: 'Jogo',
      badge: 'EXCLUSIVO'
    }
  ],

  // ─── Ofertas em destaque ──────────────────────────────────────────────────
  featuredProducts: [
    {
      id: 'feat-ps5pro',
      name: 'PS5 Pro',
      category: 'Console',
      description: 'O console mais poderoso da Sony, com GPU avançada e SSD de 2TB.',
      whyWatch: 'Para quem quer o máximo de desempenho e gráficos mais fluidos.',
      whoIsItFor: 'Quem já tem PS4 e quer dar o salto para a próxima geração, ou quem busca o melhor setup possível.',
      buyingTips: 'Verifique a versão, armazenamento incluído e se o bundle atende ao que você procura.',
      badge: 'TOPO DE LINHA'
    },
    {
      id: 'feat-ps5digital',
      name: 'PS5 Edição Digital',
      category: 'Console',
      description: 'Versão sem leitor de disco do PS5. Mais compacto e com preço geralmente menor.',
      whyWatch: 'Ideal para quem já tem biblioteca digital e não precisa de mídia física.',
      whoIsItFor: 'Quem prefere comprar jogos digitais e quer um console mais acessível.',
      buyingTips: 'Compare o preço com a versão com leitor. Avalie se a diferença compensa para o seu perfil.',
      badge: 'DIGITAL'
    },
    {
      id: 'feat-dualsenseedge',
      name: 'DualSense Edge',
      category: 'Controle',
      description: 'Controle premium para PS5 com hastes trocáveis e botões traseiros.',
      whyWatch: 'Personalização avançada e build quality superior ao DualSense padrão.',
      whoIsItFor: 'Jogadores competitivos, streamers ou quem quer um segundo controle de alta qualidade.',
      buyingTips: 'Verifique a inclusão de cabo e estojo. A vida útil da bateria pode ser menor que a do DualSense padrão.',
      badge: 'PRO'
    },
    {
      id: 'feat-pulseelite',
      name: 'PULSE Elite',
      category: 'Headset',
      description: 'Headset sem fio premium para PS5 com áudio espacial 3D e cancelamento de ruído.',
      whyWatch: 'Áudio de alta qualidade com tecnologia PlayStation Link para conexão estável.',
      whoIsItFor: 'Quem joga com headset e quer som imersivo sem fios no caminho.',
      buyingTips: 'Teste o conforto em sessões longas. Verifique compatibilidade com outras plataformas se necessário.',
      badge: 'PREMIUM'
    }
  ],

  // ─── Categorias ───────────────────────────────────────────────────────────
  categories: [
    {
      id: 'cat-ps5',
      title: 'PS5',
      description: 'Consoles, versões digitais, bundles e outras oportunidades para quem está pronto para entrar na nova geração.',
      icon: 'console'
    },
    {
      id: 'cat-ps4',
      title: 'PS4',
      description: 'Para quem ainda quer aproveitar uma biblioteca enorme de jogos ou encontrar uma opção mais acessível.',
      icon: 'console'
    },
    {
      id: 'cat-jogos',
      title: 'Jogos',
      description: 'Lançamentos, clássicos, aventuras, exclusivos e jogos para diferentes idades e estilos.',
      icon: 'gamepad'
    },
    {
      id: 'cat-controles',
      title: 'Controles',
      description: 'DualSense, DualShock e outros acessórios para jogar sozinho ou dividir a diversão.',
      icon: 'controller'
    },
    {
      id: 'cat-acessorios',
      title: 'Acessórios',
      description: 'Headsets, carregadores, armazenamento e outros itens para completar o setup.',
      icon: 'headset'
    },
    {
      id: 'cat-especiais',
      title: 'Edições Especiais',
      description: 'Produtos temáticos, colecionáveis e versões que chamam atenção.',
      icon: 'star'
    }
  ],

  // ─── Consoles PS5 ─────────────────────────────────────────────────────────
  consoles: [
    {
      id: 'console-ps5pro',
      name: 'PS5 Pro',
      category: 'Console',
      description: 'GPU aprimorada, SSD de 2TB e suporte a 8K. O PlayStation mais poderoso já criado.',
      whyWatch: 'Se você quer o melhor desempenho possível em jogos PS5, com Ray Tracing mais fluido e carregamento rápido.',
      whoIsItFor: 'Quem já tem um setup premium e quer extrair o máximo de cada jogo. Também para quem está comprando o primeiro console de nova geração e quer ir direto ao topo.',
      buyingTips: 'Compare bundles que incluem jogos ou acessórios. Verifique se a sua TV ou monitor suporta as resoluções que o PS5 Pro consegue entregar.',
      badge: 'TOPO DE LINHA'
    },
    {
      id: 'console-ps5',
      name: 'PS5',
      category: 'Console',
      description: 'O console de nova geração mais vendido. SSD ultrarrápido, jogos em 4K e DualSense revolucionário.',
      whyWatch: 'A combinação de preço, catálogo e desempenho faz do PS5 o console mais recomendado da atual geração.',
      whoIsItFor: 'Quem está entrando agora no ecossistema PlayStation, ou quem quer fazer upgrade do PS4 para a nova geração.',
      buyingTips: 'A versão com leitor de disco permite comprar jogos usados e emprestados. A Edição Digital é mais barata, mas limita você a jogos digitais.',
      badge: 'MAIS POPULAR'
    },
    {
      id: 'console-ps5digital',
      name: 'PS5 Edição Digital',
      category: 'Console',
      description: 'Sem leitor de disco. Mais compacto e geralmente com preço menor que a versão padrão.',
      whyWatch: 'Se você já compra a maioria dos jogos em digital, a Edição Digital pode ser a escolha mais inteligente.',
      whoIsItFor: 'Quem já possui uma boa biblioteca digital e prefere economizar na compra do console.',
      buyingTips: 'Verifique se o preço é realmente inferior à versão com leitor. Em promoções, a diferença pode ser pequena.',
      badge: 'DIGITAL'
    }
  ],

  // ─── Bundles ──────────────────────────────────────────────────────────────
  bundles: [
    {
      id: 'bundle-astrobot',
      name: 'PS5 + ASTRO BOT',
      category: 'Bundle',
      description: 'Console PS5 acompanhado do jogo ASTRO BOT, um dos títulos mais aclamados da geração.',
      whyWatch: 'ASTRO BOT é um jogo que aproveita todos os recursos do DualSense e diverte jogadores de todas as idades.',
      whoIsItFor: 'Famílias e jogadores que querem um console com um jogo divertido para começar.',
      buyingTips: 'Verifique se o bundle inclui o jogo em mídia física ou digital.',
      badge: 'COM JOGO'
    },
    {
      id: 'bundle-gt7',
      name: 'PS5 + Gran Turismo 7',
      category: 'Bundle',
      description: 'Console PS5 com o simulador de corrida mais realista da PlayStation.',
      whyWatch: 'Gran Turismo 7 é um jogo para toda a família, com modos para diferentes idades e níveis de habilidade.',
      whoIsItFor: 'Fãs de corrida e famílias que querem um jogo divertido para jogar juntos.',
      buyingTips: 'Confira se o bundle inclui o jogo completo ou apenas uma versão limitada.',
      badge: 'COM JOGO'
    },
    {
      id: 'bundle-2games',
      name: 'PS5 + 2 Jogos',
      category: 'Bundle',
      description: 'Console PS5 acompanhado de dois jogos à escolha entre títulos populares.',
      whyWatch: 'Ter dois jogos incluídos pode ser mais vantajoso do que comprar os jogos separadamente.',
      whoIsItFor: 'Quem quer começar com uma biblioteca de jogos já montada.',
      buyingTips: 'Verifique quais jogos estão incluídos no bundle e se são títulos que você realmente quer.',
      badge: 'COM 2 JOGOS'
    },
    {
      id: 'bundle-2controls',
      name: 'PS5 + 2 Controles',
      category: 'Bundle',
      description: 'Console PS5 com dois controles DualSense para jogar com amigos e família.',
      whyWatch: 'Ter um segundo controle permite jogar multijogador local sem gastar extra.',
      whoIsItFor: 'Famílias e grupos de amigos que querem jogar juntos no mesmo console.',
      buyingTips: 'Verifique se os controles são novos e se o bundle inclui jogos multijogador.',
      badge: 'COM 2 CONTROLES'
    }
  ],

  // ─── Consoles PS4 ─────────────────────────────────────────────────────────
  ps4Consoles: [
    {
      id: 'ps4-console',
      name: 'PS4',
      category: 'Console',
      description: 'Com um catálogo enorme de jogos e preços mais acessíveis, o PS4 ainda é uma boa porta de entrada.',
      whyWatch: 'O catálogo do PS4 é imenso e muitos jogos continuam sendo vendidos a preços baixos.',
      whoIsItFor: 'Quem quer gastar pouco para ter acesso a centenas de jogos bons.',
      buyingTips: 'Verifique se o console vem com cabo HDMI e controle. O Slim é mais silencioso que o modelo original.',
      badge: 'ACESSÍVEL'
    },
    {
      id: 'ps4-slim',
      name: 'PS4 Slim',
      category: 'Console',
      description: 'Versão mais compacta e silenciosa do PS4. Ideal para quem quer um console discreto.',
      whyWatch: 'O Slim é mais eficiente em energia e mais silencioso que o modelo original.',
      whoIsItFor: 'Quem quer um console compacto para um segundo cômodo ou para levar para diferentes lugares.',
      buyingTips: 'Verifique a capacidade de armazenamento. O Slim está disponível em versões de 500GB e 1TB.',
      badge: 'COMPACTO'
    },
    {
      id: 'ps4-pro',
      name: 'PS4 Pro',
      category: 'Console',
      description: 'Versão mais poderosa do PS4, com suporte a 4K e desempenho aprimorado.',
      whyWatch: 'Se você tem uma TV 4K, o PS4 Pro oferece gráficos mais detalhados e desempenho mais suave.',
      whoIsItFor: 'Quem já tem uma TV 4K e quer aproveitar ao máximo os jogos de PS4.',
      buyingTips: 'Nem todos os jogos têm suporte a 4K no PS4 Pro. Verifique a lista de jogos compatíveis.',
      badge: '4K'
    }
  ],

  // ─── Jogos para crianças e família ─────────────────────────────────────────
  kidsGames: [
    {
      id: 'kids-astrobot',
      name: 'ASTRO BOT',
      category: 'Jogo',
      platform: 'PS5',
      description: 'Aventura colorida e criativa que aproveita todos os recursos do controle DualSense.',
      whyWatch: 'Um dos jogos mais divertidos e criativos da geração. Perfeito para crianças e adultos.',
      whoIsItFor: 'Crianças a partir de 6 anos e famílias que querem jogar juntos.',
      buyingTips: 'O jogo é exclusivo de PS5 e aproveita recursos únicos do DualSense.',
      badge: 'FAMÍLIA',
      audience: 'Crianças',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'kids-minecraft',
      name: 'Minecraft',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'O jogo de construção mais vendido do mundo. Criatividade sem limites para todas as idades.',
      whyWatch: 'Minecraft é um jogo que estimula a criatividade e pode ser jogado por pessoas de todas as idades.',
      whoIsItFor: 'Crianças, adolescentes e adultos que gostam de construir e explorar.',
      buyingTips: 'O jogo está disponível em versão digital e física. Verifique a compatibilidade com outras plataformas.',
      badge: 'CRIATIVO',
      audience: 'Crianças',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'kids-sackboy',
      name: 'Sackboy: Uma Grande Aventura',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'Aventura de plataforma com o personagem Sackboy, cheia de criatividade e charme.',
      whyWatch: 'Um jogo de plataforma divertido e colorido, perfeito para crianças e famílias.',
      whoIsItFor: 'Crianças a partir de 7 anos e fãs de jogos de plataforma.',
      buyingTips: 'O jogo tem modos cooperativos para jogar com amigos e família.',
      badge: 'PLATAFORMA',
      audience: 'Crianças',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'kids-legohorizon',
      name: 'LEGO Horizon Adventures',
      category: 'Jogo',
      platform: 'PS5',
      description: 'Aventura da franquia Horizon em versão LEGO, com humor e ação para toda a família.',
      whyWatch: 'A combinação de Horizon com o universo LEGO resulta em um jogo divertido e acessível.',
      whoIsItFor: 'Crianças a partir de 7 anos e fãs da franquia Horizon.',
      buyingTips: 'O jogo tem modos cooperativos e é uma boa introdução à franquia Horizon.',
      badge: 'FAMÍLIA',
      audience: 'Crianças',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'kids-sonic',
      name: 'Sonic Superstars',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'O ouriço mais rápido do mundo em uma nova aventura de plataforma.',
      whyWatch: 'Um jogo de plataforma clássico que diverte crianças e adultos.',
      whoIsItFor: 'Crianças a partir de 6 anos e fãs de Sonic.',
      buyingTips: 'O jogo tem modos cooperativos para jogar com amigos.',
      badge: 'PLATAFORMA',
      audience: 'Crianças',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'kids-ratchetclank',
      name: 'Ratchet & Clank: Rift Apart',
      category: 'Jogo',
      platform: 'PS5',
      description: 'Aventura interdimensional com gráficos que aproveitam todo o poder do SSD do PS5.',
      whyWatch: 'Um dos jogos mais divertidos e visualmente impressionantes da geração.',
      whoIsItFor: 'Crianças a partir de 10 anos e famílias que querem jogar juntos.',
      buyingTips: 'O jogo é exclusivo de PS5 e tem dificuldade progressiva.',
      badge: 'FAMÍLIA',
      audience: 'Crianças',
      ageRating: '10',
      ratingSystem: 'ClassInd'
    }
  ],

  // ─── Jogos para adolescentes ───────────────────────────────────────────────
  teenGames: [
    {
      id: 'teen-horizonfw',
      name: 'Horizon Forbidden West',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'Aloy explora novas terras em um mundo pós-apocalíptico repleto de máquinas colossais.',
      whyWatch: 'Mundo aberto vasto e detalhado, com mecânicas de caça únicas e uma história envolvente.',
      whoIsItFor: 'Adolescentes que gostam de exploração, ficção científica e protagonistas fortes.',
      buyingTips: 'A versão de PS4 roda muito bem, então não é necessário ter um PS5 para aproveitar o jogo.',
      badge: 'MUNDO ABERTO',
      audience: 'Adolescentes',
      ageRating: '14',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'teen-spiderman2',
      name: "Marvel's Spider-Man 2",
      category: 'Jogo',
      platform: 'PS5',
      description: 'Dois Homens-Aranha jogáveis, mundo expandido e gráficos impressionantes.',
      whyWatch: 'Uma das aventuras mais aclamadas da geração, com jogabilidade fluida e visual deslumbrante.',
      whoIsItFor: 'Adolescentes fãs de super-heróis e de jogos de ação e mundo aberto.',
      buyingTips: 'Confira a classificação indicativa oficial antes de comprar para crianças.',
      badge: 'EXCLUSIVO PS5',
      audience: 'Adolescentes',
      ageRating: '12',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'teen-gt7',
      name: 'Gran Turismo 7',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'O simulador de corrida mais realista da PlayStation.',
      whyWatch: 'Para quem gosta de corrida, o GT7 oferece física detalhada e uma progressão satisfatória.',
      whoIsItFor: 'Adolescentes fãs de carros e corridas.',
      buyingTips: 'O jogo tem elementos de progressão que podem interessar mais a adolescentes e adultos.',
      badge: 'CORRIDA',
      audience: 'Adolescentes',
      ageRating: 'L',
      ratingSystem: 'ClassInd'
    }
  ],

  // ─── Jogos para adultos ────────────────────────────────────────────────────
  adultGames: [
    {
      id: 'adult-gowragnarok',
      name: 'God of War Ragnarök',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'A épica conclusão da jornada de Kratos e Atreus pelos Nove Reinos.',
      whyWatch: 'Narrativa madura e emocional. Um dos jogos mais bem escritos e produzidos da história dos videogames.',
      whoIsItFor: 'Adultos que gostam de histórias profundas e ação visceral.',
      buyingTips: 'Conteúdo violento e temas maduros. Verifique a classificação indicativa antes de presentear.',
      badge: 'ADULTO',
      audience: 'Adultos',
      ageRating: '18',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'adult-returnal',
      name: 'Returnal',
      category: 'Jogo',
      platform: 'PS5',
      description: 'Sci-fi roguelike com atmosfera intensa e jogabilidade desafiadora.',
      whyWatch: 'Uma experiência única que combina terror sci-fi com ação frenética. Cada morte revela mais da história.',
      whoIsItFor: 'Adultos que gostam de desafios e de jogos com narrativa não-linear.',
      buyingTips: 'Não é um jogo para iniciantes. A dificuldade é alta e a progressão pode ser frustrante para alguns jogadores.',
      badge: 'ADULTO',
      audience: 'Adultos',
      ageRating: '16',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'adult-spiderman2',
      name: "Marvel's Spider-Man 2",
      category: 'Jogo',
      platform: 'PS5',
      description: 'Aventura do Homem-Aranha com dois heróis jogáveis e Nova York expandida.',
      whyWatch: 'Uma das melhores adaptações de super-heróis para videogames. Diversão garantida para adultos que cresceram com o personagem.',
      whoIsItFor: 'Adultos fãs do Homem-Aranha e de jogos de ação e mundo aberto.',
      buyingTips: 'O jogo é longo e repleto de atividades. Ideal para quem quer uma experiência duradoura.',
      badge: 'ADULTO',
      audience: 'Adultos',
      ageRating: '12',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'adult-tlou',
      name: 'The Last of Us Part I',
      category: 'Jogo',
      platform: 'PS5',
      description: 'A aclamada história de Joel e Ellie em um mundo pós-apocalíptico.',
      whyWatch: 'Uma das narrativas mais emocionantes e bem produzidas da história dos videogames.',
      whoIsItFor: 'Adultos que gostam de histórias profundas e emocionantes.',
      buyingTips: 'Conteúdo violento e temas maduros. Verifique a classificação indicativa.',
      badge: 'ADULTO',
      audience: 'Adultos',
      ageRating: '18',
      ratingSystem: 'ClassInd'
    },
    {
      id: 'adult-ghost',
      name: 'Ghost of Tsushima',
      category: 'Jogo',
      platform: 'PS5 / PS4',
      description: 'Aventura épica no Japão feudal com combate de samurais e visuais deslumbrantes.',
      whyWatch: 'Um dos jogos mais bonitos da geração, com uma história envolvente e combate satisfatório.',
      whoIsItFor: 'Adultos que gostam de ação, aventura e histórias épicas.',
      buyingTips: 'O jogo tem uma expansão separada (Iki Island) que pode estar incluída em algumas edições.',
      badge: 'ADULTO',
      audience: 'Adultos',
      ageRating: '16',
      ratingSystem: 'ClassInd'
    }
  ],

  // ─── Acessórios ───────────────────────────────────────────────────────────
  accessories: [
    {
      id: 'acc-dualsense',
      name: 'DualSense',
      category: 'Controle',
      description: 'O controle oficial do PS5 com resposta tátil e gatilhos adaptáveis.',
      whyWatch: 'A resposta tátil e os gatilhos adaptáveis são diferenciais que transformam a experiência de jogo.',
      whoIsItFor: 'Qualquer jogador de PS5. Essencial como segundo controle para jogos multijogador local.',
      buyingTips: 'Verifique a cor e a inclusão de carregador. O DualSense carrega via USB-C.',
      badge: 'OFICIAL'
    },
    {
      id: 'acc-dualsenseedge',
      name: 'DualSense Edge',
      category: 'Controle',
      description: 'Versão pro do DualSense com hastes trocáveis, botais traseiros e personalização completa.',
      whyWatch: 'Personalização total para diferentes estilos de jogo. Build quality superior ao controle padrão.',
      whoIsItFor: 'Jogadores competitivos, streamers ou quem quer um controle premium para usar por muitos anos.',
      buyingTips: 'A bateria dura menos que a do DualSense padrão. Considere isso para sessões longas.',
      badge: 'PRO'
    },
    {
      id: 'acc-dualshock4',
      name: 'DualShock 4',
      category: 'Controle',
      description: 'O clássico controle do PS4. Compatível com PS5 (jogos de PS4) e PC.',
      whyWatch: 'Se você ainda tem um PS4 ou joga no PC, o DualShock 4 continua sendo uma ótima opção de controle.',
      whoIsItFor: 'Quem joga no PS4 ou no PC. Também serve como segundo controle para o PS5 em jogos compatíveis.',
      buyingTips: 'Verifique se o controle é novo ou usado. A bateria pode estar desgastada em unidades mais antigas.',
      badge: 'CLÁSSICO'
    },
    {
      id: 'acc-portal',
      name: 'PlayStation Portal',
      category: 'Acessório',
      description: 'Dispositivo para jogar remotamente no PS5 pela rede. Tela LCD de 8 polegadas.',
      whyWatch: 'Permite jogar seus jogos PS5 em qualquer cômodo da casa sem precisar de TV.',
      whoIsItFor: 'Quem tem um PS5 e quer jogar em outro ambiente da casa, ou prefere uma experiência portátil com controle de PS5 integrado.',
      buyingTips: 'O Portal funciona apenas para streaming remoto do PS5. Não roda jogos offline.',
      badge: 'REMOTO'
    },
    {
      id: 'acc-pulseelite',
      name: 'PULSE Elite',
      category: 'Headset',
      description: 'Headset sem fio premium com áudio espacial 3D e cancelamento de ruído.',
      whyWatch: 'Áudio de alta qualidade com tecnologia PlayStation Link para conexão estável e baixa latência.',
      whoIsItFor: 'Quem joga com headset e quer som imersivo sem fios no caminho.',
      buyingTips: 'A bateria dura cerca de 12 horas. Verifique se o conforto é adequado para o seu tipo de cabeça.',
      badge: 'PREMIUM'
    },
    {
      id: 'acc-pulseexplore',
      name: 'PULSE Explore',
      category: 'Headset',
      description: 'Headset sem fio com áudio espacial 3D e dois microfones embutidos.',
      whyWatch: 'Áudio espacial imersivo e microfones de alta qualidade para comunicação em jogos online.',
      whoIsItFor: 'Quem joga online e precisa de comunicação clara, sem gastar tanto quanto no PULSE Elite.',
      buyingTips: 'O PULSE Explore é uma opção intermediária entre o PULSE 3D e o PULSE Elite.',
      badge: 'SEMI-FIO'
    }
  ],

  // ─── Produtos premium ─────────────────────────────────────────────────────
  premiumProducts: [
    {
      id: 'premium-ps5pro',
      name: 'PS5 Pro',
      category: 'Console',
      description: 'O console mais poderoso da Sony, com GPU avançada e SSD de 2TB.',
      whyWatch: 'Se você quer o melhor desempenho possível em jogos PS5, com Ray Tracing mais fluido.',
      whoIsItFor: 'Quem quer o máximo de desempenho e gráficos mais fluidos.',
      buyingTips: 'Verifique se a sua TV ou monitor suporta as resoluções que o PS5 Pro consegue entregar.',
      badge: 'TOPO DE LINHA'
    },
    {
      id: 'premium-dualsenseedge',
      name: 'DualSense Edge',
      category: 'Controle',
      description: 'Controle premium para PS5 com hastes trocáveis e botões traseiros.',
      whyWatch: 'Personalização avançada e build quality superior ao DualSense padrão.',
      whoIsItFor: 'Jogadores competitivos, streamers ou quem quer um controle premium.',
      buyingTips: 'A bateria dura menos que a do DualSense padrão. Considere isso para sessões longas.',
      badge: 'PRO'
    },
    {
      id: 'premium-portal',
      name: 'PlayStation Portal',
      category: 'Acessório',
      description: 'Dispositivo para jogar remotamente no PS5 pela rede.',
      whyWatch: 'Permite jogar seus jogos PS5 em qualquer cômodo da casa sem precisar de TV.',
      whoIsItFor: 'Quem tem um PS5 e quer jogar em outro ambiente da casa.',
      buyingTips: 'O Portal funciona apenas para streaming remoto do PS5. Não roda jogos offline.',
      badge: 'REMOTO'
    },
    {
      id: 'premium-pulseelite',
      name: 'PULSE Elite',
      category: 'Headset',
      description: 'Headset sem fio premium com áudio espacial 3D e cancelamento de ruído.',
      whyWatch: 'Áudio de alta qualidade com tecnologia PlayStation Link para conexão estável.',
      whoIsItFor: 'Quem joga com headset e quer som imersivo sem fios no caminho.',
      buyingTips: 'A bateria dura cerca de 12 horas. Verifique se o conforto é adequado.',
      badge: 'PREMIUM'
    },
    {
      id: 'premium-psvr2',
      name: 'PS VR2',
      category: 'Acessório',
      description: 'Headset de realidade virtual para PS5 com gráficos em 4K e rastreamento avançado.',
      whyWatch: 'A realidade virtual oferece uma experiência completamente diferente dos jogos tradicionais.',
      whoIsItFor: 'Quem quer experimentar jogos em realidade virtual com o PS5.',
      buyingTips: 'O PS VR2 requer um PS5 e espaço suficiente para jogar com segurança.',
      badge: 'VR'
    }
  ],

  // ─── Edições especiais ─────────────────────────────────────────────────────
  specialEditions: [
    {
      id: 'se-ps5pro-30th',
      name: 'PS5 Pro 30th Anniversary',
      category: 'Edição Especial',
      description: 'Edição limitada celebrando 30 anos de PlayStation. Design inspirado no console original de 1994.',
      whyWatch: 'Produto de colecionador com design único. Pode valorizar com o tempo.',
      whoIsItFor: 'Colecionadores e fãs de longa data da marca. Também para quem quer um item único na estante.',
      buyingTips: 'Edições limitadas acabam rápido. Verifique a autenticidade e a garantia antes de comprar.',
      badge: 'LIMITADO'
    },
    {
      id: 'se-dualsense-30th',
      name: 'DualSense 30th Anniversary',
      category: 'Edição Especial',
      description: 'Controle em edição limitada com design retrô nas cores originais do PlayStation.',
      whyWatch: 'Design exclusivo que homenageia o primeiro controle de 1994. Funcionalmente idêntico ao DualSense padrão.',
      whoIsItFor: 'Colecionadores e quem quer um controle com visual diferenciado.',
      buyingTips: 'O preço pode ser significativamente maior que o DualSense padrão. Avalie se o design justifica o investimento.',
      badge: 'LIMITADO'
    }
  ],

  // ─── Ideias de presente ───────────────────────────────────────────────────
  giftIdeas: [
    {
      id: 'gift-console',
      title: 'Para quem quer um console',
      description: 'O presente mais impactante. Ideal para quem está entrando no universo PlayStation ou quer fazer upgrade.',
      icon: 'console'
    },
    {
      id: 'gift-jogo',
      title: 'Para quem gosta de jogos',
      description: 'Um jogo que combina com o gosto da pessoa. Uma forma pessoal e divertida de presentear.',
      icon: 'gamepad'
    },
    {
      id: 'gift-controle',
      title: 'Para quem já tem PS5',
      description: 'Um segundo controle ou uma versão premium como o DualSense Edge.',
      icon: 'controller'
    },
    {
      id: 'gift-headset',
      title: 'Para quem quer melhorar o setup',
      description: 'Um headset de qualidade pode transformar a experiência de jogo.',
      icon: 'headset'
    },
    {
      id: 'gift-edicao',
      title: 'Para colecionadores',
      description: 'Edições especiais e produtos temáticos que se tornam itens únicos.',
      icon: 'star'
    }
  ]
};
