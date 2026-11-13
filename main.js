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
      <div class="container header__inner" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
        <a href="/" aria-label="Curadoria Gamer - Página inicial">
          <img src="/images/Sol e Lua.png" alt="Curadoria Gamer" class="header__logo-img">
        </a>
        <nav aria-label="Navegação principal" style="display:flex;gap:.75rem;flex-wrap:wrap;font-size:.95rem;">
          <a href="/playstation-5/">PlayStation 5</a>
          <a href="/gta-6/">GTA 6</a>
          <a href="/acessorios-ps5/">Acessórios</a>
          <a href="/playstation-5/qual-playstation-5-comprar/">Guias</a>
          <a href="/playstation-5/ofertas/">Ofertas</a>
        </nav>
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
          <span class="hero__eyebrow">CURADORIA GAMER • PLAYSTATION</span>
          <h1 class="hero__title">
            Compare, escolha e consulte opções de PlayStation 5 com mais clareza.
          </h1>
          <p class="hero__subtitle">
            Guias, comparativos e recomendações para ajudar você a decidir entre modelos, formatos e acessórios — com transparência sobre ofertas e links afiliados.
          </p>
          <div class="hero__actions">
            <a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="cta-button cta-button--primary">Comparar PS5 Slim vs Pro</a>
            <a href="/playstation-5/qual-playstation-5-comprar/" class="cta-button cta-button--outline">Ver guia de compra</a>
          </div>
          <p class="hero__trust">Conteúdo editorial e curadoria de produtos do ecossistema PlayStation</p>
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
    <a href="${CONFIG.categoryPS5Url}" class="more-options-card ${extraClass || ''}" data-type="all" target="_blank" rel="sponsored noopener noreferrer" aria-label="Quer ver mais modelos e ofertas? Ver categoria PlayStation 5 na Amazon">
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

// ─── Guia: Digital ou Leitor? ───────────────────────────────────────────────

