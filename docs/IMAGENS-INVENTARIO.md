# Inventário de imagens do projeto

Data do inventário: 2026-11-13  
Pasta analisada: `images/` (recursivo)

## Resumo
- **Total de arquivos:** 12
- **Formatos:** PNG (4), WEBP (5), SVG (3)
- **Logo oficial preservada:** `images/Sol e Lua.png` (não renomeada, não substituída)

## Inventário por arquivo

| Arquivo | Tipo | Tamanho | Dimensões* | Conteúdo provável / observação | Melhor utilização recomendada | Status de uso |
|---|---|---:|---:|---|---|---|
| `images/Sol e Lua.png` | PNG | 45,9 KB | 1920x1080 | Logo oficial da marca (símbolo + tipografia) | Header/navegação, favicon social/OG, identidade institucional | **Em uso** (header, OG/Twitter, páginas internas) |
| `images/Sol.png` | PNG | 44,1 KB | 1920x1080 | Variação de marca/logo | Reserva para variações institucionais/campanhas (avaliar contraste/fundo) | Não utilizado atualmente |
| `images/wide_promotional_banner_clean_commercial_graphic.png.png` | PNG | 1475,9 KB | 1774x887 (2:1) | Banner horizontal promocional (categoria PS5/Amazon) | Banner largo desktop em seções de ofertas/categoria; otimizar/comprimir para performance | **Em uso** (banner desktop na home) |
| `images/prime-mais-opcoes-mobile.png` | PNG | 1604,3 KB | 1024x1536 (2:3) | Banner vertical “mais opções” (mobile) | Card/banner em carrosséis mobile ou seções de descoberta; otimizar peso | **Em uso** (card “mais opções” em carrosséis) |
| `images/imgi_85_71j0ScLcfLL._AC_SL1152_.webp` | WEBP | 96,4 KB | n/d** | Imagem de produto/bundle relacionada a GTA (nome sugere bundle GTA 6 + PS5) | Destaque visual em hub/páginas GTA 6 e seções editoriais de preparação/compra; usar com contexto editorial (sem alegar parceria oficial) | Disponível para uso (pode ser integrado em páginas GTA 6) |
| `images/products/bundle-gta6-ps5-slim-digital.webp` | WEBP | 48,9 KB | n/d** | Arte/imagem de bundle GTA 6 + PS5 Slim Digital | Cards de curadoria, destaque em páginas GTA 6/PS5/bundles | Disponível (candidato a uso em GTA 6 e ofertas) |
| `images/products/bundle-gta6-ps5-slim-digital.svg` | SVG | 0,7 KB | vetorial | Placeholder/ícone vetorial de bundle GTA 6 | Fallback leve, ícone decorativo ou placeholder quando imagem raster não carregar | Disponível |
| `images/products/ps5-slim-digital-astro-gt7.webp` | WEBP | 13,9 KB | n/d** | Bundle PS5 Slim Digital + Astro Bot + Gran Turismo 7 | Cards de produto/bundle em home e páginas comerciais PS5 | Disponível (alinhado ao bundle em destaque na curadoria) |
| `images/products/ps5-slim-digital-astro-gt7.svg` | SVG | 0,6 KB | vetorial | Placeholder/ícone vetorial do bundle Astro/GT7 | Fallback/placeholder | Disponível |
| `images/products/ps5-edition-digital-825gb.svg` | SVG | 0,6 KB | vetorial | Placeholder/ícone vetorial PS5 edição digital 825GB | Fallback/placeholder em cards | Disponível |
| `images/products/imgi_56_21GTCKS0jYL._AC_.webp` | WEBP | 2,6 KB | n/d** | Miniatura/produto (baixa resolução aparente pelo peso) | Somente thumbnail pequeno ou fallback; evitar uso em banners/destaques grandes | Disponível (uso limitado) |
| `images/products/imgi_56_21GTCKS0jYL._AC_-optimized.webp` | WEBP | 4,9 KB | n/d** | Versão otimizada da miniatura acima | Mesmo uso limitado (thumbnail/fallback) | Disponível (uso limitado) |

\* Dimensões obtidas para PNGs quando possível; WEBP/SVG não tiveram dimensões extraídas no inventário automatizado deste ambiente.  
\** Recomenda-se validar proporção/resolução visual antes de uso em banners hero.

## Lacunas observadas (materiais não encontrados na pasta)
- Imagens dedicadas e nomeadas explicitamente para **PS5 Pro** (produto isolado em alta resolução).
- Imagens dedicadas para **Hype Games** (loja/marca) além de possíveis referências indiretas não identificáveis pelo nome.
- Imagens editoriais/cinematográficas amplas específicas de **GTA 6** (key art oficial/licenciada de uso permitido para o site) além dos arquivos de bundle identificados.
- Capas específicas para seções/categorias (ex.: acessório isolado em alta qualidade, lifestyle/setup premium).

## Recomendações de aplicação (direção editorial/premium)
- **GTA 6:** usar imagens de bundle disponíveis com tratamento cinematográfico em seções de destaque (hero de hub/blocos escuros estratégicos), sempre com enquadramento editorial e sem sugerir parceria oficial com Rockstar/PlayStation/lojas.
- **PlayStation 5:** priorizar imagens de produto com fundo limpo e boa proporção; usar `ps5-slim-digital-astro-gt7.webp` em destaques comerciais/curadoria; evitar upscale de miniaturas.
- **Banners:** `wide_promotional_banner_clean_commercial_graphic.png.png` para desktop e `prime-mais-opcoes-mobile.png` para mobile/descoberta; **otimizar peso** (compressão/conversão) para melhorar performance/CWV.
- **Performance:** definir `width`/`height` quando possível, manter `loading="lazy"` fora da dobra, e considerar versões otimizadas para imagens >500 KB.
- **Conformidade:** usar apenas imagens com direito de uso adequado; não apresentar a Curadoria Gamer como loja oficial ou parceira de Rockstar, PlayStation ou Hype Games.

## Próximas ações sugeridas
1. Integrar `bundle-gta6-ps5-slim-digital.webp` e/ou `imgi_85_71j0ScLcfLL._AC_SL1152_.webp` nos hubs/páginas de GTA 6 com contexto editorial.
2. Integrar `ps5-slim-digital-astro-gt7.webp` em seções de recomendação PS5 onde fizer sentido.
3. Otimizar PNGs pesados de banner para reduzir impacto em LCP/carregamento mobile.
4. Adicionar novos assets quando disponíveis (PS5 Pro isolado, lifestyle premium, capas por categoria) seguindo a identidade definida.
