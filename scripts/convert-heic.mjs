import { readdir, readFile, writeFile, unlink, access } from 'fs/promises';
import path from 'path';
import heicConvert from 'heic-convert';

const ROOT = process.cwd();
const PHOTOS_DIR = path.join(ROOT, 'public', 'lhc_pics');

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function nextSequentialName(dir) {
  // Find the next free 4-digit PNG name: 0000.png, 0001.png, ...
  let i = 0;
  while (true) {
    const name = `${i.toString().padStart(4, '0')}.png`;
    const full = path.join(dir, name);
    if (!(await fileExists(full))) return name;
    i++;
  }
}

function isHeic(name) {
  const ext = path.extname(name).toLowerCase();
  return ext === '.heic';
}

async function main() {
  const entries = await readdir(PHOTOS_DIR, { withFileTypes: true });
  const heicFiles = entries
    .filter(e => e.isFile())
    .map(e => e.name)
    .filter(isHeic)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (heicFiles.length === 0) {
    console.log('No HEIC files found in', PHOTOS_DIR);
    return;
  }

  console.log(`Converting ${heicFiles.length} HEIC file(s) to PNG...`);

  let converted = 0;
  for (const name of heicFiles) {
    const srcPath = path.join(PHOTOS_DIR, name);
    try {
      const inputBuffer = await readFile(srcPath);
      const outputBuffer = await heicConvert({ buffer: inputBuffer, format: 'PNG' });
      const outName = await nextSequentialName(PHOTOS_DIR);
      const outPath = path.join(PHOTOS_DIR, outName);
      await writeFile(outPath, outputBuffer);
      await unlink(srcPath);
      converted++;
      console.log(`✔ ${name} -> ${outName}`);
    } catch (err) {
      console.error(`✖ Failed to convert ${name}:`, err);
    }
  }

  console.log(`Done. Converted ${converted} file(s).`);
}

main().catch((e) => {
  console.error('Unexpected error:', e);
  process.exitCode = 1;
});

