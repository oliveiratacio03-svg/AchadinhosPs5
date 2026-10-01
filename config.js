/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon Brasil
 * Setembro - Outubro 2026
 * 
 * Dados oficiais da Amazon.
 * ZERO preços no site.
 * Somente Amazon.
 */

const CONFIG = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  siteName: 'PS5 Mês das Crianças',
  siteTagline: 'Curadoria Independente',

  // ─── Links ─────────────────────────────────────────────────────────────────
  AFFILIATE_TAG: 'oliveirata-20',
  PRICE_DATE: '30/09/2026',

  // ─── Oferta em Destaque ───────────────────────────────────────────────────
  featuredOffer: {
    id: 'featured-ps5-slim-digital-bundle',
    asin: 'B0FPGF9J2J',
    name: 'PS5 Slim Digital 825GB + Astro Bot + Gran Turismo 7',
    image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
    affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J?&linkCode=ll2&tag=oliveirata-20&linkId=22821174d8ed9d183a9b8b67eba39923&ref_=as_li_ss_tl',
    badge: 'COM JOGOS',
    specs: '825GB SSD • Digital Slim • Inclui 2 Jogos',
    copy: 'Para quem quer deixar o presente ainda mais completo, esta versão já vem acompanhada de jogos para começar a aproveitar o console.'
  },

  // ─── Consoles PS5 (5 opções) ──────────────────────────────────────────────
  consoles: [
    {
      id: 'ps5-slim-digital',
      asin: 'B0CQKJN2C6',
      name: 'PS5 Slim Digital',
      capacity: '825 GB',
      type: 'digital',
      games: 0,
      badge: 'DIGITAL',
      specs: '825GB SSD • Digital Slim',
      benefits: ['Jogos digitais', 'Sem leitor de discos', 'Experiência simples e direta'],
      idealFor: 'Para quem compra jogos pela internet',
      image: 'https://m.media-amazon.com/images/I/51SM5xU-M1L._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-CFI-2014B01X-PlayStation%C2%AE5-Edi%C3%A7%C3%A3o-Digital/dp/B0CQKJN2C6?&linkCode=ll2&tag=oliveirata-20&linkId=de6411715a608441503bd872e95d6061&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Uma opção prática para quem quer presentear com um console de ultima geração.'
    },
    {
      id: 'ps5-slim-digital-bundle',
      asin: 'B0FPGF9J2J',
      name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      capacity: '825 GB',
      type: 'digital',
      games: 2,
      badge: 'COM JOGOS',
      specs: '825GB SSD • Digital Slim • Inclui 2 Jogos',
      benefits: ['Astro Bot incluso', 'Gran Turismo 7 incluso', 'Console completo'],
      idealFor: 'Quem já quer jogar sem precisar comprar jogos depois',
      image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J?&linkCode=ll2&tag=oliveirata-20&linkId=22821174d8ed9d183a9b8b67eba39923&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem quer deixar o presente ainda mais completo, esta versão já vem acompanhada de jogos.'
    },
    {
      id: 'ps5-slim-disk',
      asin: 'B0GWNFMG5L',
      name: 'PS5 Slim com Leitor',
      capacity: '1 TB',
      type: 'disc',
      games: 0,
      badge: 'COM LEITOR',
      specs: '1TB SSD • Com Leitor',
      benefits: ['Jogos físicos e digitais', 'Mais liberdade para comprar', 'Flexibilidade total'],
      idealFor: 'Quem gosta de jogos físicos ou quer ter a opção',
      image: 'https://m.media-amazon.com/images/I/51dYyIDySDL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Slim-Controle-Branco-Sony/dp/B0GWNFMG5L?&linkCode=ll2&tag=oliveirata-20&linkId=937d1b4c591e2784de04b7d3a9c54f10&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem gosta de ter os jogos em mídia física.'
    },
    {
      id: 'ps5-slim-disk-bundle',
      asin: 'B0CKZGY5B6',
      name: 'PS5 Slim com Leitor + Spider-Man 2',
      capacity: '1 TB',
      type: 'disc',
      games: 1,
      badge: 'COM JOGO',
      specs: '1TB SSD • Com Leitor • Inclui Spider-Man 2',
      benefits: ['Spider-Man 2 incluso', 'Mídia física', '1TB de armazenamento'],
      idealFor: 'Quem quer já começar jogando algo épico',
      image: 'https://m.media-amazon.com/images/I/71rWPpdhwgL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Sony-PlayStation-Slim-1TB-Spider-Man/dp/B0CKZGY5B6?&linkCode=ll2&tag=oliveirata-20&linkId=9347ab1f48a6f4d96fc8183f7b2af75b&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem quer aproveitar o presente já levando um jogo junto.'
    },
    {
      id: 'ps5-pro',
      asin: 'B0DH8J5YGH',
      name: 'PS5 Pro',
      capacity: '2 TB',
      type: 'pro',
      games: 0,
      badge: 'PRO',
      specs: '2TB SSD • Versão Pro',
      benefits: ['Modelo mais avançado', '2 TB de armazenamento', 'Recursos gráficos avançados'],
      idealFor: 'Para quem quer o melhor possível da geração',
      image: 'https://m.media-amazon.com/images/I/51dfg52K-cL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-1000046552-Console-PlayStation%C2%AE5-Pro/dp/B0DH8J5YGH?&linkCode=ll2&tag=oliveirata-20&linkId=8c983ca9dde5999db61bb63123a708b1&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Para quem quer investir na verão mais potente disponível.'
    }
  ],

  // ─── Bundles Especiais (2 opções) ──────────────────────────────────────────
  bundles: [
    {
      id: 'bundle-gta6',
      asin: 'B0H6LVH152',
      name: 'Combo GTA VI + PS5 Slim Digital (Astro Bot + GT7)',
      badge: 'PRESENTE DEFINITIVO',
      specs: 'Um presente para toda a família. As crianças aproveitam o PS5, enquanto os adultos podem se divertir com GTA VI. Um combo pensado para todo mundo aproveitar.',
      image: 'https://m.media-amazon.com/images/I/71j0ScLcfLL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152?&linkCode=ll2&tag=oliveirata-20&linkId=7f3e19158426c0b463605ff02ac48d57&ref_=as_li_ss_tl',
      cta: 'CONFERIR COMBO NA AMAZON'
    },
    {
      id: 'bundle-astro-gt7',
      asin: 'B0F8R9NDXC',
      name: 'PS5 Slim com Leitor + Astro Bot + Gran Turismo 7',
      badge: 'COMBO',
      specs: 'Console com leitor + 2 jogos aclamados',
      image: 'https://m.media-amazon.com/images/I/71IkUBtdDGL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Disk-Pacote-Turismo/dp/B0F8R9NDXC?&linkCode=ll2&tag=oliveirata-20&linkId=b51707e40135f55982b499ff8df72295&ref_=as_li_ss_tl',
      cta: 'CONFERIR COMBO NA AMAZON'
    }
  ],

  // ─── Acessórios (4 opções) ─────────────────────────────────────────────────
  accessories: [
    {
      id: 'controle-dualsense',
      asin: 'B088GNW267',
      name: 'DualSense',
      badge: 'ESSENCIAL',
      specs: 'Controle oficial do PS5',
      image: 'https://m.media-amazon.com/images/I/5102Pp-TfHL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Controle-5-DualSense/dp/B088GNW267?&linkCode=ll2&tag=oliveirata-20&linkId=bad418d2d096f4ed95d961f239fa9c59&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'base-carregamento',
      asin: 'B09JH4PD8Q',
      name: 'Base de Carregamento DualSense',
      badge: 'PRÁTICO',
      specs: 'Carregamento rápido para 2 controles',
      image: 'https://m.media-amazon.com/images/I/41y-G-g+dVL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Base-Carregamento-Do-Dualsense-PlayStation/dp/B09JH4PD8Q?&linkCode=ll2&tag=oliveirata-20&linkId=be996d45e52f71b0188123606d73c111&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'headset-pulse-elite',
      asin: 'B0DSWL1FH8',
      name: 'PULSE Elite',
      badge: 'ÁUDIO',
      specs: 'Headset sem fio com áudio espacial 3D',
      image: 'https://m.media-amazon.com/images/I/61dHx9xitSL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Headset-sem-fio-PULSE-EliteTM/dp/B0DSWL1FH8?th=1&linkCode=ll2&tag=oliveirata-20&linkId=db0ee6e0ddec8c381391606e83d2f245&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'playstation-portal',
      asin: 'B0CJT5DJ16',
      name: 'PlayStation Portal',
      badge: 'PORTÁTIL',
      specs: 'Jogue seus jogos PS5 em qualquer lugar da casa',
      image: 'https://m.media-amazon.com/images/I/61S0ZRxKJFL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Portal-Remote-Player-PS5/dp/B0CJT5DJ16?&linkCode=ll2&tag=oliveirata-20&linkId=a576ea9da9193af70ff0cace5e8c80d0&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    }
  ]
};
