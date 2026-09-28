/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon + Mercado Livre
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
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
};

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <div class="header__logo">PS5 <span>Mês das Crianças</span></div>
        <a href="${CONFIG.channelUrl}" class="header__cta" target="_blank" rel="noopener noreferrer">
          ${Icons.users} Entrar no Grupo
        </a>
      </div>
    </header>`;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const isPre = CONFIG.isPreCampaign();
  
  return `
    <section class="hero">
      <div class="container hero__layout">
        <div class="hero__content">
          <span class="hero__eyebrow">🎮 Mês das Crianças</span>
          <h1 class="hero__title">
            ${isPre 
              ? 'O presente de PlayStation que você estava procurando.'
              : 'COMEÇOU A SEMANA DO DIA DAS CRIANÇAS'}
          </h1>
          <p class="hero__subtitle">Está procurando um PS5 para presentear?</p>
          <p class="hero__text">
            Separamos consoles, bundles, jogos e acessórios que encontramos nas lojas para você não precisar ficar procurando em dezenas de anúncios.
          </p>
          <div class="hero__actions">
            <a href="${CONFIG.featuredOffer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="noopener noreferrer">
              🔥 VER OFERTA EM DESTAQUE
            </a>
            <a href="#consoles" class="cta-button cta-button--outline">
              🔎 VER TODAS AS OPÇÕES
            </a>
          </div>
        </div>
        <div class="hero__visual">
          <img src="${CONFIG.featuredOffer.image}" alt="${CONFIG.featuredOffer.name}" class="hero__image">
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
          <h2 class="section__title">🔥 Oferta que encontramos hoje</h2>
        </div>
        <div class="featured-offer">
          <div class="featured-offer__image">
            <img src="${offer.image}" alt="${offer.name}">
            <span class="featured-offer__badge">${offer.badge}</span>
          </div>
          <div class="featured-offer__content">
            <h3 class="featured-offer__name">${offer.name}</h3>
            <p class="featured-offer__price">
              ${offer.price 
                ? `<span class="featured-offer__current">R$ ${offer.price.toLocaleString('pt-BR')}</span>
                   ${offer.originalPrice ? `<span class="featured-offer__original">R$ ${offer.originalPrice.toLocaleString('pt-BR')}</span>` : ''}
                   ${offer.discount ? `<span class="featured-offer__discount">-${offer.discount}%</span>` : ''}`
                : '<span class="featured-offer__check">Ver preço na Amazon</span>'}
            </p>
            <a href="${offer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="noopener noreferrer">
              [ VER OFERTA NA AMAZON ]
            </a>
            <p class="featured-offer__date">Preço consultado em ${CONFIG.priceCheckDate}</p>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Consoles PS5 ────────────────────────────────────────────────────────────

