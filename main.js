/**
 * Curadoria Gamer - Aplicação Principal
 * Renderização dinâmica, tracking de afiliados e carrosséis responsivos.
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
        <nav aria-label="Navegação principal" class="site-nav" style="display:flex;gap:.75rem;flex-wrap:wrap;font-size:.95rem;">
          <a href="/playstation-5/"><strong>PlayStation 5</strong></a>
          <a href="/gta-6/"><strong>GTA 6</strong></a>
          <a href="/acessorios-ps5/"><strong>Acessórios</strong></a>
          <a href="/playstation-5/qual-playstation-5-comprar/"><strong>Guias</strong></a>
          <a href="/playstation-5/ofertas/"><strong>Ofertas</strong></a>
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
            Guias práticos, comparativos técnicos e recomendações editoriais para ajudar você a decidir entre modelos Slim, Pro, opções digitais ou com leitor de disco, com transparência total de afiliados.
          </p>
          <div class="hero__actions">
            <a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="cta-button cta-button--primary"><strong>Comparar PS5 Slim vs Pro</strong></a>
            <a href="/playstation-5/qual-playstation-5-comprar/" class="cta-button cta-button--outline"><strong>Ver guia de compra</strong></a>
          </div>
          <p class="hero__trust">Curadoria independente do ecossistema PlayStation, com foco em decisão informada</p>
        </div>
        <div class="hero__visual">
          <div class="hero__image">
            <img src="${destaque.image}" alt="${destaque.name}" width="320" height="240" decoding="async" fetchpriority="high" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
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
            <img src="${offer.image}" alt="${offer.name}" width="320" height="200" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="featured-offer__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
              <span>${offer.name}</span>
            </div>
          </div>
          <div class="featured-offer__content">
            <span class="featured-offer__tag">Destaque da curadoria</span>
            <h2 class="featured-offer__name">${offer.name}</h2>
            <ul class="featured-offer__includes">
              <li>${Icons.check} <span>${offer.copy}</span></li>
            </ul>
            <a href="${offer.affiliateUrl}" class="cta-button cta-button--primary" target="_blank" rel="sponsored noopener">
              <strong>Consultar na Amazon</strong>
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
      <img src="images/prime-mais-opcoes-mobile.webp" alt="Mais modelos e opções de PlayStation 5 na Amazon" loading="lazy" decoding="async" width="1024" height="1536">
    </a>
  `;
}

// ─── Consoles PS5 ────────────────────────────────────────────────────────────

let currentFilter = 'all';

function filterConsoles(type) {
  currentFilter = type;
  const grid = document.querySelector('.consoles-grid');
  if (!grid) return;
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
    const totalVisible = visibleCount + 1; // +1 = banner "Mais Opções"
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
          <img src="${c.image}" alt="${c.name}" width="320" height="240" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
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
            <strong>${c.cta}</strong>
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="consoles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Qual PlayStation 5 faz mais sentido para o seu perfil?</h2>
          <p class="section__subtitle">Compare formatos, versões e combinações com critérios práticos para encontrar a opção mais adequada.</p>
        </div>
        
        <div class="consoles-filter">
          <button class="consoles-filter__btn active" data-filter="all" onclick="filterConsoles('all')"><strong>TODOS</strong></button>
          <button class="consoles-filter__btn" data-filter="digital" onclick="filterConsoles('digital')"><strong>DIGITAL</strong></button>
          <button class="consoles-filter__btn" data-filter="disc" onclick="filterConsoles('disc')"><strong>COM LEITOR</strong></button>
          <button class="consoles-filter__btn" data-filter="pro" onclick="filterConsoles('pro')"><strong>PRO</strong></button>
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
            <span class="guide__link"><strong>Ler comparativo →</strong></span>
          </a>

          <a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="guide__card">
            <div class="guide__icon">${Icons.zap}</div>
            <h3>PS5 SLIM OU PS5 PRO?</h3>
            <p>Veja diferenças por perfil, prioridades gráficas e pontos de atenção.</p>
            <span class="guide__link"><strong>Ler comparativo →</strong></span>
          </a>

          <a href="/playstation-5/qual-playstation-5-comprar/" class="guide__card">
            <div class="guide__icon">${Icons.gamepad}</div>
            <h3>QUAL PS5 COMPRAR?</h3>
            <p>Um guia em 3 etapas para definir o modelo ideal para seu perfil.</p>
            <span class="guide__link"><strong>Ler guia →</strong></span>
          </a>
        </div>

        <p class="guide__note">As recomendações têm caráter editorial. Confirme preço, condições, itens incluídos e disponibilidade diretamente na loja antes de concluir a compra.</p>
      </div>
    </section>`;
}

// ─── Banner Desktop "Mais Opções" (entre Consoles e Bundles) ────────────────

function DesktopPromoBanner() {
  const url = 'https://www.amazon.com.br/s?k=playstation+5&ascsubtag=srctok-5fda3d2ce1464eb7&btn_ref=srctok-5fda3d2ce1464eb7&btn_type=ss&crid=C6Z0YRPFCE0H&sprefix=pla%2Caps%2C322&linkCode=ll2&tag=oliveirata-20&linkId=bc15bf8dcb6f2b534b8c6d6085103f07&ref_=as_li_ss_tl';
  return `
    <section class="section section--desktop-promo" aria-label="Mais opções de PlayStation 5 na Amazon">
      <div class="container">
        <a href="${url}" class="desktop-promo-banner" target="_blank" rel="sponsored noopener noreferrer" aria-label="Ver mais modelos e ofertas de PlayStation 5 na Amazon">
          <img src="images/wide_promotional_banner_clean_commercial_graphic.webp" alt="Consultar mais opções de PlayStation 5 na Amazon" loading="lazy" decoding="async" width="1774" height="887">
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
          <img src="${b.image}" alt="${b.name}" width="320" height="200" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="bundle-card__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
            <span>${b.name}</span>
          </div>
          <span class="bundle-card__badge">${b.badge}</span>
        </div>
        <div class="bundle-card__content">
          <h3 class="bundle-card__name">${b.name}</h3>
          <p class="bundle-card__desc">${b.specs}</p>
          <a href="${b.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            <strong>${b.cta || 'Consultar na Amazon'}</strong>
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section section--bundles" id="bundles">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Bundles: opções que já reúnem console e jogos</h2>
          <p class="section__subtitle">Combinações selecionadas para quem busca praticidade. Confirme conteúdo, versão e condições na loja.</p>
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
          <img src="${a.image}" alt="${a.name}" width="280" height="280" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <div class="accessory-card__placeholder" style="display:none;align-items:center;justify-content:center;height:100%;color:#999;">
            <span>${a.name}</span>
          </div>
        </div>
        <div class="accessory-card__content">
          <h3 class="accessory-card__name">${a.name}</h3>
          <p class="accessory-card__desc">${a.specs}</p>
          <a href="${a.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
            <strong>${a.cta || 'Consultar na Amazon'}</strong>
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="acessorios">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Acessórios que complementam sua experiência no PS5</h2>
          <p class="section__subtitle">Escolhas orientadas por utilidade real: áudio de estúdio, recarga inteligente e ergonomia para longas sessões.</p>
        </div>
        <div class="accessories__grid">${accessories}</div>
      </div>
    </section>`;
}

function DigitalPartnersSection() {
  const partners = (CONFIG.digitalPartners || []).map((p) => {
    const benefits = (p.benefits || []).map((b) => `<li>${Icons.check} <span>${b}</span></li>`).join('');
    return `
      <div class="partner-card" id="${p.id}">
        <div class="partner-card__header">
          <span class="partner-card__store">${p.store}</span>
          <span class="partner-card__badge">${p.badge}</span>
        </div>
        <div class="partner-card__body">
          <h3 class="partner-card__title">${p.name}</h3>
          <p class="partner-card__desc">${p.description}</p>
          <ul class="partner-card__list">
            ${benefits}
          </ul>
          <div class="partner-card__footer">
            <a href="${p.affiliateUrl}" class="cta-button cta-button--small cta-button--primary" target="_blank" rel="sponsored noopener">
              <strong>${p.cta}</strong>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section section--partners" id="jogos-digitais" aria-label="Jogos digitais e créditos PlayStation">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">Jogos digitais, assinaturas e créditos na PSN</h2>
          <p class="section__subtitle">Opções em parceiros autorizados para recarregar saldo, assinar a PlayStation Plus ou comprar jogos digitais com flexibilidade de pagamento.</p>
        </div>
        <div class="partners__grid">
          ${partners}
        </div>
      </div>
    </section>`;
}

// ─── CTA Final ───────────────────────────────────────────────────────────────

function FinalCTASection() {
  return `
    <section class="section section--cta" id="cta-final">
      <div class="container">
        <div class="cta-final">
          <h2 class="cta-final__title">Pronto para definir sua configuração PlayStation?</h2>
          <p class="cta-final__text">Compare modelos e guias, depois consulte preço e condições atualizadas diretamente na loja antes de finalizar.</p>
          <a href="#consoles" class="cta-button cta-button--primary">
            <strong>Ver opções selecionadas</strong>
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
          <a href="/playstation-5/"><strong>PlayStation 5</strong></a>
          <a href="/gta-6/"><strong>GTA 6</strong></a>
          <a href="/acessorios-ps5/"><strong>Acessórios</strong></a>
          <a href="#destaque"><strong>Destaque</strong></a>
          <a href="#consoles"><strong>Consoles</strong></a>
          <a href="#guia"><strong>Guias</strong></a>
          <a href="#bundles"><strong>Bundles</strong></a>
          <a href="#acessorios"><strong>Acessórios</strong></a>
          <a href="/sobre.html"><strong>Sobre</strong></a>
          <a href="/metodologia-de-curadoria.html"><strong>Metodologia</strong></a>
          <a href="/links-afiliados.html"><strong>Links afiliados</strong></a>
        </div>
        <p class="footer__disclaimer">
          Curadoria Gamer participa do Programa de Associados da Amazon e de redes parceiras de afiliados. Podemos receber comissão por compras qualificadas realizadas por meio dos links indicados, sem nenhum custo adicional para você. Preços, condições e disponibilidade são definidos pelas lojas parceiras e podem mudar a qualquer momento.
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

// ─── Seções Complementares ──────────────────────────────────────────────────

function Gta6HighlightSection() {
  return `
    <section class="section" id="gta6" aria-label="GTA 6 e preparação no PlayStation">
      <div class="container">
        <div class="section__header">
          <h2 class="section__title">GTA 6 e PlayStation 5</h2>
          <p class="section__subtitle">Guias para entender compatibilidade, escolher o PS5 e preparar seu setup com foco no que for confirmado oficialmente.</p>
        </div>
        <div class="guide__grid">
          <a href="/gta-6/" class="guide__card"><h3>HUB GTA 6</h3><p>Veja todos os guias e caminhos de preparação.</p><span class="guide__link"><strong>Explorar hub →</strong></span></a>
          <a href="/gta-6/qual-ps5-comprar-para-gta-6/" class="guide__card"><h3>QUAL PS5 PARA GTA 6?</h3><p>Critérios por perfil para escolher entre Slim e Pro.</p><span class="guide__link"><strong>Ler guia →</strong></span></a>
          <a href="/gta-6/plataformas-e-compatibilidade/" class="guide__card"><h3>COMPATIBILIDADE</h3><p>Como verificar informações com base em fontes oficiais.</p><span class="guide__link"><strong>Ver orientações →</strong></span></a>
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
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Perfil</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Equilíbrio para a maioria dos jogadores</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Entusiastas que priorizam máximo framerate e fidelidade</td></tr>
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Decisão comum</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Excelente custo-benefício em jogos atuais</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Investimento de longo prazo com PSSR e 2TB nativos</td></tr>
              <tr><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);">Próximo passo</td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);"><a href="/playstation-5/ps5-slim/"><strong>Ver página do PS5 Slim</strong></a></td><td style="padding:.75rem;border-bottom:1px solid var(--color-border,#334155);"><a href="/playstation-5/ps5-pro/"><strong>Ver página do PS5 Pro</strong></a></td></tr>
            </tbody>
          </table>
        </div>
        <p style="margin-top:1rem;"><a href="/playstation-5/ps5-slim-vs-ps5-pro/" class="cta-button cta-button--primary"><strong>Abrir comparativo completo</strong></a> <a href="/playstation-5/ps5-digital-vs-com-leitor/" class="cta-button cta-button--outline" style="margin-left:.5rem;"><strong>Digital ou com leitor</strong></a></p>
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
          <a href="/playstation-5/" class="guide__card"><h3>HUB PLAYSTATION 5</h3><p>Comparativos, modelos e páginas de consulta de compra.</p><span class="guide__link"><strong>Explorar →</strong></span></a>
          <a href="/gta-6/" class="guide__card"><h3>HUB GTA 6</h3><p>Guias de preparação e escolha de PS5 com foco no confirmado.</p><span class="guide__link"><strong>Explorar →</strong></span></a>
          <a href="/acessorios-ps5/" class="guide__card"><h3>ACESSÓRIOS PS5</h3><p>SSD, headsets, controles e dicas de setup.</p><span class="guide__link"><strong>Explorar →</strong></span></a>
          <a href="/gta-6/qual-ps5-comprar-para-gta-6/" class="guide__card"><h3>QUAL PS5 PARA GTA 6?</h3><p>Critérios por perfil para decidir com clareza.</p><span class="guide__link"><strong>Ler guia →</strong></span></a>
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
          <p class="section__subtitle">Respostas diretas para dúvidas comuns antes de comparar ou consultar ofertas.</p>
        </div>
        <div style="display:grid;gap:.75rem;">
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>Qual PlayStation 5 devo escolher?</strong></summary><p style="margin-top:.5rem;">Depende do seu perfil: formato (digital ou com leitor), orçamento e prioridades de uso. Comece pelo guia <a href="/playstation-5/qual-playstation-5-comprar/"><strong>qual PS5 comprar</strong></a> e pelo comparativo <a href="/playstation-5/ps5-slim-vs-ps5-pro/"><strong>Slim vs Pro</strong></a>.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>PS5 digital ou com leitor: qual é melhor?</strong></summary><p style="margin-top:.5rem;">Digital faz sentido para quem compra tudo online; com leitor oferece mais flexibilidade para mídia física e discos usados. Veja o <a href="/playstation-5/ps5-digital-vs-com-leitor/"><strong>comparativo completo</strong></a>.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>Os preços e ofertas são garantidos?</strong></summary><p style="margin-top:.5rem;">Não. Preços, condições e disponibilidade são definidos pela loja e podem mudar a qualquer momento. Sempre confirme na página da loja parceira antes de comprar.</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>Como funcionam as opções de jogos digitais e gift cards?</strong></summary><p style="margin-top:.5rem;">Recomendamos opções em parceiros autorizados, como a Hype Games e a Amazon, para recarregar saldo na carteira da PlayStation Store e obter créditos digitais com facilidade de pagamento (como Pix ou cartão de crédito).</p></details>
          <details style="border:1px solid var(--color-border,#334155);border-radius:12px;padding:1rem;"><summary><strong>O site usa links de afiliados?</strong></summary><p style="margin-top:.5rem;">Sim. Podemos receber comissão por compras qualificadas, sem nenhum custo adicional para você. Saiba mais em <a href="/links-afiliados.html"><strong>como funcionam os links afiliados</strong></a>.</p></details>
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
      ${DigitalPartnersSection()}
      ${FeaturedGuidesSection()}
      ${HomeFaqSection()}
      ${FinalCTASection()}
    </main>
    ${Footer()}
  `;
}

// ─── Tracking de Afiliados ──────────────────────────────────────────────────

function initAffiliateTracking() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const isAffiliate = (link.rel && link.rel.includes('sponsored')) || /amazon\./i.test(href) || /hype\.games/i.test(href);
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
  const app = document.getElementById('app');
  if (app && app.children.length === 0) {
    renderPage();
  }
  initMobileCarousels();
  initAffiliateTracking();
});
