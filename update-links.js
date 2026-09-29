const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.js');
let content = fs.readFileSync(configPath, 'utf8');

// Substitui todos os links de afiliado pelo novo link
const newLink = 'https://link.amazon/A09KY4FIw';
const regex = /affiliateUrl:\s*'https:\/\/link\.amazon\/[^']*'/g;
content = content.replace(regex, `affiliateUrl: '${newLink}'`);

fs.writeFileSync(configPath, content);
console.log('Todos os links atualizados para:', newLink);