function ConsolesSection() {
  const consoles = CONFIG.consoles.map(c => `
    <div class="console-card">
      <div class="console-card__image">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <span class="console-card__badge">${c.badge}</span>
      </div>
      <div class="console-card__content">
        <h3 class="console-card__name">${c.name}</h3>
        <p class="console-card__description">${c.description}</p>
        <div class="console-card__prices">
          <div class="console-card__price">
            <span class="console-card__label">Amazon</span>
            <span class="console-card__value">${c.amazonPrice ? 'R$ ' + c.amazonPrice.toLocaleString('pt-BR') : '—'}</span>
          </div>
          <div class="console-card__price">
            <span class="console-card__label">Mercado Livre</span>
            <span class="console-card__value">${c.mercadolivrePrice ? 'R$ ' + c.mercadolivrePrice.toLocaleString('pt-BR') : '—'}</span>
          </div>
        </div>
        <a href="${c.affiliateUrl}" class="cta-button cta-button--small" target="_blank" rel="noopener noreferrer">
          [ VER OFERTA ]
        </a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="consoles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎮 PS5 que encontramos</h2>
        </div>
        <div class="consoles-grid">${consoles}</div>
        <div class="section__cta">
          <p>Não tem certeza qual escolher? Veja nosso guia de decisão abaixo.</p>
          <a href="#guia" class="cta-button cta-button--outline">[ GUIA: QUAL PS5 ESCOLHER? ]</a>
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
          <h2 class="section__title">Vai comprar um PS5? Antes de fechar a compra, olha isso.</h2>
          <p class="section__subtitle">Existem diferentes versões, bundles e formas de comprar. Nós pesquisamos algumas das principais opções para você comparar.</p>
        </div>
        
        <!-- Comparação 1: Digital vs Leitor -->
        <div class="comparison">
          <h3 class="comparison__title">Digital vs. Com Leitor</h3>
          <div class="comparison__grid">
            <div class="comparison__card">
              <h4>PS5 Digital</h4>
              <p class="comparison__price">${comp.digitalVsLeitor.digital.price ? 'R$ ' + comp.digitalVsLeitor.digital.price.toLocaleString('pt-BR') : 'Ver preço'}</p>
              <ul class="comparison__list comparison__list--pros">
                ${comp.digitalVsLeitor.digital.advantages.map(a => `<li>${Icons.check} ${a}</li>`).join('')}
              </ul>
              <ul class="comparison__list comparison__list--cons">
                ${comp.digitalVsLeitor.digital.disadvantages.map(d => `<li>${Icons.x} ${d}</li>`).join('')}
              </ul>
              <a href="#" class="cta-button cta-button--small">[ VER OFERTA ]</a>
            </div>
            <div class="comparison__card">
              <h4>PS5 com Leitor</h4>
              <p class="comparison__price">${comp.digitalVsLeitor.leitor.price ? 'R$ ' + comp.digitalVsLeitor.leitor.price.toLocaleString('pt-BR') : 'Ver preço'}</p>
              <ul class="comparison__list comparison__list--pros">
                ${comp.digitalVsLeitor.leitor.advantages.map(a => `<li>${Icons.check} ${a}</li>`).join('')}
              </ul>
              <ul class="comparison__list comparison__list--cons">
                ${comp.digitalVsLeitor.leitor.disadvantages.map(d => `<li>${Icons.x} ${d}</li>`).join('')}
              </ul>
              <a href="#" class="cta-button cta-button--small">[ VER OFERTA ]</a>
            </div>
          </div>
        </div>

        <!-- Comparação 2: Perfis -->
        <div class="comparison">
          <h3 class="comparison__title">Qual perfil de criança?</h3>
          <div class="profiles">
            ${comp.profiles.map(p => `
              <div class="profile-card" data-profile="${p.id}">
                <span class="profile-card__label">${p.label}</span>
                <span class="profile-card__product">${p.product}</span>
                <span class="profile-card__price">${p.price ? 'R$ ' + p.price.toLocaleString('pt-BR') : 'Ver preço'}</span>
                <a href="#" class="cta-button cta-button--small">[ VER OFERTA ]</a>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section__cta">
          <p>Já decidiu qual versão? Confira nossas ofertas abaixo.</p>
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
      </div>
      <div class="bundle-card__content">
        <h3 class="bundle-card__name">${b.name}</h3>
        <ul class="bundle-card__includes">
          ${b.includes.map(i => `<li>${Icons.check} ${i}</li>`).join('')}
        </ul>
        <p class="bundle-card__price">${b.price ? 'R$ ' + b.price.toLocaleString('pt-BR') : 'Ver preço'}</p>
        <a href="${b.affiliateUrl}" class="cta-button cta-button--small" target="_blank" rel="noopener noreferrer">
          [ VER BUNDLE ]
        </a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="bundles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎁 Bundles: Console + Jogo</h2>
          <p class="section__subtitle">As melhores combinações que encontramos</p>
        </div>
        <div class="bundles-grid">${bundles}</div>
        <div class="section__cta">
          <p>Separamos as melhores ofertas e bundles para sua criança. Clique e compre agora mesmo.</p>
          <a href="#jogos" class="cta-button cta-button--primary">[ VER TODAS AS OFERTAS ]</a>
        </div>
      </div>
    </section>`;
}

// ─── Jogos ────────────────────────────────────────────────────────────────────

function GamesSection() {
  const renderGames = (games) => games.map(g => `
    <div class="game-card">
      <div class="game-card__image">
        ${g.image ? `<img src="${g.image}" alt="${g.name}" loading="lazy">` : `<div class="game-card__placeholder">${Icons.gamepad}</div>`}
        <span class="game-card__rating">${g.rating}</span>
      </div>
      <div class="game-card__content">
        <h3 class="game-card__name">${g.name}</h3>
        <a href="#" class="cta-button cta-button--small">[ VER PREÇO ]</a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="jogos">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎮 Os jogos que as crianças mais gostam</h2>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">📱 Para Crianças (3-7 anos)</h3>
          <div class="games-grid">${renderGames(CONFIG.games.kids)}</div>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">👦 Para Crianças (8-12 anos)</h3>
          <div class="games-grid">${renderGames(CONFIG.games.older)}</div>
        </div>
        
        <div class="games-category">
          <h3 class="games-category__title">🎮 Para Adolescentes (13+)</h3>
          <div class="games-grid">${renderGames(CONFIG.games.teens)}</div>
        </div>
        
        <div class="section__cta">
          <p>Separei as melhores ofertas. Clique no jogo que sua criança quer e compre agora.</p>
          <a href="#" class="cta-button cta-button--primary">[ VER OFERTAS DOS JOGOS ]</a>
        </div>
      </div>
    </section>`;
}

// ─── Acessórios ──────────────────────────────────────────────────────────────

function AccessoriesSection() {
  const accessories = CONFIG.accessories.map(a => `
    <div class="accessory-card">
      <div class="accessory-card__image">
        ${a.image ? `<img src="${a.image}" alt="${a.name}" loading="lazy">` : `<div class="accessory-card__placeholder">${Icons.gamepad}</div>`}
      </div>
      <div class="accessory-card__content">
        <span class="accessory-card__category">${a.category}</span>
        <h3 class="accessory-card__name">${a.name}</h3>
        <p class="accessory-card__price">${a.price ? 'R$ ' + a.price.toLocaleString('pt-BR') : 'Ver preço'}</p>
        <a href="#" class="cta-button cta-button--small">[ VER OFERTA ]</a>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="acessorios">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">🎧 Complete seu PS5</h2>
          <p class="section__subtitle">Controles, headsets, armazenamento e mais</p>
        </div>
        <div class="accessories-grid">${accessories}</div>
        <div class="section__cta">
          <p>Deixe seu PS5 completo. Confira nossas seleções de acessórios.</p>
          <a href="#" class="cta-button cta-button--primary">[ VER ACESSÓRIOS ]</a>
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
          <h2 class="group-cta__title">⏰ Aviso Importante</h2>
          <p class="group-cta__subtitle">Quer receber as melhores ofertas ANTES de todo mundo?</p>
          <div class="group-cta__content">
            <p>De 5 a 11 de outubro, teremos um presente especial e 80% de desconto em selecionadas. Mas anunciaremos PRIMEIRO no nosso grupo exclusivo.</p>
            <p>Além disso, no grupo você tem acesso a:</p>
            <ul class="group-cta__list">
              <li>${Icons.check} Ofertas exclusivas diárias</li>
              <li>${Icons.check} Avisos de Relâmpago</li>
              <li>${Icons.check} Cupons e cashback</li>
              <li>${Icons.check} Suporte para escolher o melhor PS5</li>
            </ul>
          </div>
          <a href="${CONFIG.channelUrl}" class="cta-button cta-button--large" target="_blank" rel="noopener noreferrer">
            [ ENTRAR NO GRUPO AGORA ]
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
        <div class="footer__links">
          <a href="#destaque">Oferta em Destaque</a>
          <a href="#consoles">Consoles PS5</a>
          <a href="#guia">Guia de Compra</a>
          <a href="#bundles">Bundles</a>
          <a href="#jogos">Jogos</a>
          <a href="#acessorios">Acessórios</a>
          <a href="${CONFIG.channelUrl}" target="_blank" rel="noopener noreferrer">Entrar no Grupo</a>
        </div>
        <p class="footer__disclaimer">
          Somos afiliados Amazon e Mercado Livre. Você paga o mesmo, mas nos ajuda a manter este site.
        </p>
      </div>
    </footer>`;
}

// ─── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${FeaturedOfferSection()}
      ${ConsolesSection()}
      ${GuideSection()}
      ${BundlesSection()}
      ${GamesSection()}
      ${AccessoriesSection()}
      ${GroupCTASection()}
    </main>
    ${Footer()}
  `;
});
