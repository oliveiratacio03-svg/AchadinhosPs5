const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.js');
let content = fs.readFileSync(configPath, 'utf8');

// Substitui todos os links de afiliado pelo link padrão
const defaultLink = 'https://link.amazon/A08766HJb';
const regex = /affiliateUrl:\s*'https:\/\/www\.amazon\.com\.br[^']*'/g;
content = content.replace(regex, `affiliateUrl: '${defaultLink}'`);

fs.writeFileSync(configPath, content);
console.log('Todos os links atualizados para:', defaultLink);
