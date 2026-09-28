/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon + Mercado Livre
 * Setembro - Outubro 2026
 */

// ─── Ícones SVG ──────────────────────────────────────────────────────────────

const Icons = {
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  gamepad: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z"/></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  users: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  gift: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`
};

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <div class="header__logo">PS5 <span>Mês das Crianças</span></div>
        <a href="${CONFIG.whatsappUrl}" class="header__cta" target="_blank" rel="noopener noreferrer">
          ${Icons.users} Entrar no Grupo
        </a>
      </div>
    </header>`;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const isPre = CONFIG.isPreCampaign();
  
  // Carrossel de imagens PS5
  const carouselImages = CONFIG.consoles.slice(0, 5);
  const carouselHtml = carouselImages.map((c, i) => `
    <div class="hero-carousel__slide ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${c.image}" alt="${c.name}">
      <div class="hero-carousel__info">
        <h3>${c.name}</h3>
        <p>${c.specs}</p>
        <p class="hero-carousel__price">Oferta especial disponível</p>
        <a href="${c.affiliateUrl}" class="cta-button cta-button--small" target="_blank" rel="noopener noreferrer">
          VER OFERTA NA AMAZON
        </a>
      </div>
    </div>
  `).join('');

  return `
    <section class="hero">
      <div class="container hero__layout">
        <div class="hero__content">
          <span class="hero__eyebrow">🎮 MÊS DAS CRIANÇAS - 2026</span>
          <h1 class="hero__title">
            🎮 O Presente Perfeito para o Mês das Crianças
          </h1>
          <p class="hero__subtitle">Não perca horas procurando. Nós separamos os consoles e jogos mais procurados da Amazon para você escolher com calma e comprar com segurança.</p>
          <p class="hero__text">
            Sem enrolação. Só informação útil.
          </p>
          <div class="hero__actions">
            <a href="${CONFIG.featuredOffer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="noopener noreferrer">
              🔥 VER OFERTA EM DESTAQUE
            </a>
            <a href="#consoles" class="cta-button cta-button--outline">
              Comparar Versões
            </a>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero-carousel" id="hero-carousel">
            ${carouselHtml}
            <button class="hero-carousel__arrow hero-carousel__arrow--prev" aria-label="Anterior">${Icons.chevronLeft}</button>
            <button class="hero-carousel__arrow hero-carousel__arrow--next" aria-label="Próximo">${Icons.chevronRight}</button>
            <div class="hero-carousel__dots">
              ${carouselImages.map((_, i) => `<span class="hero-carousel__dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Alerta de Promoção ──────────────────────────────────────────────────────

function PromoAlert() {
  return `
    <section class="promo-alert">
      <div class="container">
        <div class="promo-alert__box">
          <div class="promo-alert__content">
            <h2 class="promo-alert__title">🔔 AVISO: OFERTA ESPECIAL DE ATÉ 80% OFF</h2>
            <p class="promo-alert__text">De 5 a 11 de OUTUBRO teremos presentes exclusivos para nossa comunidade no WhatsApp.</p>
            <p class="promo-alert__text">Cupons extras e avisos de ofertas relâmpago.</p>
            <p class="promo-alert__text">Entre agora para não perder!</p>
            <a href="${CONFIG.whatsappUrl}" class="cta-button cta-button--whatsapp" target="_blank" rel="noopener noreferrer">
              [ ENTRAR NO GRUPO WHATSAPP ]
            </a>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Oferta em Destaque ──────────────────────────────────────────────────────

function FeaturedOfferSection() {
  const offer = CONFIG.featuredOffer;
  return `
    <section class="section section--featured" id="destaque">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🔥 OFERTA QUE ENCONTRAMOS HOJE</h2>
        </div>
        <div class="featured-offer">
          <div class="featured-offer__image">
            <img src="${offer.image}" alt="${offer.name}">
            <span class="featured-offer__badge">${offer.badge}</span>
          </div>
          <div class="featured-offer__content">
            <h3 class="featured-offer__name">${offer.name}</h3>
            <p class="featured-offer__award">🏆 Jogo do Ano 2024 (Astro Bot)</p>
            <div class="featured-offer__prices">
              <p class="featured-offer__price">
                <span class="featured-offer__label">Disponibilidade:</span>
                <span class="featured-offer__current">Em estoque</span>
              </p>
            </div>
            <ul class="featured-offer__includes">
              ${offer.includes.map(i => `<li>${Icons.check} ${i}</li>`).join('')}
            </ul>
            <a href="${offer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="noopener noreferrer">
              Consultar Preço Atualizado na Amazon
            </a>
            <p class="featured-offer__date">Preço consultado em ${CONFIG.priceCheckDate}. Sujeito a mudanças.</p>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Consoles PS5 ────────────────────────────────────────────────────────────

function ConsolesSection() {
  const consoles = CONFIG.consoles.map(c => {
    const bestPrice = c.pixPrice || c.amazonPrice;
    return `
      <div class="console-card">
        <div class="console-card__image">
          <img src="${c.image}" alt="${c.name}" loading="lazy">
          ${c.badge ? `<span class="console-card__badge">${c.badge}</span>` : ''}
        </div>
        <div class="console-card__content">
          <h3 class="console-card__name">${c.name}</h3>
          <p class="console-card__specs">${c.specs}</p>
          <div class="console-card__bestfor">
            <p class="console-card__bestfor-label">Melhor para:</p>
            <ul>
              ${c.bestFor.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
          <a href="${c.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            CONSULTAR PREÇO ATUALIZADO
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="consoles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎮 PS5 QUE ENCONTRAMOS AGORA</h2>
          <p class="section__subtitle">Cada um tem seu propósito. Escolha o que faz sentido para você.</p>
        </div>
        <div class="consoles-carousel" id="consoles-carousel">
          ${consoles}
        </div>
        <div class="section__cta">
          <p>Ainda em dúvida qual escolher?</p>
          <p>Veja nosso GUIA DE DECISÃO abaixo para saber exatamente qual console é certo para sua criança.</p>
        </div>
      </div>
    </section>`;
}

// ─── Guia: Antes de Comprar ──────────────────────────────────────────────────

function GuideSection() {
  const comp = CONFIG.comparisons;
  
  return `
    <section class="section section--guide" id="guia">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Vai comprar um PS5? Antes de fechar a compra, vê isso.</h2>
          <p class="section__subtitle">Existem diferentes versões, e cada uma faz sentido para um tipo de pessoa. Deixa a gente te ajudar a decidir certo em menos de 2 minutos.</p>
        </div>
        
        <!-- Comparação 1: Digital vs Leitor -->
        <div class="comparison">
          <h3 class="comparison__title">Digital vs. Com Leitor</h3>
          <div class="comparison__grid">
            <div class="comparison__card">
              <h4>🟢 DIGITAL</h4>
              <p class="comparison__price">Opção recomendada para economia</p>
              <ul class="comparison__list comparison__list--pros">
                ${comp.digitalVsLeitor.digital.pros.map(a => `<li>${Icons.check} ${a}</li>`).join('')}
              </ul>
              <ul class="comparison__list comparison__list--cons">
                ${comp.digitalVsLeitor.digital.cons.map(d => `<li>${Icons.x} ${d}</li>`).join('')}
              </ul>
              <p class="comparison__ideal"><strong>Ideal se:</strong></p>
              <ul class="comparison__list">
                ${comp.digitalVsLeitor.digital.ideal.map(i => `<li>→ ${i}</li>`).join('')}
              </ul>
              <a href="#" class="cta-button cta-button--small cta-button--primary" rel="sponsored noopener">VER DISPONIBILIDADE NA AMAZON</a>
            </div>
            <div class="comparison__card">
              <h4>🔵 COM LEITOR</h4>
              <p class="comparison__price">Opção recomendada para flexibilidade</p>
              <ul class="comparison__list comparison__list--pros">
                ${comp.digitalVsLeitor.leitor.pros.map(a => `<li>${Icons.check} ${a}</li>`).join('')}
              </ul>
              <ul class="comparison__list comparison__list--cons">
                ${comp.digitalVsLeitor.leitor.cons.map(d => `<li>${Icons.x} ${d}</li>`).join('')}
              </ul>
              <p class="comparison__ideal"><strong>Ideal se:</strong></p>
              <ul class="comparison__list">
                ${comp.digitalVsLeitor.leitor.ideal.map(i => `<li>→ ${i}</li>`).join('')}
              </ul>
              <a href="#" class="cta-button cta-button--small cta-button--primary" rel="sponsored noopener">VER DISPONIBILIDADE NA AMAZON</a>
            </div>
          </div>
        </div>

        <!-- Comparação 2: Perfis (Abas) -->
        <div class="comparison">
          <h3 class="comparison__title">Qual Console Para Sua Criança?</h3>
          <div class="profiles-tabs">
            ${comp.profiles.map((p, i) => `
              <button class="profiles-tab ${i === 0 ? 'active' : ''}" data-tab="${p.id}">
                ${p.label}
              </button>
            `).join('')}
          </div>
          <div class="profiles-content">
            ${comp.profiles.map((p, i) => `
              <div class="profile-panel ${i === 0 ? 'active' : ''}" data-panel="${p.id}">
                <h4>Recomendação: ${p.product}</h4>
                <p class="profile-panel__recommendation">Recomendado para seu perfil</p>
                <p class="profile-panel__desc">"${p.desc}"</p>
                <a href="#" class="cta-button cta-button--small cta-button--primary" rel="sponsored noopener">GARANTIR MEU EXEMPLAR</a>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section__cta">
          <p>Já decidiu qual versão? Confira nossas ofertas dos consoles abaixo e clique para comprar.</p>
        </div>
      </div>
    </section>`;
}

// ─── Bundles ─────────────────────────────────────────────────────────────────

function BundlesSection() {
  const bundles = CONFIG.bundles.map(b => `
    <div class="bundle-card">
      <div class="bundle-card__image">
        <img src="${b.image}" alt="${b.name}" loading="lazy">
        ${b.badge ? `<span class="bundle-card__badge">${b.badge}</span>` : ''}
      </div>
      <div class="bundle-card__content">
        <h3 class="bundle-card__name">${b.name}</h3>
        <p class="bundle-card__label">O que vem:</p>
        <ul class="bundle-card__includes">
          ${b.includes.map(i => `<li>${Icons.check} ${i}</li>`).join('')}
        </ul>
        <p class="bundle-card__price">Consulte a oferta atualizada do combo</p>
        <a href="${b.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
          VER COMBO NA AMAZON
        </a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="bundles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎁 COMBOS JÁ MONTADOS (Console + Jogos)</h2>
          <p class="section__subtitle">Não sabe como montar? Aqui estão as melhores combinações.</p>
        </div>
        <div class="bundles-grid">${bundles}</div>
        <div class="section__cta">
          <p>Quer que a gente encontre uma combinação customizada para você?</p>
          <p>Ou quer receber as MELHORES OFERTAS em tempo real?</p>
          <p>Entra no nosso grupo WhatsApp. Avisamos ASSIM que aparece algo bom.</p>
          <a href="${CONFIG.whatsappUrl}" class="cta-button cta-button--whatsapp" target="_blank" rel="noopener noreferrer">
            [ ENTRAR NO GRUPO WHATSAPP ]
          </a>
        </div>
      </div>
    </section>`;
}

// ─── Jogos ────────────────────────────────────────────────────────────────────

function GamesSection() {
  const renderGames = (games) => games.map(g => `
    <div class="game-card">
      <div class="game-card__image">
        <div class="game-card__placeholder">${Icons.gamepad}</div>
        <span class="game-card__rating">${g.rating}</span>
      </div>
      <div class="game-card__content">
        <h3 class="game-card__name">${g.name}</h3>
        ${g.desc ? `<p class="game-card__desc">${g.desc}</p>` : ''}
        <p class="game-card__price">Ver oferta na Amazon</p>
        <a href="#" class="cta-button cta-button--small cta-button--primary" rel="sponsored noopener">VER PREÇO DE HOJE</a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="jogos">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎮 OS JOGOS QUE AS CRIANÇAS MAIS AMAM</h2>
          <p class="section__subtitle">Separei as melhores ofertas de cada jogo. ClassInd incluída para você saber exatamente o que cada criança pode jogar.</p>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">👶 PARA CRIANÇAS 3-7 ANOS</h3>
          <div class="games-grid">${renderGames(CONFIG.games.kids)}</div>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">👦 PARA CRIANÇAS 8-12 ANOS</h3>
          <div class="games-grid">${renderGames(CONFIG.games.older)}</div>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">🎮 PARA ADOLESCENTES 13+</h3>
          <div class="games-grid">${renderGames(CONFIG.games.teens)}</div>
        </div>
        
        <div class="section__cta">
          <p>Cada oferta foi atualizada HOJE da Amazon.</p>
          <p>Se encontrou o jogo que a criança quer, clique e garanta agora mesmo antes que esgote.</p>
        </div>
      </div>
    </section>`;
}

// ─── Acessórios ──────────────────────────────────────────────────────────────

function AccessoriesSection() {
  const accessories = CONFIG.accessories.map(a => `
    <div class="accessory-card">
      <div class="accessory-card__image">
        <div class="accessory-card__placeholder">${Icons.gamepad}</div>
      </div>
      <div class="accessory-card__content">
        <span class="accessory-card__category">${a.category}</span>
        <h3 class="accessory-card__name">${a.name}</h3>
        ${a.desc ? `<p class="accessory-card__desc">${a.desc}</p>` : ''}
        <p class="accessory-card__price">Ver na Amazon</p>
        <a href="#" class="cta-button cta-button--small">[ VER ]</a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="acessorios">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎧 COMPLETE SEU PS5</h2>
          <p class="section__subtitle">Um bom headset muda tudo. E um controle extra? Essencial.</p>
        </div>
        <div class="accessories-grid">${accessories}</div>
      </div>
    </section>`;
}

// ─── PS4 ─────────────────────────────────────────────────────────────────────

function PS4Section() {
  const ps4 = CONFIG.ps4.map(p => `
    <div class="ps4-card">
      <h3 class="ps4-card__name">${p.name}</h3>
      <p class="ps4-card__price">Ver ofertas na Amazon</p>
      <p class="ps4-card__desc">${p.desc}</p>
      <a href="#" class="cta-button cta-button--small cta-button--primary" rel="sponsored noopener">VER NA AMAZON</a>
    </div>
  `).join('');

  return `
    <section class="section section--ps4" id="ps4">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎮 NÃO TEM ORÇAMENTO PARA PS5? CONHEÇA O PS4</h2>
          <p class="section__subtitle">Consoles usados, refurbished ou versões antigas. Mesmos jogos, preço BEM mais acessível.</p>
        </div>
        <div class="ps4-grid">${ps4}</div>
        <div class="ps4-copy">
          <p>O PS5 está fora do orçamento? O PS4 continua sendo a melhor escolha de custo-benefício para presentear.</p>
          <p>Com uma biblioteca gigante de jogos e preços muito mais acessíveis, o PS4 é a porta de entrada perfeita para o mundo dos games.</p>
        </div>
      </div>
    </section>`;
}

// ─── CTA do Grupo ────────────────────────────────────────────────────────────

function GroupCTASection() {
  return `
    <section class="section section--group" id="grupo">
      <div class="container">
        <div class="group-cta">
          <h2 class="group-cta__title">⏰ NÃO PERCA AS OFERTAS DO MÊS DAS CRIANÇAS</h2>
          <div class="group-cta__content">
            <p>De 5 a 11 de OUTUBRO:</p>
            <ul class="group-cta__list">
              <li>→ Cupons extras que conseguimos negociar</li>
              <li>→ Ofertas exclusivas TEMPO LIMITADO</li>
              <li>→ Avisos de oferta RELÂMPAGO em tempo real</li>
              <li>→ Suporte: dúvida sobre qual PS5? Respondo</li>
              <li>→ Acesso antecipado antes do site</li>
            </ul>
            <p>Anunciamos PRIMEIRO no grupo.</p>
            <p>Não é obrigatório, mas economiza MUITO.</p>
          </div>
          <a href="${CONFIG.whatsappUrl}" class="cta-button cta-button--large cta-button--whatsapp" target="_blank" rel="noopener noreferrer">
            [ ENTRAR NO GRUPO WHATSAPP ]
          </a>
        </div>
      </div>
    </section>`;
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__logo">PS5 <span>Mês das Crianças</span></div>
        <div class="footer__links">
          <a href="#destaque">Oferta em Destaque</a>
          <a href="#consoles">Consoles PS5</a>
          <a href="#guia">Guia de Decisão</a>
          <a href="#bundles">Bundles</a>
          <a href="#jogos">Jogos</a>
          <a href="#acessorios">Acessórios</a>
          <a href="#ps4">PS4</a>
          <a href="${CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
        </div>
        <p class="footer__disclaimer">
          ℹ️ Associado da Amazon: Como afiliado, recebemos comissões por compras qualificadas sem custo adicional para você. Isso nos ajuda a manter este site.
        </p>
        <p class="footer__copyright">
          © 2026 PlayStation Curador. Todos os direitos reservados.
        </p>
      </div>
    </footer>`;
}

// ─── Carousel Logic ──────────────────────────────────────────────────────────

const Carousel = {
  initHero() {
    const carousel = document.getElementById('hero-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.hero-carousel__slide');
    const dots = carousel.querySelectorAll('.hero-carousel__dot');
    const prevBtn = carousel.querySelector('.hero-carousel__arrow--prev');
    const nextBtn = carousel.querySelector('.hero-carousel__arrow--next');
    let current = 0;
    let interval;
    
    function goTo(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      current = index;
    }
    
    function next() {
      goTo((current + 1) % slides.length);
    }
    
    function prev() {
      goTo((current - 1 + slides.length) % slides.length);
    }
    
    function start() {
      interval = setInterval(next, 5000);
    }
    
    function stop() {
      clearInterval(interval);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', () => { stop(); next(); start(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stop(); prev(); start(); });
    
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        stop();
        goTo(parseInt(dot.dataset.index));
        start();
      });
    });
    
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    
    // Touch support
    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      stop();
    });
    carousel.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) prev(); else next();
      }
      start();
    });
    
    start();
  },
  
  initConsoles() {
    const carousel = document.getElementById('consoles-carousel');
    if (!carousel) return;
    
    const cards = carousel.querySelectorAll('.console-card');
    let current = 0;
    let interval;
    
    function getVisibleCount() {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    }
    
    function getMaxScroll() {
      return Math.max(0, cards.length - getVisibleCount());
    }
    
    function goTo(index) {
      const max = getMaxScroll();
      current = Math.max(0, Math.min(index, max));
      const cardWidth = cards[0].offsetWidth + 24;
      carousel.style.transform = `translateX(-${current * cardWidth}px)`;
    }
    
    function next() {
      const max = getMaxScroll();
      goTo(current >= max ? 0 : current + 1);
    }
    
    function start() {
      interval = setInterval(next, 5000);
    }
    
    function stop() {
      clearInterval(interval);
    }
    
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    
    window.addEventListener('resize', () => goTo(current));
    
    start();
  }
};

// ─── Tabs Logic ──────────────────────────────────────────────────────────────

const Tabs = {
  init() {
    const tabs = document.querySelectorAll('.profiles-tab');
    const panels = document.querySelectorAll('.profile-panel');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(`[data-panel="${target}"]`).classList.add('active');
      });
    });
  }
};

// ─── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${FeaturedOfferSection()}
      ${PromoAlert()}
      ${ConsolesSection()}
      ${GuideSection()}
      ${BundlesSection()}
      ${GamesSection()}
      ${AccessoriesSection()}
      ${PS4Section()}
      ${GroupCTASection()}
    </main>
    ${Footer()}
  `;

  // Inicializa carrosséis
  Carousel.initHero();
  Carousel.initConsoles();
  
  // Inicializa abas
  Tabs.init();
});
