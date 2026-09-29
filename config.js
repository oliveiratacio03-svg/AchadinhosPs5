/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon Brasil
 * Setembro - Outubro 2026
 * 
 * Dados oficiais da Amazon fornecidos pelo usuário.
 * ZERO preços no site — apenas CTAs.
 * Curadoria enxuta: 5 consoles, 2 bundles, 3 jogos, 4 acessórios.
 */

const CONFIG = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  siteName: 'PS5 Mês das Crianças',
  siteTagline: 'Curadoria Independente',

  // ─── Links ─────────────────────────────────────────────────────────────────
  AFFILIATE_TAG: 'SEU-TAG-20',
  whatsappUrl: 'https://wa.me/5500000000000',
  channelUrl: 'https://t.me/seu-canal-de-ofertas',

  // ─── Datas ─────────────────────────────────────────────────────────────────
  campaignStart: '2026-10-05T00:00:00-03:00',
  campaignEnd: '2026-10-12T23:59:59-03:00',
  PRICE_DATE: '29/09/2026',

  // ─── Fases ─────────────────────────────────────────────────────────────────
  getPhase() {
    const now = new Date();
    const start = new Date(this.campaignStart);
    const end = new Date(this.campaignEnd);
    if (now < start) return 'pre';
    if (now >= start && now <= end) return 'active';
    return 'ended';
  },
  isPreCampaign() { return this.getPhase() === 'pre'; },
  isCampaignActive() { return this.getPhase() === 'active'; },

  // ─── Alerta de Promoção ───────────────────────────────────────────────────
  promoAlert: {
    title: '🔔 AVISO: Oferta Especial de 80% OFF',
    text: 'De 5 a 11 de OUTUBRO:',
    text2: 'Cupons extras + ofertas exclusivas para quem entra no nosso grupo.',
    text3: 'Vamos anunciar PRIMEIRO lá. Não perca!',
    button: '[ ENTRAR NO GRUPO WHATSAPP ]'
  },

  // ─── Oferta em Destaque ───────────────────────────────────────────────────
  featuredOffer: {
    id: 'featured-ps5-slim-digital-bundle',
    asin: 'B0FPGF9J2J',
    name: 'PS5 Slim Digital 825GB + Astro Bot + Gran Turismo 7',
    image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
    affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J/',
    badge: '⭐ MELHOR CUSTO-BENEFÍCIO',
    specs: '825GB SSD • Digital Slim • Inclui 2 Jogos',
    copy: 'Para quem quer deixar o presente ainda mais completo, esta versão já vem acompanhada de jogos para começar a aproveitar o console.'
  },

  // ─── Consoles PS5 (Curadoria Enxuta — 5 opções) ───────────────────────────
  consoles: [
    {
      id: 'ps5-slim-digital',
      asin: 'B0CQKJN2C6',
      name: 'PS5 Slim Digital',
      capacity: '825 GB',
      type: 'digital',
      games: 0,
      badge: '💰 OPÇÃO ECONÔMICA',
      specs: '825GB SSD • Digital Slim',
      image: 'https://m.media-amazon.com/images/I/51SM5xU-M1L._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-CFI-2014B01X-PlayStation%C2%AE5-Edi%C3%A7%C3%A3o-Digital/dp/B0CQKJN2C6/',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Uma opção prática para quem quer presentear com um dos consoles mais desejados da geração, sem precisar escolher uma versão com leitor de discos.'
    },
    {
      id: 'ps5-slim-digital-bundle',
      asin: 'B0FPGF9J2J',
      name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      capacity: '825 GB',
      type: 'digital',
      games: 2,
      badge: '🎁 PRESENTE COMPLETO',
      specs: '825GB SSD • Digital Slim • Inclui 2 Jogos',
      image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J/',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem quer deixar o presente ainda mais completo, esta versão já vem acompanhada de jogos para começar a aproveitar o console.'
    },
    {
      id: 'ps5-slim-disk',
      asin: 'B0GWNFMG5L',
      name: 'PS5 Slim com Leitor',
      capacity: '1 TB',
      type: 'disc',
      games: 0,
      badge: '💿 MÍDIA FÍSICA',
      specs: '1TB SSD • Versão com Leitor Slim',
      image: 'https://m.media-amazon.com/images/I/51dYyIDySDL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Slim-Controle-Branco-Sony/dp/B0GWNFMG5L/',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem gosta de ter o disco do jogo na estante ou quer a liberdade de comprar jogos usados e emprestar.'
    },
    {
      id: 'ps5-slim-disk-bundle',
      asin: 'B0CKZGY5B6',
      name: 'PS5 Slim com Leitor + Spider-Man 2',
      capacity: '1 TB',
      type: 'disc',
      games: 1,
      badge: '🕷️ BUNDLE EXCLUSIVO',
      specs: '1TB SSD • Com Leitor • Inclui Spider-Man 2',
      image: 'https://m.media-amazon.com/images/I/71rWPpdhwgL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Sony-PlayStation-Slim-1TB-Spider-Man/dp/B0CKZGY5B6/',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Uma opção interessante para quem quer aproveitar o presente para já levar alguns jogos junto.'
    },
    {
      id: 'ps5-pro',
      asin: 'B0DH8J5YGH',
      name: 'PS5 Pro',
      capacity: '2 TB',
      type: 'pro',
      games: 0,
      badge: '🔥 MÁXIMO DESEMPENHO',
      specs: '2TB SSD • Versão Pro',
      image: 'https://m.media-amazon.com/images/I/51dfg52K-cL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-1000046552-Console-PlayStation%C2%AE5-Pro/dp/B0DH8J5YGH/',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Se você está procurando algo mais completo e quer investir em uma versão mais potente, o PS5 Pro é a alternativa para considerar.'
    }
  ],

  // ─── Bundles Especiais (2 opções) ──────────────────────────────────────────
  bundles: [
    {
      id: 'bundle-gta6',
      asin: 'B0H6LVH152',
      name: 'Combo GTA VI + PS5 Slim Digital (Astro Bot + GT7)',
      badge: '🎁 PRESENTE DEFINITIVO',
      specs: 'O combo mais completo com pré-venda do GTA VI',
      image: 'https://m.media-amazon.com/images/I/71j0ScLcfLL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152/',
      cta: 'CONFERIR COMBO'
    },
    {
      id: 'bundle-astro-gt7',
      asin: 'B0F8R9NDXC',
      name: 'PS5 Slim com Leitor + Astro Bot + Gran Turismo 7',
      badge: '🎮 BUNDLE EXCLUSIVO',
      specs: 'Console com leitor + 2 jogos aclamados',
      image: 'https://m.media-amazon.com/images/I/71IkUBtdDGL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Disk-Pacote-Turismo/dp/B0F8R9NDXC/',
      cta: 'VER OFERTA NA AMAZON'
    }
  ],

  // ─── Jogos (Seleção Enxuta — 3 títulos) ─────────────────────────────────────
  games: [
    {
      id: 'spider-man-miles',
      asin: 'B08QV3XK76',
      name: 'Spider-Man: Miles Morales',
      badge: '👶 FAMÍLIA',
      specs: 'Aventura do Homem-Aranha',
      image: 'https://m.media-amazon.com/images/I/81FBIrIvLVL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Marvels-Spider-Man-Miles-Morales-PlayStation/dp/B08QV3XK76/',
      cta: 'VER PREÇO'
    },
    {
      id: 'gran-turismo-7',
      asin: 'B09C4T66X3',
      name: 'Gran Turismo 7',
      badge: '👶 FAMÍLIA',
      specs: 'Simulador de corrida',
      image: 'https://m.media-amazon.com/images/I/61o3TmIqogL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Gran-Turismo-Edi%C3%A7%C3%A3o-Padr%C3%A3o-PlayStation/dp/B09C4T66X3/',
      cta: 'VER PREÇO'
    },
    {
      id: 'gta-6',
      asin: 'B0H6KT2RWH',
      name: 'Grand Theft Auto VI (GTA 6)',
      badge: '🔞 ADULTOS',
      specs: 'O lançamento mais esperado da década',
      image: 'https://m.media-amazon.com/images/I/81o4MCqBv5L._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Grand-Theft-Auto-VI-PlayStation/dp/B0H6KT2RWH/',
      cta: 'VER PREÇO DE HOJE'
    }
  ],

  // ─── Acessórios (Seleção Enxuta — 4 opções) ───────────────────────────────
  accessories: [
    {
      id: 'controle-dualsense',
      asin: 'B088GNW267',
      name: 'Controle DualSense',
      badge: '🎮 ESSENCIAL',
      specs: 'Controle oficial do PS5',
      image: 'https://m.media-amazon.com/images/I/5102Pp-TfHL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Controle-5-DualSense/dp/B088GNW267/',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'base-carregamento',
      asin: 'B09JH4PD8Q',
      name: 'Base de Carregamento DualSense',
      badge: '⚡ PRATICIDADE',
      specs: 'Carregamento rápido para 2 controles',
      image: 'https://m.media-amazon.com/images/I/41y-G-g+dVL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Base-Carregamento-Do-Dualsense-PlayStation/dp/B09JH4PD8Q/',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'headset-pulse-elite',
      asin: 'B0DSWL1FH8',
      name: 'Headset PULSE Elite',
      badge: '🎧 ÁUDIO',
      specs: 'Áudio espacial 3D e cancelamento de ruído',
      image: 'https://m.media-amazon.com/images/I/61dHx9xitSL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Headset-sem-fio-PULSE-EliteTM/dp/B0DSWL1FH8/',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'playstation-portal',
      asin: 'B0CJT5DJ16',
      name: 'PlayStation Portal',
      badge: '📱 PORTÁTIL',
      specs: 'Jogue seus jogos PS5 em qualquer lugar da casa',
      image: 'https://m.media-amazon.com/images/I/61S0ZRxKJFL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Portal-Remote-Player-PS5/dp/B0CJT5DJ16/',
      cta: 'VER NA AMAZON'
    }
  ]
};
