/**
 * Componentes reutilizáveis e lógica principal.
 * Identidade neutra — nome do site ainda não definido.
 * Conceito: Mês das Crianças + PlayStation + presentes + nostalgia + ofertas
 */

// ─── Ícones SVG inline ───────────────────────────────────────────────────────

const Icons = {
  arrowRight: `<svg class="cta-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  console: `<svg class="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/></svg>`,
  gamepad: `<svg class="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z"/></svg>`,
  controller: `<svg class="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z"/></svg>`,
  headset: `<svg class="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm18 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z"/><path d="M3 14v-2a9 9 0 0 1 18 0v2"/></svg>`,
  star: `<svg class="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  gift: `<svg class="gift-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  users: `<svg class="audience-badge__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  shield: `<svg class="rating-badge__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  tag: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/><path d="M5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15z"/></svg>`,
  heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  package: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4L7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  vr: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-2 3h-6l-2-3H4a2 2 0 0 1-2-2V8z"/></svg>`,
  sparkle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/></svg>`
};

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <div class="header__logo">${CONFIG.siteName.replace('Ofertas', '')}<span>Ofertas</span></div>
        <span class="header__badge">${CONFIG.siteTagline}</span>
      </div>
    </header>`;
}

// ─── CTA Buttons ────────────────────────────────────────────────────────────

function ChannelCTA(text, source, size = '', variant = 'primary') {
  const sizeClass = size === 'large' ? 'cta-button--large' : '';
  return `
    <a href="${CONFIG.channelUrl}" class="cta-button cta-button--${variant} ${sizeClass}"
       onclick="Tracking.clickChannel('${source}')" target="_blank" rel="noopener noreferrer">
      ${text} ${Icons.arrowRight}
    </a>`;
}

function AnchorButton(text, targetId, source, size = '') {
  const sizeClass = size === 'large' ? 'cta-button--large' : '';
  return `
    <a href="#${targetId}" class="cta-button ${sizeClass}"
       onclick="Tracking.clickAnchor('${source}')">
      ${text} ${Icons.arrowRight}
    </a>`;
}

function AffiliateButton(product, text = 'VER OFERTA') {
  const hasUrl = product.affiliateUrl && product.affiliateUrl.trim() !== '';
  const url = hasUrl ? product.affiliateUrl : '#';
  return `
    <a href="${url}" class="affiliate-button"
       onclick="Tracking.clickAffiliate('${product.id}', '${product.name.replace(/'/g, "\\'")}', '${product.affiliateNetwork || 'unknown'}')"
       ${hasUrl ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" style="opacity:0.5;cursor:not-allowed;"'}
       ${!hasUrl ? 'onclick="return false;"' : ''}>
      ${text} ${Icons.arrowRight}
    </a>`;
}

// ─── Badges ─────────────────────────────────────────────────────────────────

function OfferBadge(text, variant = 'default') {
  return `<span class="offer-badge offer-badge--${variant}">${text}</span>`;
}

function AudienceBadge(audience) {
  const labels = { 'Crianças': 'CRIANÇAS', 'Adolescentes': 'ADOLESCENTES', 'Adultos': 'ADULTOS', 'Família': 'FAMÍLIA' };
  return `<span class="audience-badge">${Icons.users} ${labels[audience] || audience}</span>`;
}

function RatingBadge(age, system) {
  if (!age) return '';
  return `<span class="rating-badge">${Icons.shield} ${age} ${system || 'ClassInd'}</span>`;
}

// ─── Product Image Placeholder ───────────────────────────────────────────────

function ProductImagePlaceholder(name) {
  return `<div class="product-card__image-placeholder" role="img" aria-label="${name}"><span>${name}</span></div>`;
}

// ─── Product Card ────────────────────────────────────────────────────────────

