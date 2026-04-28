import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const inputDir = join(root, 'public', 'images', 'hero');
const outputDir = join(root, 'public', 'images', 'hero', 'optimized');

mkdirSync(outputDir, { recursive: true });

const files = Array.from({ length: 7 }, (_, i) => `carousel_${i}.jpg`);

for (const file of files) {
  const input = join(inputDir, file);
  const name = file.replace('.jpg', '.webp');
  const output = join(outputDir, name);

  const info = await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  const inputStat = (await import('fs')).statSync(input);
  console.log(
    `${file} → ${name}  ${(inputStat.size / 1024 / 1024).toFixed(1)}MB → ${(info.size / 1024 / 1024).toFixed(2)}MB`
  );
}

console.log('\nDone.');
