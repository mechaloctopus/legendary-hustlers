import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const CANDIDATES = [
  path.join(ROOT, 'public', 'lhc_pics'),
  path.join(ROOT, 'public', 'Lhc_pics'),
];

const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP']);

const LOSSLESS_KEYWORDS = [
  'screenshot',
  'spritesheet',
  'photoshop',
  'card',
  'branding',
  'brand',
  'logo',
  'chicken',
  'chickencowboys',
  'app',
];

function isLosslessBase(baseLower) {
  return LOSSLESS_KEYWORDS.some((k) => baseLower.includes(k));
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(p) {
  try {
    await fs.mkdir(p, { recursive: true });
  } catch {}
}

function naturalCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function optimizeDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => ALLOWED.has(path.extname(n)))
    .sort(naturalCompare);

  const seen = new Set();
  let converted = 0;
  let removedDups = 0;
  let bytesBefore = 0;
  let bytesAfter = 0;

  for (const name of files) {
    const ext = path.extname(name);
    const extLower = ext.toLowerCase();
    const base = name.slice(0, -ext.length);
    const baseLower = base.toLowerCase();

    const src = path.join(dir, name);
    const dest = path.join(dir, `${base}.webp`);

    // If we've already processed this base, delete duplicates
    if (seen.has(baseLower)) {
      try {
        if (src !== dest) {
          const st = await fs.stat(src).catch(() => null);
          if (st) bytesBefore += st.size;
          await fs.unlink(src);
          removedDups++;
          // console.log(`dedup: removed ${name}`);
        }
      } catch {}
      continue;
    }

    // First time seeing this base; convert to webp and remove original
    try {
      const stBefore = await fs.stat(src).catch(() => null);
      if (stBefore) bytesBefore += stBefore.size;

      const img = sharp(src, { failOn: 'none' }).rotate();
      const resized = img.resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });

      const lossless = isLosslessBase(baseLower);
      const webpOpts = lossless
        ? { lossless: true, effort: 4 }
        : { quality: 82, effort: 4, smartSubsample: true };

      await resized.webp(webpOpts).toFile(dest);

      if (src !== dest) {
        await fs.unlink(src);
      }

      const stAfter = await fs.stat(dest).catch(() => null);
      if (stAfter) bytesAfter += stAfter.size;

      converted++;
      seen.add(baseLower);
      // console.log(`✔ ${name} -> ${path.basename(dest)} ${lossless ? '(lossless)' : ''}`);
    } catch (err) {
      console.error(`Failed to optimize ${name}:`, err?.message || err);
    }
  }

  const saved = Math.max(0, bytesBefore - bytesAfter);
  const fmt = (n) => `${(n / (1024 * 1024)).toFixed(2)} MiB`;
  console.log(`Optimized ${converted} images, removed ${removedDups} dups. Size: ${fmt(bytesBefore)} -> ${fmt(bytesAfter)} (saved ${fmt(saved)})`);
}

async function main() {
  let dir = null;
  for (const d of CANDIDATES) {
    if (await pathExists(d)) {
      dir = d;
      break;
    }
  }
  if (!dir) {
    console.log('No photos directory found (public/lhc_pics or public/Lhc_pics). Nothing to do.');
    return;
  }
  await ensureDir(dir);
  await optimizeDir(dir);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