function GuideSection() {
  return `
    <section class="section section--guide" id="guia">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Guias para escolher seu PlayStation 5</h2>
          <p class="section__subtitle">Compare modelos e formatos com critérios práticos antes de consultar ofertas.</p>
        </div>

        <div class="guide__grid">
          <a href="/playstation-5/ps5-digital-vs-com-leitor/" class="guide__card">
            <div class="guide__icon">${Icons.disc}</div>
            <h3>DIGITAL OU COM LEITOR?</h3>
            <p>Entenda qual formato combina com a forma como você compra e usa jogos.</p>
            <span class="guide__link">Ler comparativo →</span>
          </a>

          <a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="guide__card">
            <div class="guide__icon">${Icons.zap}</div>
            <h3>PS5 SLIM OU PS5 PRO?</h3>
            <p>Veja diferenças por perfil, prioridades e pontos de atenção.</p>
            <span class="guide__link">Ler comparativo →</span>
          </a>

          <a href="/playstation-5/qual-playstation-5-comprar/" class="guide__card">
            <div class="guide__icon">${Icons.gamepad}</div>
            <h3>QUAL PS5 COMPRAR?</h3>
            <p>Um guia rápido para escolher o modelo ideal para o seu uso.</p>
            <span class="guide__link">Ler guia →</span>
          </a>
        </div>

        <p class="guide__note">As recomendações ajudam na decisão. Preços, condições e disponibilidade devem ser confirmados na loja.</p>
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
        <div class="footer__logo">Curadoria <span>Gamer</span></div>
        <div class="footer__links">
          <a href="/playstation-5/">PlayStation 5</a>
          <a href="/gta-6/">GTA 6</a>
          <a href="/acessorios-ps5/">Acessórios</a>
          <a href="#destaque">Destaque</a>
          <a href="#consoles">Consoles</a>
          <a href="#guia">Guias</a>
          <a href="#bundles">Bundles</a>
          <a href="#acessorios">Acessórios</a>
          <a href="/sobre.html">Sobre</a>
          <a href="/metodologia-de-curadoria.html">Metodologia</a>
          <a href="/links-afiliados.html">Links afiliados</a>
        </div>
        <p class="footer__disclaimer">
          Curadoria Gamer participa do Programa de Associados da Amazon. Podemos receber comissão por compras qualificadas realizadas por meio dos links indicados, sem custo adicional para você. Preços, condições e disponibilidade são definidos pela loja e podem mudar a qualquer momento.
        </p>
        <p class="footer__copyright">
          © 2026 Curadoria Gamer. Todos os direitos reservados.
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

// ─── Tracking & Init ────────────────────────────────────────────────────────

function Gta6HighlightSection() {
  return `
    <section class="section" id="gta6" aria-label="GTA 6 e preparação no PlayStation">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">GTA 6 e PlayStation 5</h2>
          <p class="section__subtitle">Guias para entender compatibilidade, escolher o PS5 e preparar seu setup com foco no que for confirmado oficialmente.</p>
        </div>
        <div class="guide__grid">
          <a href="/gta-6/" class="guide__card"><h3>HUB GTA 6</h3><p>Veja todos os guias e caminhos de preparação.</p><span class="guide__link">Explorar hub →</span></a>
          <a href="/gta-6/qual-ps5-comprar-para-gta-6/" class="guide__card"><h3>QUAL PS5 PARA GTA 6?</h3><p>Critérios por perfil para escolher entre Slim e Pro.</p><span class="guide__link">Ler guia →</span></a>
          <a href="/gta-6/plataformas-e-compatibilidade/" class="guide__card"><h3>COMPATIBILIDADE</h3><p>Como verificar informações com base em fontes oficiais.</p><span class="guide__link">Ver orientações →</span></a>
        </div>
      </div>
    </section>`;
}

function QuickCompareSection() {
  return `
    <section class="section" id="comparativo-rapido" aria-label="Comparativo rápido PS5 Slim vs PS5 Pro">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">PS5 Slim vs PS5 Pro: comparativo rápido</h2>
          <p class="section__subtitle">Um resumo por perfil para orientar sua decisão antes de ver o comparativo completo.</p>
        </div>
        <div style="overflow:auto;">
          <table style="width:100%;border-collapse:collapse;min-width:640px;">
            <thead>
              <tr>
                <th style="text-align:left;padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Critério</th>
                <th style="text-align:left;padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">PS5 Slim</th>
                <th style="text-align:left;padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">PS5 Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Perfil</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Equilíbrio para a maioria</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Quem prioriza o modelo mais avançado</td></tr>
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Decisão comum</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Bom custo-benefício conforme uso e oferta</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Investimento maior por prioridades específicas</td></tr>
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Próximo passo</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);"><a href="/playstation-5/ps5-slim/">Ver página do PS5 Slim</a></td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);"><a href="/playstation-5/ps5-pro/">Ver página do PS5 Pro</a></td></tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top:1rem;"><a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="cta-button cta-button--primary">Abrir comparativo completo</a> <a href="/playstation-5/ps5-digital-vs-com-leitor/" class="cta-button cta-button--outline" style="margin-left:.5rem;">Digital ou com leitor</a></p>
      </div>
    </section>`;
}

function FeaturedGuidesSection() {
  return `
    <section class="section" id="guias-destaque" aria-label="Guias e conteúdos em destaque">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Guias e hubs em destaque</h2>
          <p class="section__subtitle">Acesse os principais caminhos para comparar, escolher e se preparar.</p>
        </div>
        <div class="guide__grid">
          <a href="/playstation-5/" class="guide__card"><h3>HUB PLAYSTATION 5</h3><p>Comparativos, modelos e páginas de consulta de compra.</p><span class="guide__link">Explorar →</span></a>
          <a href="/gta-6/" class="guide__card"><h3>HUB GTA 6</h3><p>Guias de preparação e escolha de PS5 com foco no confirmado.</p><span class="guide__link">Explorar →</span></a>
          <a href="/acessorios-ps5/" class="guide__card"><h3>ACESSÓRIOS PS5</h3><p>SSD, headsets, controles e dicas de setup.</p><span class="guide__link">Explorar →</span></a>
          <a href="/gta-6/qual-ps5-comprar-para-gta-6/" class="guide__card"><h3>QUAL PS5 PARA GTA 6?</h3><p>Critérios por perfil para decidir com clareza.</p><span class="guide__link">Ler guia →</span></a>
        </div>
      </div>
    </section>`;
}

function HomeFaqSection() {
  return `
    <section class="section" id="faq" aria-label="Perguntas frequentes">
      <div class="container" style="max-width: 920px;">
        <div class="section__header">
          <h2 class="section__title">Perguntas frequentes</h2>
          <p class="section__subtitle">Respostas rápidas para dúvidas comuns antes de comparar ou consultar ofertas.</p>
        </div>
        <div style="display:grid;gap:.75rem;">
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>Qual PlayStation 5 devo escolher?</strong></summary><p style="margin-top:.5rem;">Depende do seu perfil: formato (digital ou com leitor), orçamento e prioridades de uso. Comece pelo guia <a href="/playstation-5/qual-playstation-5-comprar/">qual PS5 comprar</a> e pelo comparativo <a href="/playstation-5/ps5-slim-vs-ps5-pro/">Slim vs Pro</a>.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>PS5 digital ou com leitor: qual é melhor?</strong></summary><p style="margin-top:.5rem;">Digital faz sentido para quem compra tudo online; com leitor oferece mais flexibilidade para mídia física. Veja o <a href="/playstation-5/ps5-digital-vs-com-leitor/">comparativo completo</a>.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>Os preços e ofertas são garantidos?</strong></summary><p style="margin-top:.5rem;">Não. Preços, condições e disponibilidade são definidos pela loja e podem mudar a qualquer momento. Sempre confirme na página da loja antes de comprar.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>O site usa links de afiliados?</strong></summary><p style="margin-top:.5rem;">Sim. Podemos receber comissão por compras qualificadas, sem custo adicional para você. Saiba mais em <a href="/links-afiliados.html">como funcionam os links afiliados</a>.</p></details>
        </div>
      </div>
    </section>`;
}

function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${Gta6HighlightSection()}
      ${QuickCompareSection()}
      ${FeaturedOfferSection()}
      ${ConsolesSection()}
      ${BundlesSection()}
      ${DesktopPromoBanner()}
      ${GuideSection()}
      ${AccessoriesSection()}
      ${FeaturedGuidesSection()}
      ${HomeFaqSection()}
      ${FinalCTASection()}
    </main>
    ${Footer()}
  `;
}

function initAffiliateTracking() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const isAffiliate = (link.rel && link.rel.includes('sponsored')) || /amazon\./i.test(href);
    if (!isAffiliate) return;

    const payload = {
      destination_url: href,
      link_text: (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120),
      link_location: link.closest('section')?.id || link.className || 'unknown',
      page_path: location.pathname
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'affiliate_click', ...payload });

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', payload);
    }
    if (typeof window.clarity === 'function') {
      window.clarity('event', 'affiliate_click');
    }
  }, { capture: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  initMobileCarousels();
  initAffiliateTracking();
});