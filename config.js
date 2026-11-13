/**
 * Curadoria Gamer - Configuração Global
 * Afiliado Amazon Brasil e Parceiros Digitais Oficiais
 * 
 * Dados oficiais de parceiros.
 * ZERO preços fixos no site: valores e disponibilidade confirmados na loja.
 */

const CONFIG = {
  // Identidade da marca
  siteName: 'Curadoria Gamer',
  siteTagline: 'Curadoria Independente PlayStation',

  // Links e Parâmetros de Afiliado
  AFFILIATE_TAG: 'oliveirata-20',
  PRICE_DATE: '2026',
  categoryPS5Url: 'https://www.amazon.com.br/s?k=playstation+5&ascsubtag=srctok-5fda3d2ce1464eb7&btn_ref=srctok-5fda3d2ce1464eb7&btn_type=ss&crid=C6Z0YRPFCE0H&sprefix=pla%2Caps%2C322&linkCode=ll2&tag=oliveirata-20&linkId=887f286bc808de2701ee75d876ce2255&ref_=as_li_ss_tl',

  // Oferta em Destaque
  featuredOffer: {
    id: 'featured-ps5-slim-digital-bundle',
    asin: 'B0FPGF9J2J',
    name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
    image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
    affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J?&linkCode=ll2&tag=oliveirata-20&linkId=22821174d8ed9d183a9b8b67eba39923&ref_=as_li_ss_tl',
    badge: 'DESTAQUE',
    specs: 'Edição Digital Slim • 825GB SSD • Inclui Astro Bot e Gran Turismo 7',
    copy: 'Pacote completo para entrar na nova geração com dois dos melhores exclusivos da PlayStation inclusos.'
  },

  // Consoles PS5 em Curadoria
  consoles: [
    {
      id: 'ps5-slim-digital',
      asin: 'B0CQKJN2C6',
      name: 'PS5 Slim Digital',
      capacity: '825 GB',
      type: 'digital',
      games: 0,
      badge: 'DIGITAL',
      specs: '825GB SSD • Edição Digital Slim',
      benefits: ['Jogos 100% digitais via PS Store', 'Design 30% mais compacto', 'Mesmo processamento e velocidade gráfica'],
      idealFor: 'Para quem prioriza compras digitais e economia imediata de espaço no móvel',
      image: 'https://m.media-amazon.com/images/I/51SM5xU-M1L._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-CFI-2014B01X-PlayStation%C2%AE5-Edi%C3%A7%C3%A3o-Digital/dp/B0CQKJN2C6?&linkCode=ll2&tag=oliveirata-20&linkId=de6411715a608441503bd872e95d6061&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'A porta de entrada mais acessível para a geração atual do PlayStation.'
    },
    {
      id: 'ps5-slim-digital-bundle',
      asin: 'B0FPGF9J2J',
      name: 'PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      capacity: '825 GB',
      type: 'digital',
      games: 2,
      badge: 'COMBO DIGITAL',
      specs: '825GB SSD • Edição Digital • Inclui 2 Jogos',
      benefits: ['Astro Bot incluso na embalagem', 'Gran Turismo 7 incluso', 'Excelente custo por jogo'],
      idealFor: 'Para começar a jogar no primeiro minuto sem precisar gastar com jogos extras',
      image: 'https://m.media-amazon.com/images/I/71WCygaQDAL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J?&linkCode=ll2&tag=oliveirata-20&linkId=22821174d8ed9d183a9b8b67eba39923&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Dois grandes sucessos consagrados da Sony reunidos no mesmo pacote.'
    },
    {
      id: 'ps5-slim-disk',
      asin: 'B0GWNFMG5L',
      name: 'PS5 Slim com Leitor',
      capacity: '1 TB',
      type: 'disc',
      games: 0,
      badge: 'COM LEITOR',
      specs: '1TB SSD • Edição com Leitor Ultra HD',
      benefits: ['Lê discos Blu-ray 4K e jogos físicos', 'Compatível com jogos em disco de PS4', 'Liberdade para comprar em qualquer loja'],
      idealFor: 'Para quem tem coleção em disco, gosta de trocar jogos ou caçar promoções no varejo',
      image: 'https://m.media-amazon.com/images/I/51dYyIDySDL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Slim-Controle-Branco-Sony/dp/B0GWNFMG5L?&linkCode=ll2&tag=oliveirata-20&linkId=937d1b4c591e2784de04b7d3a9c54f10&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'A versão mais versátil: compre onde estiver mais barato, seja em mídia física ou digital.'
    },
    {
      id: 'ps5-slim-disk-bundle',
      asin: 'B0CKZGY5B6',
      name: 'PS5 Slim com Leitor + Spider-Man 2',
      capacity: '1 TB',
      type: 'disc',
      games: 1,
      badge: 'COM JOGO',
      specs: '1TB SSD • Com Leitor • Inclui Marvel\'s Spider-Man 2',
      benefits: ['Spider-Man 2 incluso', 'Leitor óptico integrado', '1TB de armazenamento interno'],
      idealFor: 'Para quem busca console completo e uma das maiores narrativas da geração',
      image: 'https://m.media-amazon.com/images/I/71rWPpdhwgL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Sony-PlayStation-Slim-1TB-Spider-Man/dp/B0CKZGY5B6?&linkCode=ll2&tag=oliveirata-20&linkId=9347ab1f48a6f4d96fc8183f7b2af75b&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'Console com leitor de discos acompanhado de uma produção de ponta do PlayStation Studios.'
    },
    {
      id: 'ps5-pro',
      asin: 'B0DH8J5YGH',
      name: 'PS5 Pro',
      capacity: '2 TB',
      type: 'pro',
      games: 0,
      badge: 'PRO',
      specs: '2TB SSD • Edição Pro de Alto Desempenho',
      benefits: ['Upscaling inteligente com IA (PSSR)', 'Ray Tracing avançado com alto framerate', '2TB de SSD interno de fábrica'],
      idealFor: 'Para quem joga em telas 4K 120Hz e exige a melhor taxa de quadros e resolução possíveis',
      image: 'https://m.media-amazon.com/images/I/51dfg52K-cL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-1000046552-Console-PlayStation%C2%AE5-Pro/dp/B0DH8J5YGH?&linkCode=ll2&tag=oliveirata-20&linkId=8c983ca9dde5999db61bb63123a708b1&ref_=as_li_ss_tl',
      cta: 'VER OFERTA NA AMAZON',
      copy: 'A máquina definitiva da Sony para quem não aceita concessões entre fidelidade e 60 FPS.'
    }
  ],

  // Bundles Especiais
  bundles: [
    {
      id: 'bundle-gta6',
      asin: 'B0H6LVH152',
      name: 'Combo PS5 Slim Digital + Astro Bot + Gran Turismo 7',
      badge: 'COMBO',
      specs: 'Pacote oficial com console PS5 Slim e jogos inclusos. Excelente base pronta para os lançamentos mais aguardados da geração.',
      image: 'https://m.media-amazon.com/images/I/71j0ScLcfLL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Bundle-PlayStation-Digital-Pacote-Turismo/dp/B0H6LVH152?&linkCode=ll2&tag=oliveirata-20&linkId=7f3e19158426c0b463605ff02ac48d57&ref_=as_li_ss_tl',
      cta: 'CONSULTAR NA AMAZON'
    },
    {
      id: 'bundle-astro-gt7',
      asin: 'B0F8R9NDXC',
      name: 'PS5 Slim com Leitor + Astro Bot + Gran Turismo 7',
      badge: 'COMBO',
      specs: 'Console completo com leitor óptico e dois dos melhores jogos do PlayStation 5 inclusos na embalagem.',
      image: 'https://m.media-amazon.com/images/I/71IkUBtdDGL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Disk-Pacote-Turismo/dp/B0F8R9NDXC?&linkCode=ll2&tag=oliveirata-20&linkId=b51707e40135f55982b499ff8df72295&ref_=as_li_ss_tl',
      cta: 'CONFERIR COMBO NA AMAZON'
    }
  ],

  // Acessórios Oficiais e Recomendados
  accessories: [
    {
      id: 'controle-dualsense',
      asin: 'B088GNW267',
      name: 'Controle sem Fio DualSense',
      badge: 'ESSENCIAL',
      specs: 'Feedback háptico imersivo, gatilhos adaptáveis dinâmicos e microfone embutido',
      image: 'https://m.media-amazon.com/images/I/5102Pp-TfHL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Controle-5-DualSense/dp/B088GNW267?&linkCode=ll2&tag=oliveirata-20&linkId=bad418d2d096f4ed95d961f239fa9c59&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'base-carregamento',
      asin: 'B09JH4PD8Q',
      name: 'Base de Carregamento Oficial DualSense',
      badge: 'PRÁTICO',
      specs: 'Recarrega 2 controles pela porta de contato inferior, mantendo as portas USB livres',
      image: 'https://m.media-amazon.com/images/I/41y-G-g+dVL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Base-Carregamento-Do-Dualsense-PlayStation/dp/B09JH4PD8Q?&linkCode=ll2&tag=oliveirata-20&linkId=be996d45e52f71b0188123606d73c111&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'headset-pulse-elite',
      asin: 'B0DSWL1FH8',
      name: 'Headset sem Fio PULSE Elite',
      badge: 'ÁUDIO 3D',
      specs: 'Drivers magnéticos planares, PlayStation Link sem perdas e microfone retrátil com IA',
      image: 'https://m.media-amazon.com/images/I/61dHx9xitSL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/Headset-sem-fio-PULSE-EliteTM/dp/B0DSWL1FH8?th=1&linkCode=ll2&tag=oliveirata-20&linkId=db0ee6e0ddec8c381391606e83d2f245&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    },
    {
      id: 'playstation-portal',
      asin: 'B0CJT5DJ16',
      name: 'PlayStation Portal Remote Player',
      badge: 'PORTÁTIL',
      specs: 'Tela LCD de 8 polegadas a 1080p 60fps com todos os recursos táteis do DualSense',
      image: 'https://m.media-amazon.com/images/I/61S0ZRxKJFL._AC_UL320_.jpg',
      affiliateUrl: 'https://www.amazon.com.br/PlayStation-Portal-Remote-Player-PS5/dp/B0CJT5DJ16?&linkCode=ll2&tag=oliveirata-20&linkId=a576ea9da9193af70ff0cace5e8c80d0&ref_=as_li_ss_tl',
      cta: 'VER NA AMAZON'
    }
  ],

  // Parceiros Digitais (Jogos Digitais e Gift Cards)
  digitalPartners: [
    {
      id: 'hype-games-psn',
      store: 'Hype Games',
      badge: 'PARCEIRO OFICIAL',
      name: 'PlayStation Store e Gift Cards via Hype Games',
      tagline: 'Revendedor digital autorizado Level Up no Brasil',
      description: 'Ideal para donos de PS5 Edição Digital e para quem busca recarregar a carteira da PSN ou assinar a PlayStation Plus com praticidade.',
      benefits: [
        'Códigos e chaves oficiais com ativação direta na conta PSN',
        'Pagamento via Pix (com liberação rápida) ou parcelamento no cartão',
        'Flexibilidade para comprar jogos, expansões ou assinar a PS Plus'
      ],
      affiliateUrl: 'https://hype.games/br',
      cta: 'CONSULTAR NA HYPE GAMES'
    },
    {
      id: 'amazon-gift-cards',
      store: 'Amazon Brasil',
      badge: 'CÓDIGO DIGITAL',
      name: 'Cartões Virtuais PlayStation na Amazon',
      tagline: 'Créditos digitais oficiais com envio rápido por e-mail',
      description: 'Opção direta para presentear ou adicionar saldo à sua conta PlayStation sem precisar cadastrar cartão de crédito no console.',
      benefits: [
        'Valores variados para recarga pontual de saldo',
        'Envio imediato do código de resgate por e-mail',
        'Compatível com contas da PlayStation Store Brasil'
      ],
      affiliateUrl: 'https://www.amazon.com.br/s?k=cartao+playstation+gift+card&tag=oliveirata-20&linkCode=ll2&ref_=as_li_ss_tl',
      cta: 'CONSULTAR NA AMAZON'
    }
  ]
};