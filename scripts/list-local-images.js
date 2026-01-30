const fs = require('fs');
const path = require('path');
const ex = /\.(jpg|jpeg|png|gif|webp)$/i;
const localFiles = [];
function walk(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(f => {
    const fp = path.join(d, f.name);
    if (f.isDirectory()) walk(fp);
    else if (ex.test(f.name) && !f.name.endsWith('.backup')) localFiles.push(fp.replace(/^public[\\/]/, '').replace(/\\/g, '/'));
  });
}
walk('public');
fs.writeFileSync('local-image-list.txt', localFiles.join('\n'));
console.log('Wrote local-image-list.txt with', localFiles.length, 'files');
