/**
 * PlayStation Mês das Crianças — Landing Page
 * Afiliado Amazon Brasil
 * Setembro - Outubro 2026
 */

// ─── Ícones SVG ──────────────────────────────────────────────────────────────

const Icons = {
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  gamepad: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z"/></svg>`,
  disc: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
  zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
};

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return `
    <header class="header">
      <div class="container header__inner">
        <img src="images/Sol e Lua.png" alt="Sol e Lua" class="header__logo-img">
      </div>
    </header>`;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const destaque = CONFIG.featuredOffer;
  
  return `
    <section class="hero">
      <div class="container hero__layout">
        <div class="hero__content">
          <span class="hero__eyebrow">GUIA DE PRESENTES • MÊS DAS CRIANÇAS</span>
          <h1 class="hero__title">
            Um PlayStation 5 pode ser um presente inesquecível.
          </h1>
          <p class="hero__subtitle">
            A gente filtra os modelos para você escolher sem precisar entender tudo de PS5.
          </p>
          <div class="hero__actions">
            <a href="#consoles" class="cta-button cta-button--primary">
              VER OFERTAS NA AMAZON
            </a>
            <a href="#guia" class="cta-button cta-button--outline">
              ENTENDER OS MODELOS
            </a>
          </div>
          <p class="hero__trust">Links diretos para a Amazon, onde você compra com segurança</p>
        </div>
        <div class="hero__visual">
          <div class="hero__image">
            <img src="${destaque.image}" alt="${destaque.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="hero__placeholder" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;color:#999;">
              <span>${destaque.name}</span>
            </div>
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
        <div class="featured-offer">
          <div class="featured-offer__image">
            <img src="${offer.image}" alt="${offer.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="featured-offer__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
              <span>${offer.name}</span>
            </div>
          </div>
          <div class="featured-offer__content">
            <span class="featured-offer__tag">JÁ VEM COM 2 JOGOS</span>
            <h2 class="featured-offer__name">${offer.name}</h2>
            <ul class="featured-offer__includes">
              <li>${Icons.check} ${offer.copy}</li>
            </ul>
            <a href="${offer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="sponsored noopener">
              Ver oferta na Amazon
            </a>
          </div>
        </div>
      </div>
    </section>`;
}

// ─── Banner "Mais Opções" (sempre o último card dos carrosséis) ─────────────

function MoreOptionsBanner(extraClass) {
  return `
    <a href="${CONFIG.categoryPS5Url}" class="more-options-card ${extraClass || ''}" data-type="all" target="_blank" rel="noopener noreferrer" aria-label="Quer ver mais modelos e ofertas? Ver categoria PlayStation 5 na Amazon">
      <img src="images/prime-mais-opcoes-mobile.png" alt="Quer ver mais modelos e ofertas? Acesse a categoria PlayStation 5 na Amazon" loading="lazy">
    </a>
  `;
}

// ─── Consoles PS5 ────────────────────────────────────────────────────────────

let currentFilter = 'all';

