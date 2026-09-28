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
    affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl',
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
      affiliateUrl: 'https://www.amazon.com.br/Sony-PlayStation-Edi%C3%A7%C3%A3o-Digital-Controle/dp/B0GWNKJDCZ?dib=eyJ2IjoiMSJ9.c1P2n-sBpSVWo60U69soAAvZc_MH3zlPhUMrUNdO2QYnPZmkUS-HMRNMjTGGAMwvExqm6bOCGVD_GoxdAy2vstAvZgudlFw6WPjZG2f3Et48-iY55N3YQwngmcqP3nd566gkG8ntTtFJ6OkXT_Pm7sLM06JL8WvbtTckessTY9KSLIrObA842KJ-Kcxnc6H2.jbqD-7bRqtXo5dTc2T-rpZKk5KpPNUjAjTj_-EoujFU&dib_tag=se&keywords=PlayStation+5+Slim+Digital+825GB&qid=1790571365&s=videogames&sr=1-4&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&utm_source=chatgpt.com&linkCode=ll2&tag=oliveirat-20&linkId=d933c412012b78008e901205b5b2017c&ref_=as_li_ss_tl',
      badge: 'Mais compacto',
      bestFor: ['Quem compra jogos na Store', 'Quer economia máxima', 'Prefere design compacto']
    },
    {
      id: 'ps5-slim-leitor',
      name: 'PS5 Slim Com Leitor',
      specs: '1TB SSD • Branco',
      image: '/images/produtos/ps5-slim-leitor.webp',
      affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl',
      badge: 'Jogos físicos',
      bestFor: ['Quem quer jogar físicos', 'Aprecia flexibilidade', 'Pode comprar jogos usados']
    },
    {
      id: 'ps5-pro',
      name: 'PS5 Pro',
      specs: '2TB SSD • Preto',
      image: '/images/produtos/ps5-pro.webp',
      affiliateUrl: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=oliveirat-20',
      badge: 'Máximo desempenho',
      bestFor: ['Máximo desempenho', '4K 120fps garantido', 'Hardcore gamers', 'Futuro-prova']
    },
    {
      id: 'bundle-gta6',
      name: 'Bundle PS5 Digital + GTA6',
      specs: 'Inclusos: Astro Bot + GT7 + GTA6',
      image: '/images/produtos/bundle-gta6.webp',
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152?dib=eyJ2IjoiMSJ9.AEB0uzujtV1-21Nt0m-SxhnjkLeew8H1SNdKtJCsPD7GjHj071QN20LucGBJIEps.6x9FqE20OtN6pVlvg0hQtFMqfp2cWxQmjslJXFj4Qjw&dib_tag=se&keywords=PlayStation+5+Slim+Digital+825GB+ASTRO+BOT+Gran+Turismo+7&qid=1790571280&s=videogames&sr=1-3&utm_source=chatgpt.com&linkCode=ll2&tag=oliveirat-20&linkId=ee4793671760295add1fbd564fa92526&ref_=as_li_ss_tl',
      badge: 'MELHOR VALOR',
      bestFor: ['Console + 2 jogos iniciais', 'GTA6 (quhen lançar)', 'Setup completo']
    },
    {
      id: 'bundle-2-controles',
      name: 'Bundle PS5 Leitor + 2 Controles',
      specs: 'Para jogar com amigos',
      image: '/images/produtos/bundle-2-controles.webp',
      affiliateUrl: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=oliveirat-20',
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
      affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl'
    },
    {
      id: 'bundle-gta6',
      name: 'PS5 Slim Digital + GTA6 + Astro Bot + GT7',
      image: '/images/produtos/bundle-gta6.webp',
      includes: ['Console 1TB', 'Astro Bot', 'Gran Turismo 7', 'GTA6 (pré-venda)'],
      price: 4727.82,
      badge: 'RECOMENDADO',
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152?dib=eyJ2IjoiMSJ9.AEB0uzujtV1-21Nt0m-SxhnjkLeew8H1SNdKtJCsPD7GjHj071QN20LucGBJIEps.6x9FqE20OtN6pVlvg0hQtFMqfp2cWxQmjslJXFj4Qjw&dib_tag=se&keywords=PlayStation+5+Slim+Digital+825GB+ASTRO+BOT+Gran+Turismo+7&qid=1790571280&s=videogames&sr=1-3&utm_source=chatgpt.com&linkCode=ll2&tag=oliveirat-20&linkId=ee4793671760295add1fbd564fa92526&ref_=as_li_ss_tl'
    },
    {
      id: 'bundle-pro-completo',
      name: 'PS5 Pro + Headset Pulse 3D + 2 DualSense + GTA6',
      image: '/images/produtos/bundle-pro-completo.webp',
      includes: ['Console Pro 2TB', 'Headset Pulse 3D', '2 Controles extras', 'GTA6 (pré-venda)'],
      price: 8848.70,
      badge: 'SETUP COMPLETO',
      affiliateUrl: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=oliveirat-20'
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
