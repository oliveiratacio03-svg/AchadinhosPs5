/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon + Mercado Livre
 * Setembro - Outubro 2026
 */

const CONFIG = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  siteName: 'PS5 Mês das Crianças',
  siteTagline: 'Curadoria Independente',

  // ─── Links ─────────────────────────────────────────────────────────────────
  amazonTag: 'oliveirat-20',
  defaultAffiliateUrl: 'https://link.amazon/A08766HJb',
  whatsappUrl: 'https://wa.me/5500000000000',
  channelUrl: 'https://t.me/seu-canal-de-ofertas',

  // ─── Datas ─────────────────────────────────────────────────────────────────
  campaignStart: '2026-10-05T00:00:00-03:00',
  campaignEnd: '2026-10-12T23:59:59-03:00',
  priceCheckDate: '28/09/2026',

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
    id: 'featured-ps5-bundle',
    name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
    image: '/images/produtos/ps5-slim-digital-astro-gt7.webp',
    affiliateUrl: 'https://link.amazon/A08766HJb',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    price: 4277.90,
    pixPrice: 4277.90,
    parcelado: '12x R$ 383,38',
    description: 'Dois jogos aclamados inclusos. O Astro Bot foi Jogo do Ano.',
    includes: ['SSD 1TB', '2 jogos aclamados', 'DualSense incluso', 'Design slim + fino']
  },

  // ─── Consoles PS5 ─────────────────────────────────────────────────────────
  consoles: [
    {
      id: 'ps5-slim-digital',
      name: 'PS5 Slim Digital',
      specs: '1TB SSD • Branco',
      image: '/images/produtos/ps5-slim-digital.webp',
      affiliateUrl: 'https://link.amazon/A08766HJb',
      badge: 'Mais compacto',
      bestFor: ['Quem compra jogos na Store', 'Quer economia máxima', 'Prefere design compacto']
    },
    {
      id: 'ps5-slim-leitor',
      name: 'PS5 Slim Com Leitor',
      specs: '1TB SSD • Branco',
      image: '/images/produtos/ps5-slim-leitor.webp',
      affiliateUrl: 'https://link.amazon/A08766HJb',
      badge: 'Jogos físicos',
      bestFor: ['Quem quer jogar físicos', 'Aprecia flexibilidade', 'Pode comprar jogos usados']
    },
    {
      id: 'ps5-pro',
      name: 'PS5 Pro',
      specs: '2TB SSD • Preto',
      image: '/images/produtos/ps5-pro.webp',
      affiliateUrl: 'https://link.amazon/A08766HJb',
      badge: 'Máximo desempenho',
      bestFor: ['Máximo desempenho', '4K 120fps garantido', 'Hardcore gamers', 'Futuro-prova']
    },
    {
      id: 'bundle-gta6',
      name: 'Bundle PS5 Digital + GTA6',
      specs: 'Inclusos: Astro Bot + GT7 + GTA6',
      image: '/images/produtos/bundle-gta6.webp',
      affiliateUrl: 'https://link.amazon/A08766HJb',
      badge: 'MELHOR VALOR',
      bestFor: ['Console + 2 jogos iniciais', 'GTA6 (quhen lançar)', 'Setup completo']
    },
    {
      id: 'bundle-2-controles',
      name: 'Bundle PS5 Leitor + 2 Controles',
      specs: 'Para jogar com amigos',
      image: '/images/produtos/bundle-2-controles.webp',
      affiliateUrl: 'https://link.amazon/A08766HJb',
      badge: null,
      bestFor: ['2 controles inclusos', 'Multijogador local', 'Melhor para famílias']
    }
  ],

  // ─── Comparações ───────────────────────────────────────────────────────────
  comparisons: {
    digitalVsLeitor: {
      digital: {
        name: 'PS5 Digital',
        price: 4277.90,
        pros: ['Mais econômico', 'Design mais compacto', 'Mais leve', 'Perfeito para Store'],
        cons: ['Sem jogos físicos', 'Sem blu-ray', 'Sem mídia física'],
        ideal: ['Criança é digital-first', 'Quer economizar', 'Ama inovação']
      },
      leitor: {
        name: 'PS5 Com Leitor',
        price: 4649.06,
        pros: ['Flexibilidade máxima', 'Compra jogos usados', 'Jogos em físico', 'Resale value alto'],
        cons: ['Um pouco mais caro', 'Leitor pode estragar', 'Menos compacto'],
        ideal: ['Quer máxima liberdade', 'Gosta de física', 'Quer economizar jogos']
      }
    },
    profiles: [
      { id: 'economizar', label: '💰 Quero economizar', product: 'PS5 Slim Digital', price: 4277.90, parcelado: '12x R$ 383,38', desc: 'A entrada perfeita. Astro Bot é Jogo do Ano. Gran Turismo 7 oferece diversão garantida. Ambos com alta replay value.' },
      { id: 'fisicos', label: '🎮 Criança já gama jogos físicos', product: 'PS5 Slim Com Leitor', price: 4649.06, parcelado: '12x R$ 416,62', desc: 'Máxima flexibilidade. Compra jogos usados por metade do preço. Seu filho/filha não sente falta de nada.' },
      { id: 'presente', label: '🎁 Quero dar o melhor', product: 'Bundle (Digital + GTA6)', price: 4727.82, parcelado: '12x R$ 427,16', desc: 'Console + 2 jogos iniciais + GTA6 (quando lançar em nov). Setup completo sem gastar mais.' },
      { id: 'pro', label: '🚀 Máximo poder / Futuro', product: 'PS5 Pro', price: 7399.00, parcelado: '10x R$ 739,90', desc: 'GPU 67% mais potente. 4K 120fps em praticamente tudo. 2TB de SSD. O console mais poderoso da geração.' }
    ]
  },

  // ─── Bundles ──────────────────────────────────────────────────────────────
  bundles: [
    {
      id: 'bundle-astro-gt7',
      name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      image: '/images/produtos/bundle-astro-gt7.webp',
      includes: ['Console 1TB', 'Astro Bot (Jogo do Ano)', 'Gran Turismo 7', 'DualSense'],
      price: 4277.90,
      badge: 'MELHOR CUSTO-BENEFÍCIO',
      affiliateUrl: 'https://link.amazon/A08766HJb'
    },
    {
      id: 'bundle-gta6',
      name: 'PS5 Slim Digital + GTA6 + Astro Bot + GT7',
      image: '/images/produtos/bundle-gta6.webp',
      includes: ['Console 1TB', 'Astro Bot', 'Gran Turismo 7', 'GTA6 (pré-venda)'],
      price: 4727.82,
      badge: 'RECOMENDADO',
      affiliateUrl: 'https://link.amazon/A08766HJb'
    },
    {
      id: 'bundle-pro-completo',
      name: 'PS5 Pro + Headset Pulse 3D + 2 DualSense + GTA6',
      image: '/images/produtos/bundle-pro-completo.webp',
      includes: ['Console Pro 2TB', 'Headset Pulse 3D', '2 Controles extras', 'GTA6 (pré-venda)'],
      price: 8848.70,
      badge: 'SETUP COMPLETO',
      affiliateUrl: 'https://link.amazon/A08766HJb'
    }
  ],

  // ─── Jogos ─────────────────────────────────────────────────────────────────
  games: {
    kids: [
      { id: 'astro-bot', name: 'Astro Bot', rating: 'L', image: '/images/produtos/astro-bot.webp', desc: '⭐ Jogo do Ano 2024' },
      { id: 'ratchet-clank', name: 'Ratchet & Clank', rating: '10', image: '/images/produtos/ratchet-clank.webp', desc: 'Aventura divertida' },
      { id: 'sackboy', name: 'Sackboy: A Big Adventure', rating: 'L', image: '/images/produtos/sackboy.webp', desc: '' },
      { id: 'sonic', name: 'Sonic Superstars', rating: 'L', image: '/images/produtos/sonic-superstars.webp', desc: '' },
      { id: 'minecraft', name: 'Minecraft', rating: 'L', image: '/images/produtos/minecraft.webp', desc: '' }
    ],
    older: [
      { id: 'spiderman-miles', name: 'Spider-Man: Miles Morales', rating: '12', image: '/images/produtos/spiderman-miles.webp', desc: '' },
      { id: 'spiderman-2', name: 'Spider-Man 2', rating: '12', image: '/images/produtos/spiderman-2.webp', desc: 'Dois heróis, dobro da diversão' },
      { id: 'gt7', name: 'Gran Turismo 7', rating: '3', image: '/images/produtos/gran-turismo-7.webp', desc: 'Incluído em bundles' },
      { id: 'sackboy-2', name: 'Sackboy: A Big Adventure', rating: 'L', image: '/images/produtos/sackboy.webp', desc: '' },
      { id: 'horizon-zd', name: 'Horizon Zero Dawn', rating: '12', image: '/images/produtos/horizon-zero-dawn.webp', desc: '' }
    ],
    teens: [
      { id: 'gta6', name: 'GTA 6', rating: '18', image: '/images/produtos/gta-6.webp', desc: '⚠️ SOMENTE MAIORES DE IDADE', isNew: true },
      { id: 'gow-ragnarok', name: 'God of War Ragnarök', rating: '16', image: '/images/produtos/god-of-war-ragnarok.webp', desc: '' },
      { id: 'ff7', name: 'Final Fantasy VII Rebirth', rating: '16', image: '/images/produtos/final-fantasy-7-rebirth.webp', desc: '' },
      { id: 'wolverine', name: "Marvel's Wolverine", rating: '16', image: '/images/produtos/marvels-wolverine.webp', desc: 'Pré-venda' },
      { id: 'tekken8', name: 'Tekken 8', rating: '12', image: '/images/produtos/tekken-8.webp', desc: '' }
    ]
  },

  // ─── Acessórios ───────────────────────────────────────────────────────────
  accessories: [
    { id: 'dualsense-branco', name: 'DualSense Branco', category: 'Controle', image: '/images/produtos/dualsense-branco.webp', desc: 'Feedback háptico + gatilhos adaptativos' },
    { id: 'dualsense-camo', name: 'DualSense Gray Camouflage', category: 'Controle', image: '/images/produtos/dualsense-camo.webp', desc: '' },
    { id: 'base-carregamento', name: 'Base de Carregamento (2 Controles)', category: 'Controle', image: '/images/produtos/base-carregamento.webp', desc: '' },
    { id: 'pulse-3d', name: 'Pulse 3D Headset', category: 'Headset', image: '/images/produtos/pulse-3d.webp', desc: 'Áudio 3D, microfone built-in' },
    { id: 'arctis-nova', name: 'SteelSeries Arctis Nova', category: 'Headset', image: '/images/produtos/arctis-nova.webp', desc: '' },
    { id: 'ssd-1tb', name: 'SSD M.2 1TB', category: 'Armazenamento', image: '/images/produtos/ssd-m2-1tb.webp', desc: 'Expanda seu armazenamento' },
    { id: 'leitor-slim', name: 'Leitor Externo (Slim)', category: 'Armazenamento', image: '/images/produtos/leitor-slim.webp', desc: 'Para versão Digital' }
  ],

  // ─── PS4 ──────────────────────────────────────────────────────────────────
  ps4: [
    { id: 'ps4-slim', name: 'PS4 Slim 1TB', image: '/images/produtos/ps4-slim.webp', desc: '4.000+ jogos disponíveis' },
    { id: 'ps4-slim-2jogos', name: 'PS4 Slim 1TB + 2 Jogos', image: '/images/produtos/ps4-slim-2-jogos.webp', desc: '' }
  ]
};
