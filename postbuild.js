import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(raiz, 'dist');
const internos = ['TODO.md', 'app.config.ts', 'manus-routes.json', 'plan.md', 'postbuild.js'];

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  throw new Error('ERRO: dist/index.html não existe após o build.');
}

for (const arquivo of internos) {
  fs.rmSync(path.join(dist, arquivo), { recursive: true, force: true });
}
console.log('Pós-build concluído. Arquivos internos removidos de dist/.');
