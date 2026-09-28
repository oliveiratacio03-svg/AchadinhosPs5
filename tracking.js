/**
 * Camada de tracking preparada para integração futura com Google Analytics / Google Ads.
 * 
 * Eventos suportados:
 * - view_landing
 * - click_channel
 * - click_product
 * - click_affiliate
 * - click_amazon
 * - click_mercadolivre
 * - click_anchor
 * 
 * Para ativar uma integração real, basta descomentar e implementar
 * a função trackEvent() abaixo.
 */

const Tracking = (() => {
  /**
   * Envia um evento para a camada de dados.
   * Futuramente: gtag('event', eventName, params) ou dataLayer.push({...})
   * 
   * @param {string} eventName - Nome do evento (ex: 'click_channel')
   * @param {Object} params - Parâmetros adicionais do evento
   */
  function trackEvent(eventName, params = {}) {
    // ── Placeholder para integração futura ──────────────────────────────
    // Exemplo com gtag:
    // if (typeof gtag === 'function') {
    //   gtag('event', eventName, params);
    // }
    //
    // Exemplo com dataLayer:
    // if (typeof dataLayer !== 'undefined') {
    //   dataLayer.push({ event: eventName, ...params });
    // }

    // Log em desenvolvimento (remover em produção se desejar)
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      console.info(`[Tracking] ${eventName}`, params);
    }
  }

  // ─── Eventos públicos ───────────────────────────────────────────────────

  function viewLanding() {
    trackEvent('view_landing', {
      page: location.pathname,
      timestamp: new Date().toISOString()
    });
  }

  function clickChannel(source = 'unknown') {
    trackEvent('click_channel', {
      source, // ex: 'hero', 'apos-consoles', 'cta-final'
      url: CONFIG.channelUrl,
      timestamp: new Date().toISOString()
    });
  }

  function clickProduct(productId, productName, category) {
    trackEvent('click_product', {
      product_id: productId,
      product_name: productName,
      category: category,
      timestamp: new Date().toISOString()
    });
  }

  function clickAffiliate(productId, productName, network) {
    trackEvent('click_affiliate', {
      product_id: productId,
      product_name: productName,
      network: network, // ex: 'amazon', 'mercadolivre'
      timestamp: new Date().toISOString()
    });
  }

  function clickAnchor(source) {
    trackEvent('click_anchor', {
      source, // ex: 'hero'
      timestamp: new Date().toISOString()
    });
  }

  function clickAmazon(productId, productName) {
    trackEvent('click_amazon', {
      product_id: productId,
      product_name: productName,
      timestamp: new Date().toISOString()
    });
  }

  function clickMercadoLivre(productId, productName) {
    trackEvent('click_mercadolivre', {
      product_id: productId,
      product_name: productName,
      timestamp: new Date().toISOString()
    });
  }

  return {
    viewLanding,
    clickChannel,
    clickProduct,
    clickAffiliate,
    clickAnchor,
    clickAmazon,
    clickMercadoLivre
  };
})();