function ProductCard(product) {
  const hasImage = product.image && product.image.trim() !== '';
  const hasPrice = product.price !== null && product.price !== undefined;
  const hasOldPrice = product.oldPrice !== null && product.oldPrice !== undefined;
  const hasDiscount = product.discount !== null && product.discount !== undefined;
  const hasEditorial = product.whyWatch || product.whoIsItFor || product.buyingTips;

  const imageHtml = hasImage
    ? `<img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy">`
    : ProductImagePlaceholder(product.name);

  const priceHtml = hasPrice ? `
    <div class="product-card__pricing">
      ${hasOldPrice ? `<span class="product-card__old-price">R$ ${product.oldPrice.toLocaleString('pt-BR')}</span>` : ''}
      <span class="product-card__price">R$ ${product.price.toLocaleString('pt-BR')}</span>
      ${hasDiscount ? `<span class="product-card__discount">-${product.discount}%</span>` : ''}
    </div>` : '';

  const platformHtml = product.platform ? `<span class="product-card__platform">${product.platform}</span>` : '';
  const audienceHtml = product.audience ? AudienceBadge(product.audience) : '';
  const ratingHtml = product.ageRating ? RatingBadge(product.ageRating, product.ratingSystem) : '';

  const editorialHtml = hasEditorial ? `
    <div class="product-card__editorial">
      ${product.whyWatch ? `<p><strong>Por que observar:</strong> ${product.whyWatch}</p>` : ''}
      ${product.whoIsItFor ? `<p><strong>Para quem:</strong> ${product.whoIsItFor}</p>` : ''}
      ${product.buyingTips ? `<p><strong>Antes de comprar:</strong> ${product.buyingTips}</p>` : ''}
    </div>` : '';

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__media">
        ${imageHtml}
        ${product.badge ? OfferBadge(product.badge, 'product') : ''}
      </div>
      <div class="product-card__content">
        <div class="product-card__meta">
          <span class="product-card__category">${product.category}</span>
          ${platformHtml}
          ${audienceHtml}
          ${ratingHtml}
        </div>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__description">${product.description}</p>
        ${priceHtml}
        ${editorialHtml}
        <div class="product-card__action">
          ${AffiliateButton(product)}
        </div>
      </div>
    </article>`;
}

// ─── Carrossel ───────────────────────────────────────────────────────────────

function ProductCarousel(products, carouselId) {
  const cards = products.map(ProductCard).join('');
  return `
    <div class="carousel" id="${carouselId}">
      <button class="carousel__arrow carousel__arrow--prev" onclick="Carousel.scroll('${carouselId}', -1)" aria-label="Anterior">${Icons.chevronLeft}</button>
      <div class="carousel__track">
        ${cards}
      </div>
      <button class="carousel__arrow carousel__arrow--next" onclick="Carousel.scroll('${carouselId}', 1)" aria-label="Próximo">${Icons.chevronRight}</button>
      <div class="carousel__indicators"></div>
    </div>`;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const heroProductsHtml = CONFIG.heroProducts.map(p => `
    <div class="hero-products__item">
      ${p.badge ? OfferBadge(p.badge, 'hero') : ''}
      <span class="hero-products__name">${p.name}</span>
      <span class="hero-products__category">${p.category}</span>
    </div>`).join('');

  return `
    <section class="hero">
      <div class="container hero__layout">
        <div class="hero__content">
          <span class="hero__eyebrow animate-in">${Icons.sparkle} Mês das Crianças — 5 a 11 de Outubro</span>
          <h1 class="hero__title animate-in animate-in--delay-1">
            ATÉ <span class="highlight">80% OFF</span> EM OFERTAS DE PLAYSTATION
          </h1>
          <p class="hero__subtitle animate-in animate-in--delay-2">
            De 5 a 11 de outubro, vamos acompanhar PS5, PS4, jogos e acessórios em busca das melhores oportunidades para o Dia das Crianças.
          </p>
          <p class="hero__text animate-in animate-in--delay-2">
            Entre no canal e fique atento nessas datas. Vamos fazer uma curadoria especial de PlayStation, jogos, acessórios e produtos que podem virar aquele presente que você estava procurando.
          </p>
          <div class="hero__actions animate-in animate-in--delay-3">
            ${AnchorButton('VER OFERTAS', 'ofertas-destaque', 'hero')}
            ${ChannelCTA('ENTRAR NO CANAL', 'hero', '', 'outline')}
          </div>
        </div>
        <aside class="hero__products animate-in animate-in--delay-2">
          <div class="hero-products">
            <p class="hero-products__label">Em destaque</p>
            ${heroProductsHtml}
          </div>
        </aside>
      </div>
    </section>`;
}

// ─── Countdown ───────────────────────────────────────────────────────────────

function CampaignCountdown() {
  if (!CONFIG.countdownActive) return '';
  const now = new Date();
  const start = new Date(CONFIG.campaignStart);
  const end = new Date(CONFIG.campaignEnd);
  const isExpired = now > end;
  const isBeforeStart = now < start;
  let content = '';
  if (isExpired) {
    content = `<p class="countdown__expired">${CONFIG.countdownExpiredMessage}</p>`;
  } else {
    const target = isBeforeStart ? start : end;
    content = `
      <div class="countdown__timer" id="countdown-timer" data-target="${target.toISOString()}">
        <div class="countdown__unit"><span class="countdown__number" id="cd-days">--</span><span class="countdown__unit-label">Dias</span></div>
        <div class="countdown__unit"><span class="countdown__number" id="cd-hours">--</span><span class="countdown__unit-label">Horas</span></div>
        <div class="countdown__unit"><span class="countdown__number" id="cd-minutes">--</span><span class="countdown__unit-label">Min</span></div>
        <div class="countdown__unit"><span class="countdown__number" id="cd-seconds">--</span><span class="countdown__unit-label">Seg</span></div>
      </div>`;
  }
  return `
    <section class="countdown">
      <div class="container">
        <p class="countdown__label">Período da Campanha</p>
        <h2 class="countdown__dates">5 A 11 DE OUTUBRO</h2>
        <p class="countdown__tagline">Uma semana para ficar de olho</p>
        ${content}
      </div>
    </section>`;
}

// ─── CTA Intermediário ───────────────────────────────────────────────────────

function ChannelCTASection(headline, text, source, buttonText = 'ENTRAR NO CANAL') {
  return `
    <section class="cta-intermediate">
      <div class="container cta-intermediate__content">
        <h3 class="cta-intermediate__title">${headline}</h3>
        <p class="cta-intermediate__text">${text}</p>
        ${ChannelCTA(`${buttonText} →`, source, '', 'primary')}
      </div>
    </section>`;
}

// ─── Ofertas em Destaque ─────────────────────────────────────────────────────

function FeaturedOffersSection() {
  return `
    <section class="section" id="ofertas-destaque">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Ofertas em Destaque</h2>
          <p class="section__subtitle">Separamos as melhores oportunidades de cada categoria para você não precisar procurar em dezenas de páginas.</p>
        </div>
        ${ProductCarousel(CONFIG.featuredProducts, 'carousel-featured')}
      </div>
    </section>`;
}

// ─── Categorias ──────────────────────────────────────────────────────────────

function CategoryCard(category) {
  return `
    <article class="category-card" data-category="${category.id}">
      ${Icons[category.icon] || Icons.star}
      <h3 class="category-card__title">${category.title}</h3>
      <p class="category-card__description">${category.description}</p>
    </article>`;
}

function OfferCategorySection() {
  const cards = CONFIG.categories.map(CategoryCard).join('');
  return `
    <section class="section section--alt" id="categorias">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">O Que Vamos Procurar?</h2>
          <p class="section__subtitle">De consoles a jogos e acessórios, vamos acompanhar diferentes tipos de produtos durante a semana de ofertas.</p>
        </div>
        <div class="categories-grid">${cards}</div>
      </div>
    </section>`;
}

// ─── PS5 ─────────────────────────────────────────────────────────────────────

function PS5Section() {
  return `
    <section class="section" id="ps5">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">PS5 em Destaque</h2>
          <p class="section__subtitle">Para quem está pensando em entrar na nova geração, separamos diferentes versões e bundles para ficar de olho durante a campanha.</p>
        </div>
        ${ProductCarousel(CONFIG.consoles, 'carousel-ps5')}
      </div>
    </section>`;
}

// ─── Bundles ─────────────────────────────────────────────────────────────────

function BundlesSection() {
  return `
    <section class="section section--alt" id="bundles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Já Vem Com Jogo</h2>
          <p class="section__subtitle">Às vezes, a melhor compra não é o console sozinho. Alguns bundles já chegam acompanhados de jogos, controles ou outros itens que podem mudar bastante o custo-benefício do conjunto.</p>
        </div>
        ${ProductCarousel(CONFIG.bundles, 'carousel-bundles')}
      </div>
    </section>`;
}

// ─── PS4 ─────────────────────────────────────────────────────────────────────

function PS4Section() {
  return `
    <section class="section" id="ps4">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">PS4 Ainda Tem Muito Para Oferecer</h2>
          <p class="section__subtitle">Para quem já possui um PS4 ou procura uma opção mais acessível, também vamos acompanhar jogos, controles e oportunidades para a geração anterior.</p>
        </div>
        ${ProductCarousel(CONFIG.ps4Consoles, 'carousel-ps4')}
      </div>
    </section>`;
}

// ─── Jogos para Crianças e Família ────────────────────────────────────────────

function KidsGamesSection() {
  const games = CONFIG.kidsGames;
  if (!games || games.length === 0) return '';
  return `
    <section class="section section--kids" id="jogos-criancas">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Jogos Para Os Pequenos</h2>
          <p class="section__subtitle">Aventuras, criatividade e diversão para diferentes idades.</p>
        </div>
        ${ProductCarousel(games, 'carousel-kids')}
      </div>
    </section>`;
}

// ─── Jogos para Adolescentes ──────────────────────────────────────────────────

function TeenGamesSection() {
  const games = CONFIG.teenGames;
  if (!games || games.length === 0) return '';
  return `
    <section class="section section--alt" id="jogos-adolescentes">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Jogos Para Adolescentes</h2>
          <p class="section__subtitle">Aventuras, desafios e histórias que conversam com diferentes gostos e estilos.</p>
        </div>
        ${ProductCarousel(games, 'carousel-teens')}
      </div>
    </section>`;
}

// ─── Acessórios ──────────────────────────────────────────────────────────────

function AccessoriesSection() {
  return `
    <section class="section" id="acessorios">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Complete o Setup</h2>
          <p class="section__subtitle">Às vezes, a melhor oportunidade não está no console. Pode estar naquele controle, headset ou acessório que faltava.</p>
        </div>
        ${ProductCarousel(CONFIG.accessories, 'carousel-accessories')}
      </div>
    </section>`;
}

// ─── Premium ─────────────────────────────────────────────────────────────────

function PremiumSection() {
  const products = CONFIG.premiumProducts;
  if (!products || products.length === 0) return '';
  return `
    <section class="section section--premium" id="premium">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Para Quem Quer Um Presente Especial</h2>
          <p class="section__subtitle">Alguns produtos não são apenas uma compra. São aqueles presentes que você lembra por muito tempo.</p>
        </div>
        ${ProductCarousel(products, 'carousel-premium')}
      </div>
    </section>`;
}

// ─── Edições Especiais ───────────────────────────────────────────────────────

function SpecialEditionsSection() {
  const products = CONFIG.specialEditions;
  if (!products || products.length === 0) return '';
  return `
    <section class="section section--special" id="edicoes-especiais">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Para Quem Gosta de Algo Diferente</h2>
          <p class="section__subtitle">Edições especiais, produtos temáticos e versões que chamam atenção também entram na nossa curadoria.</p>
        </div>
        ${ProductCarousel(products, 'carousel-special')}
      </div>
    </section>`;
}

// ─── Criança Interior ────────────────────────────────────────────────────────

function InnerChildSection() {
  const games = CONFIG.adultGames;
  if (!games || games.length === 0) return '';
  return `
    <section class="section section--adult" id="crianca-interior">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">E Quem Disse Que o Presente É Só Para as Crianças?</h2>
          <p class="section__subtitle">Talvez você tenha crescido. Mas algumas coisas continuam fazendo você voltar a ser criança por algumas horas. Aquele console que você queria. Uma franquia que marcou sua adolescência. Um jogo que ficou na lista de desejos. Ou simplesmente algo novo para aproveitar depois de um dia cheio.</p>
        </div>
        <div class="section__banner">
          <h3>PRESENTEIE A SUA CRIANÇA INTERIOR.</h3>
          <p>O Dia das Crianças pode ser uma boa desculpa para lembrar que você também pode comprar algo que queria há muito tempo. Um jogo que marcou uma época. Um console novo. Um controle melhor. Uma edição especial. Porque crescer não significa deixar de gostar daquilo que fazia você se divertir.</p>
        </div>
        ${ProductCarousel(games, 'carousel-adult')}
        <div class="section__cta">
          ${ChannelCTA('EU TAMBÉM MEREÇO →', 'crianca-interior', '', 'primary')}
        </div>
      </div>
    </section>`;
}

// ─── Guia de Presentes ───────────────────────────────────────────────────────

function GiftIdeasSection() {
  const cards = CONFIG.giftIdeas.map(g => `
    <article class="gift-card">
      ${Icons[g.icon] || Icons.gift}
      <h3 class="gift-card__title">${g.title}</h3>
      <p class="gift-card__description">${g.description}</p>
    </article>`).join('');
  return `
    <section class="section section--alt" id="presentes">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Presentes Para o Mês das Crianças</h2>
          <p class="section__subtitle">Do primeiro console ao próximo jogo favorito, a ideia aqui é encontrar presentes que realmente combinem com quem vai receber.</p>
        </div>
        <div class="gift-grid">${cards}</div>
      </div>
    </section>`;
}

// ─── Campanha ────────────────────────────────────────────────────────────────

function CampaignSection() {
  return `
    <section class="section section--campaign" id="campanha">
      <div class="container">
        <div class="campaign-hero">
          <p class="campaign-hero__label">5 a 11 de Outubro</p>
          <h2 class="campaign-hero__title">Fique Atento à Curadoria Especial</h2>
          <p class="campaign-hero__text">Durante esses dias, vamos acompanhar as oportunidades e selecionar ofertas de PlayStation, jogos e acessórios que realmente chamarem atenção.</p>
          <div class="campaign-hero__highlight">ATÉ 80% OFF</div>
          <p class="campaign-hero__complement">Entre no canal e fique atento. As oportunidades serão divulgadas por lá durante a campanha.</p>
          ${ChannelCTA('ENTRAR NO CANAL →', 'campanha', 'large', 'primary')}
        </div>
      </div>
    </section>`;
}

// ─── CTA Final ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return `
    <section class="final-cta">
      <div class="container final-cta__content">
        <h2 class="final-cta__title">Não Deixe Para Procurar Depois.</h2>
        <p class="final-cta__text">
          De 5 a 11 de outubro, vamos acompanhar as oportunidades e selecionar as ofertas que realmente chamarem atenção.
        </p>
        <div class="final-cta__highlight">ATÉ 80% OFF</div>
        <p class="final-cta__complement">Entre no canal e acompanhe as oportunidades.</p>
        ${ChannelCTA('QUERO RECEBER AS OFERTAS →', 'cta-final', 'large', 'primary')}
      </div>
    </section>`;
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return `
    <footer class="footer">
      <div class="container">
        <p class="footer__disclaimer">
          Este site é uma curadoria independente de ofertas e não possui vínculo oficial com a Sony ou PlayStation.
          Todas as ofertas são selecionadas e divulgadas em nosso canal parceiro.
        </p>
        <div class="footer__links">
          <a href="#" class="footer__link">Sobre</a>
          <a href="#" class="footer__link">Contato</a>
          <a href="#" class="footer__link">Privacidade</a>
        </div>
      </div>
    </footer>`;
}

// ─── Carousel Logic ──────────────────────────────────────────────────────────

const Carousel = {
  scroll(id, direction) {
    const carousel = document.getElementById(id);
    if (!carousel) return;
    const track = carousel.querySelector('.carousel__track');
    const cards = track.querySelectorAll('.product-card');
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 24;
    const visibleCards = Math.floor(track.offsetWidth / cardWidth);
    const maxScroll = Math.max(0, cards.length - visibleCards);
    const currentScroll = parseInt(track.dataset.scroll || '0');
    const newScroll = Math.max(0, Math.min(maxScroll, currentScroll + direction));
    track.dataset.scroll = newScroll;
    track.style.transform = `translateX(-${newScroll * cardWidth}px)`;
    this.updateIndicators(id, newScroll, maxScroll);
  },

  updateIndicators(id, current, max) {
    const carousel = document.getElementById(id);
    if (!carousel) return;
    const indicators = carousel.querySelector('.carousel__indicators');
    if (!indicators) return;
    const total = max + 1;
    indicators.innerHTML = Array.from({ length: total }, (_, i) =>
      `<span class="carousel__dot ${i === current ? 'active' : ''}"></span>`
    ).join('');
  },

  init(id) {
    const carousel = document.getElementById(id);
    if (!carousel) return;
    const track = carousel.querySelector('.carousel__track');
    track.dataset.scroll = '0';
    track.style.transition = 'transform 0.3s ease';
    this.updateIndicators(id, 0, Math.max(0, track.querySelectorAll('.product-card').length - 1));
  }
};

// ─── Countdown Logic ─────────────────────────────────────────────────────────

function initCountdown() {
  const timerEl = document.getElementById('countdown-timer');
  if (!timerEl) return;
  const target = new Date(timerEl.dataset.target);
  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      timerEl.innerHTML = `<p class="countdown__expired">${CONFIG.countdownExpiredMessage}</p>`;
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const dEl = document.getElementById('cd-days');
    if (dEl) {
      dEl.textContent = String(days).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
    }
  }
  update();
  setInterval(update, 1000);
}

// ─── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${CampaignCountdown()}
      ${FeaturedOffersSection()}
      ${ChannelCTASection(
        'Você não precisa procurar em todo lugar.',
        'Nós vamos acompanhar diferentes lojas e selecionar as ofertas que realmente fizerem sentido para cada produto. Quando encontrarmos uma oportunidade interessante, você poderá conferir diretamente na loja.',
        'apos-destaque',
        'VER AS OFERTAS'
      )}
      ${OfferCategorySection()}
      ${PS5Section()}
      ${ChannelCTASection(
        'Encontrou o console que estava procurando?',
        'Agora fique atento às próximas oportunidades.',
        'apos-ps5'
      )}
      ${BundlesSection()}
      ${ChannelCTASection(
        'Um bundle pode ser mais vantajoso do que comprar tudo separado.',
        'Fique de olho nas oportunidades de kits e bundles.',
        'apos-bundles'
      )}
      ${PS4Section()}
      ${ChannelCTASection(
        'O PS4 ainda tem muito para oferecer.',
        'Acompanhe também as oportunidades para a geração anterior.',
        'apos-ps4'
      )}
      ${KidsGamesSection()}
      ${ChannelCTASection(
        'Quer encontrar um presente sem ficar procurando por horas?',
        'Nossa curadoria separa os melhores jogos para cada idade.',
        'apos-kids',
        'VER AS OFERTAS'
      )}
      ${TeenGamesSection()}
      ${ChannelCTASection(
        'O próximo desconto pode estar justamente naquele jogo da sua lista.',
        'Fique atento às oportunidades.',
        'apos-teens',
        'RECEBER OFERTAS'
      )}
      ${AccessoriesSection()}
      ${ChannelCTASection(
        'E se aparecer aquela oportunidade que você não estava esperando?',
        'Ela vai para o canal.',
        'apos-acessorios'
      )}
      ${PremiumSection()}
      ${ChannelCTASection(
        'Algumas oportunidades aparecem e desaparecem rápido.',
        'Fique de olho.',
        'apos-premium',
        'FICAR DE OLHO'
      )}
      ${SpecialEditionsSection()}
      ${ChannelCTASection(
        'Quer descobrir edições especiais e produtos temáticos?',
        'Também entram na nossa curadoria e serão divulgados no canal.',
        'apos-edicoes',
        'QUERO DESCOBRIR AS OFERTAS'
      )}
      ${InnerChildSection()}
      ${GiftIdeasSection()}
      ${CampaignSection()}
      ${FinalCTA()}
    </main>
    ${Footer()}
  `;

  // Inicializa carrosséis
  document.querySelectorAll('.carousel').forEach(carousel => {
    Carousel.init(carousel.id);
  });

  // Re-inicializa carrosséis após imagens carregarem
  window.addEventListener('load', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
      Carousel.init(carousel.id);
    });
  });

  initCountdown();
  Tracking.viewLanding();
});
