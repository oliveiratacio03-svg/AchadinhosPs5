/**
 * Configuração central — PlayStation Mês das Crianças
 * 
 * Landing page de afiliado Amazon/Mercado Livre
 * Foco: PS5, bundles, jogos e acessórios
 */

const CONFIG = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  siteName: 'PlayStation Mês das Crianças',
  siteTagline: 'Curadoria Independente',

  // ─── Links de afiliado ────────────────────────────────────────────────────
  amazonTag: 'oliveirat-20',
  mercadolivreTag: 'SEU_TAG_MERCADO_LIVRE',
  channelUrl: 'https://t.me/seu-canal-de-ofertas',

  // ─── Datas ─────────────────────────────────────────────────────────────────
  campaignStart: '2026-10-05T00:00:00-03:00',
  campaignEnd: '2026-10-12T23:59:59-03:00',
  priceCheckDate: '2026-09-28',

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

  // ─── Oferta em destaque ───────────────────────────────────────────────────
  featuredOffer: {
    id: 'featured-ps5-bundle',
    name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
    image: '/images/products/ps5-slim-digital-astro-gt7.webp',
    affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl',
    badge: 'MELHOR PREÇO ENCONTRADO',
    price: null,
    originalPrice: null,
    discount: null
  },

  // ─── Consoles PS5 ─────────────────────────────────────────────────────────
  consoles: [
    {
      id: 'ps5-slim-digital',
      name: 'PS5 Slim Digital',
      image: '/images/products/ps5-edition-digital-825gb.webp',
      amazonPrice: null,
      mercadolivrePrice: null,
      affiliateUrl: 'https://www.amazon.com.br/Sony-PlayStation-Edi%C3%A7%C3%A3o-Digital-Controle/dp/B0GWNKJDCZ?dib=eyJ2IjoiMSJ9.c1P2n-sBpSVWo60U69soAAvZc_MH3zlPhUMrUNdO2QYnPZmkUS-HMRNMjTGGAMwvExqm6bOCGVD_GoxdAy2vstAvZgudlFw6WPjZG2f3Et48-iY55N3YQwngmcqP3nd566gkG8ntTtFJ6OkXT_Pm7sLM06JL8WvbtTckessTY9KSLIrObA842KJ-Kcxnc6H2.jbqD-7bRqtXo5dTc2T-rpZKk5KpPNUjAjTj_-EoujFU&dib_tag=se&keywords=PlayStation+5+Slim+Digital+825GB&qid=1790571365&s=videogames&sr=1-4&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&utm_source=chatgpt.com&linkCode=ll2&tag=oliveirat-20&linkId=d933c412012b78008e901205b5b2017c&ref_=as_li_ss_tl',
      badge: 'DIGITAL',
      description: 'Versão sem leitor de disco. Ideal para jogos digitais.'
    },
    {
      id: 'ps5-slim-leitor',
      name: 'PS5 Slim com Leitor',
      image: '/images/products/ps5-slim-digital-astro-gt7.webp',
      amazonPrice: null,
      mercadolivrePrice: null,
      affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl',
      badge: 'COM LEITOR',
      description: 'Versão com leitor de disco. Permite jogos físicos e usados.'
    },
    {
      id: 'ps5-pro',
      name: 'PS5 Pro',
      image: '/images/products/ps5-slim-digital-astro-gt7.webp',
      amazonPrice: null,
      mercadolivrePrice: null,
      affiliateUrl: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=oliveirat-20',
      badge: 'PRO',
      description: 'Versão mais poderosa. GPU avançada e SSD de 2TB.'
    }
  ],

  // ─── Comparações ───────────────────────────────────────────────────────────
  comparisons: {
    digitalVsLeitor: {
      digital: {
        name: 'PS5 Digital',
        price: null,
        advantages: ['Mais barato', 'Mais compacto', 'Silencioso'],
        disadvantages: ['Sem jogos físicos', 'Sem revenda', 'Preço digital alto'],
        games: 'Apenas jogos digitais'
      },
      leitor: {
        name: 'PS5 com Leitor',
        price: null,
        advantages: ['Jogos físicos', 'Pode revender', 'Jogos usados mais baratos', 'Blu-ray'],
        disadvantages: ['Mais caro', 'Maio', 'Faz barulho'],
        games: 'Todos os jogos'
      }
    },
    profiles: [
      { id: 'economizar', label: 'Quero economizar', product: 'PS5 Digital', price: null },
      { id: 'fisicos', label: 'Prefiro jogos físicos', product: 'PS5 com Leitor', price: null },
      { id: 'presente', label: 'Quero dar de presente', product: 'PS5 + 2 Jogos', price: null },
      { id: 'desempenho', label: 'Máximo desempenho', product: 'PS5 Pro', price: null }
    ]
  },

  // ─── Bundles ──────────────────────────────────────────────────────────────
  bundles: [
    {
      id: 'bundle-astro-gt7',
      name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      image: '/images/products/ps5-slim-digital-astro-gt7.webp',
      includes: ['Console PS5 Slim Digital', 'Jogo Astro Bot', 'Jogo Gran Turismo 7'],
      price: null,
      affiliateUrl: 'https://www.amazon.com.br/gp/aw/d/B0FPGF9J2J?pd_rd_plhdr=t&hsa_cr_id=0&qid=1790564133&sr=1-1-fec03104-6f11-4242-8f79-15fae2896f66&i=videogames&aref=qSZduTclaX&_encoding=UTF8&pd_rd_w=tFqrJ&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=TAQVHZKYWT6QHM5YFQNW&pd_rd_wg=VS3Sm&pd_rd_r=12b7f119-fa2a-40b2-ab4f-e563cf9b5580&linkCode=ll2&tag=oliveirat-20&linkId=34d01548720932fd7f15f7a07b5dd1e6&ref_=as_li_ss_tl'
    },
    {
      id: 'bundle-gta6',
      name: 'Bundle GTA VI + PS5 Slim Digital',
      image: '/images/products/bundle-gta6-ps5-slim-digital.webp',
      includes: ['Console PS5 Slim Digital', 'Jogo GTA VI', 'Jogo Astro Bot', 'Jogo Gran Turismo 7'],
      price: null,
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152?dib=eyJ2IjoiMSJ9.AEB0uzujtV1-21Nt0m-SxhnjkLeew8H1SNdKtJCsPD7GjHj071QN20LucGBJIEps.6x9FqE20OtN6pVlvg0hQtFMqfp2cWxQmjslJXFj4Qjw&dib_tag=se&keywords=PlayStation+5+Slim+Digital+825GB+ASTRO+BOT+Gran+Turismo+7&qid=1790571280&s=videogames&sr=1-3&utm_source=chatgpt.com&linkCode=ll2&tag=oliveirat-20&linkId=ee4793671760295add1fbd564fa92526&ref_=as_li_ss_tl'
    }
  ],

  // ─── Jogos por faixa etária ────────────────────────────────────────────────
  games: {
    kids: [
      { id: 'astro-playroom', name: "Astro's Playroom", rating: 'L', image: null, price: null },
      { id: 'ratchet-clank', name: 'Ratchet & Clank: Rift Apart', rating: '10', image: null, price: null },
      { id: 'sackboy', name: 'Sackboy: A Big Adventure', rating: 'L', image: null, price: null },
      { id: 'sonic', name: 'Sonic Superstars', rating: 'L', image: null, price: null },
      { id: 'minecraft', name: 'Minecraft', rating: 'L', image: null, price: null }
    ],
    older: [
      { id: 'spiderman-miles', name: 'Spider-Man: Miles Morales', rating: '12', image: null, price: null },
      { id: 'crash', name: 'Crash Bandicoot N. Sane Trilogy', rating: 'L', image: null, price: null },
      { id: 'lego-horizon', name: 'LEGO Horizon Adventures', rating: 'L', image: null, price: null },
      { id: 'horizon-fw', name: 'Horizon Forbidden West', rating: '14', image: null, price: null }
    ],
    teens: [
      { id: 'gt7', name: 'Gran Turismo 7', rating: 'L', image: null, price: null },
      { id: 'ff7', name: 'Final Fantasy VII Rebirth', rating: '14', image: null, price: null },
      { id: 'gow-ragnarok', name: 'God of War Ragnarök', rating: '18', image: null, price: null },
      { id: 'spiderman-2', name: 'Marvel\'s Spider-Man 2', rating: '12', image: null, price: null }
    ]
  },

  // ─── Acessórios ───────────────────────────────────────────────────────────
  accessories: [
    { id: 'dualsense', name: 'DualSense', category: 'Controle', image: null, price: null },
    { id: 'dualsense-edge', name: 'DualSense Edge', category: 'Controle', image: null, price: null },
    { id: 'pulse-elite', name: 'PULSE Elite', category: 'Headset', image: null, price: null },
    { id: 'pulse-explore', name: 'PULSE Explore', category: 'Headset', image: null, price: null },
    { id: 'ssd-1tb', name: 'SSD M.2 1TB', category: 'Armazenamento', image: null, price: null },
    { id: 'ssd-2tb', name: 'SSD M.2 2TB', category: 'Armazenamento', image: null, price: null },
    { id: 'stand', name: 'Suporte Vertical', category: 'Suporte', image: null, price: null },
    { id: 'hdmi', name: 'Cabo HDMI 2.1', category: 'Cabos', image: null, price: null }
  ]
};