function filterConsoles(type) {
  currentFilter = type;
  const grid = document.querySelector('.consoles-grid');
  const cards = grid.querySelectorAll('.console-card');
  const banner = grid.querySelector('.more-options-card');
  
  let visibleCount = 0;
  cards.forEach(card => {
    const cardType = card.dataset.type;
    if (cardType === currentFilter || currentFilter === 'all') {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Garante que o banner "Mais Opções" seja sempre o ÚLTIMO elemento do carrossel
  if (banner) {
    grid.appendChild(banner);
  }

  const dots = grid.parentNode.querySelector('.carousel-dots');
  if (dots) {
    const totalVisible = visibleCount + 1; // +1 = banner "Mais Opções" (sempre visível e último)
    Array.from(dots.children).forEach((dot, i) => {
      dot.style.display = i < totalVisible ? '' : 'none';
      dot.classList.toggle('active', i === 0);
    });
    grid.scrollTo({ left: 0 });
  }
  
  document.querySelectorAll('.consoles-filter__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === type);
  });
}

function ConsolesSection() {
  const consoles = CONFIG.consoles.map((c) => {
    const typeLabel = c.type === 'digital' ? 'Digital' : c.type === 'disc' ? 'Com Leitor' : 'Pro';
    const typeClass = c.type === 'digital' ? 'digital' : c.type === 'disc' ? 'disc' : 'pro';
    const benefits = c.benefits || [];
    const idealFor = c.idealFor || '';
    
    return `
      <div class="console-card" data-type="${typeClass}">
        <div class="console-card__image">
          <img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="console-card__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
            <span>${c.name}</span>
          </div>
          <span class="console-card__badge">${c.badge}</span>
        </div>
        <div class="console-card__content">
          <h3 class="console-card__name">${c.name}</h3>
          <p class="console-card__specs">${c.capacity} • ${typeLabel}</p>
          ${benefits.length > 0 ? `<ul class="console-card__benefits">${benefits.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          ${idealFor ? `<p class="console-card__ideal">${idealFor}</p>` : ''}
          <a href="${c.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            ${c.cta}
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="consoles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Qual PlayStation 5 faz mais sentido para o presente?</h2>
          <p class="section__subtitle">Você não precisa entender todas as especificações.</p>
        </div>
        
        <div class="consoles-filter">
          <button class="consoles-filter__btn active" data-filter="all" onclick="filterConsoles('all')">TODOS</button>
          <button class="consoles-filter__btn" data-filter="digital" onclick="filterConsoles('digital')">DIGITAL</button>
          <button class="consoles-filter__btn" data-filter="disc" onclick="filterConsoles('disc')">COM LEITOR</button>
          <button class="consoles-filter__btn" data-filter="pro" onclick="filterConsoles('pro')">PRO</button>
        </div>
        
        <div class="consoles-grid">${consoles}${MoreOptionsBanner()}</div>
      </div>
    </section>`;
}

// ─── Guia: Digital ou Leitor? ────────────────────────────────────────────────

function GuideSection() {
  return `
    <section class="section section--guide" id="guia">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">PlayStation 5: Digital ou com leitor?</h2>
          <p class="section__subtitle">A diferença principal está em como a pessoa pretende jogar.</p>
        </div>
        
        <div class="guide__grid">
          <a href="#consoles" class="guide__card" onclick="filterConsoles('digital'); document.querySelector('#consoles').scrollIntoView({behavior: 'smooth'}); return false;">
            <div class="guide__icon">${Icons.gamepad}</div>
            <h3>DIGITAL</h3>
            <p>Para quem compra jogos pela internet.</p>
            <span class="guide__link">Ver modelos →</span>
          </a>
          
          <a href="#consoles" class="guide__card" onclick="filterConsoles('disc'); document.querySelector('#consoles').scrollIntoView({behavior: 'smooth'}); return false;">
            <div class="guide__icon">${Icons.disc}</div>
            <h3>COM LEITOR</h3>
            <p>Para quem quer usar mídia física e também jogos digitais.</p>
            <span class="guide__link">Ver modelos →</span>
          </a>
          
          <a href="#consoles" class="guide__card" onclick="filterConsoles('pro'); document.querySelector('#consoles').scrollIntoView({behavior: 'smooth'}); return false;">
            <div class="guide__icon">${Icons.zap}</div>
            <h3>PRO</h3>
            <p>Para quem procura o modelo mais avançado da linha.</p>
            <span class="guide__link">Ver modelo →</span>
          </a>
        </div>
        
        <p class="guide__note">Preços e disponibilidade sujeitos a alteração na Amazon.</p>
      </div>
    </section>`;
}

// ─── Banner Desktop "Mais Opções" (entre Consoles e Bundles) ────────────────

function DesktopPromoBanner() {
  const url = 'https://www.amazon.com.br/s?k=playstation+5&ascsubtag=srctok-5fda3d2ce1464eb7&btn_ref=srctok-5fda3d2ce1464eb7&btn_type=ss&crid=C6Z0YRPFCE0H&sprefix=pla%2Caps%2C322&linkCode=ll2&tag=oliveirata-20&linkId=bc15bf8dcb6f2b534b8c6d6085103f07&ref_=as_li_ss_tl';
  return `
    <section class="section section--desktop-promo" aria-label="Mais opções de PlayStation 5 na Amazon">
      <div class="container">
        <a href="${url}" class="desktop-promo-banner" target="_blank" rel="noopener noreferrer" aria-label="Ver mais modelos e ofertas de PlayStation 5 na Amazon">
          <img src="images/wide_promotional_banner_clean_commercial_graphic.png.png" alt="Mais opções de PlayStation 5 na Amazon - clique para ver a categoria completa" loading="lazy">
        </a>
      </div>
    </section>
  `;
}

// ─── Bundles ─────────────────────────────────────────────────────────────────

function BundlesSection() {
  const bundles = CONFIG.bundles.map((b) => {
    return `
      <div class="bundle-card">
        <div class="bundle-card__image">
          <img src="${b.image}" alt="${b.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="bundle-card__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
            <span>${b.name}</span>
          </div>
          <span class="bundle-card__badge">COMBO</span>
        </div>
        <div class="bundle-card__content">
          <h3 class="bundle-card__name">${b.name}</h3>
          <p class="bundle-card__desc">${b.specs}</p>
          <a href="${b.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            Conferir combo na Amazon
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section section--bundles" id="bundles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Quer um presente de PlayStation 5 que já venha completo?</h2>
          <p class="section__subtitle">Console + jogos em um único pacote.</p>
        </div>
        <div class="bundles__grid">${bundles}${MoreOptionsBanner()}</div>
      </div>
    </section>`;
}

// ─── Acessórios ──────────────────────────────────────────────────────────────

function AccessoriesSection() {
  const accessories = CONFIG.accessories.map((a) => {
    return `
      <div class="accessory-card">
        <div class="accessory-card__image">
          <img src="${a.image}" alt="${a.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="accessory-card__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
            <span>${a.name}</span>
          </div>
        </div>
        <div class="accessory-card__content">
          <h3 class="accessory-card__name">${a.name}</h3>
          <p class="accessory-card__desc">${a.specs}</p>
          <a href="${a.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            Ver na Amazon
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="acessorios">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Depois do PlayStation 5, o que realmente vale considerar?</h2>
        </div>
        <div class="accessories__grid">${accessories}</div>
      </div>
    </section>`;
}

// ─── CTA Final ───────────────────────────────────────────────────────────────

function FinalCTASection() {
  return `
    <section class="section section--cta" id="cta-final">
      <div class="container">
        <div class="cta-final">
          <h2 class="cta-final__title">Encontrou o PlayStation 5 que faz sentido?</h2>
          <p class="cta-final__text">Confira a oferta atual diretamente na Amazon.</p>
          <a href="#consoles" class="cta-button cta-button--primary">
            Ver ofertas na Amazon
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
          <a href="#destaque">Uma opção para presentear</a>
          <a href="#consoles">Qual PS5 escolher</a>
          <a href="#guia">Digital ou Leitor?</a>
          <a href="#bundles">Combos completos</a>
          <a href="#acessorios">Acessórios</a>
        </div>
        <p class="footer__disclaimer">
          Como associado da Amazon, recebemos comissões por compras qualificadas. O preço para você não muda. Preços e disponibilidade podem mudar a qualquer momento na Amazon.
        </p>
        <p class="footer__copyright">
          © 2026 PS5 Mês das Crianças. Todos os direitos reservados.
        </p>
      </div>
    </footer>`;
}

// ─── Carrosséis Mobile (indicadores de posição) ─────────────────────────────

function initMobileCarousels() {
  const grids = document.querySelectorAll('.consoles-grid, .bundles__grid, .accessories__grid');

  grids.forEach((grid) => {
    const total = grid.children.length;
    if (total < 2) return;

    const dots = document.createElement('div');
    dots.className = 'carousel-dots';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dots.appendChild(dot);
    }
    grid.parentNode.insertBefore(dots, grid.nextSibling);

    grid.addEventListener('scroll', () => {
      const cardWidth = grid.children[0].offsetWidth + 16;
      const index = Math.min(Math.round(grid.scrollLeft / cardWidth), total - 1);
      Array.from(dots.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }, { passive: true });
  });
}

// ─── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${FeaturedOfferSection()}
      ${ConsolesSection()}
      ${DesktopPromoBanner()}
      ${BundlesSection()}
      ${GuideSection()}
      ${AccessoriesSection()}
      ${FinalCTASection()}
    </main>
    ${Footer()}
  `;
  initMobileCarousels();
});
