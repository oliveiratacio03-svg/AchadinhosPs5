const sharp = require('sharp');
const path = require('path');

const productsDir = path.join(__dirname, 'images', 'products');

const images = [
  'imgi_118_61S0ZRxKJFL._AC_SL1500_.webp',
  'imgi_153_71WCygaQDAL._AC_SL1500_.webp',
  'imgi_56_21GTCKS0jYL._AC_.webp'
];

async function resize() {
  for (const image of images) {
    const inputPath = path.join(productsDir, image);
    const outputPath = path.join(productsDir, image.replace('.webp', '-optimized.webp'));
    
    try {
      const metadata = await sharp(inputPath).metadata();
      console.log(`${image}: ${metadata.width}x${metadata.height}`);
      
      // Redimensiona para 800px de largura, mantendo proporção, e corta para 16:9 se necessário
      await sharp(inputPath)
        .resize(800, 450, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`  -> ${outputPath} (800x450)`);
    } catch (err) {
      console.error(`Erro ao processar ${image}:`, err.message);
    }
  }
}

resize();
