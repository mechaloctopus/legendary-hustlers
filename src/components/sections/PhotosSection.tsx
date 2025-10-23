import fs from "fs";
import path from "path";
import Slideshow from "@/components/ui/Slideshow";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const PHOTOS_DIR = path.join(PUBLIC_DIR, "lhc_pics");

type SlideItem = { src: string; label?: string };

const allowed = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".JPG",
  ".JPEG",
  ".PNG",
  ".GIF",
  ".WEBP",
  ".AVIF",
]);

function prettify(base: string): string {
  // Convert from file base to a short human label: replace separators, add spaces around numbers, title case
  const cleaned = base
    .replace(/[_-]+/g, " ")
    .replace(/([a-zA-Z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([a-zA-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function categorize(nameLower: string): string {
  if (nameLower.includes("lake")) return "Lake";
  if (nameLower.includes("river")) return "River";
  if (nameLower.includes("yakisugi")) return "Yakisugi (Charred Wood)";
  if (
    nameLower.includes("treework") ||
    nameLower.includes("treecrushed") ||
    nameLower.includes("drywall") ||
    nameLower.includes("repair") ||
    nameLower.includes("turf") ||
    nameLower.includes("install") ||
    nameLower.includes("roof") ||
    nameLower.includes("yard") ||
    nameLower.includes("fence") ||
    nameLower.includes("dirt")
  )
    return "Jobs";
  if (
    nameLower.includes("van") ||
    nameLower.includes("f150") ||
    nameLower.includes("truck") ||
    nameLower.includes("tire") ||
    nameLower.includes("changeatire") ||
    nameLower.includes("trailer") ||
    nameLower.includes("trailers")
  )
    return "Vehicles";
  if (
    nameLower.includes("group") ||
    nameLower.includes("family") ||
    nameLower.includes("crew") ||
    nameLower.includes("team") ||
    nameLower.includes("christian") ||
    nameLower.includes("josh")
  )
    return "Team & People";
  if (nameLower.includes("cattlebrand") || nameLower.includes("brand")) return "Branding";
  if (nameLower.includes("card")) return "Cards";
  if (nameLower.includes("chicken") || nameLower.includes("chickencowboys")) return "Chicken Cowboys Dev";
  if (
    nameLower.includes("screenshot") ||
    nameLower.includes("spritesheet") ||
    nameLower.includes("photoshop") ||
    nameLower.includes("app")
  )
    return "Development";
  if (nameLower.includes("mycology") || nameLower.includes("mushroom") || nameLower.includes("fungi")) return "Mycology";
  if (nameLower.includes("sunset") || nameLower.includes("countryside")) return "Scenery & Misc";
  return "Misc";
}

function getGrouped(): { title: string; items: SlideItem[] }[] {
  try {
    const entries = fs.readdirSync(PHOTOS_DIR, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => allowed.has(path.extname(name)))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const seen = new Set<string>();
    const groups = new Map<string, SlideItem[]>();

    for (const file of files) {
      const ext = path.extname(file);
      const base = file.slice(0, -ext.length);
      const baseLower = base.toLowerCase();
      if (seen.has(baseLower)) continue; // dedupe same base across extensions
      seen.add(baseLower);

      const title = categorize(baseLower);
      const label = prettify(base);
      const item: SlideItem = { src: `/lhc_pics/${file}`, label };
      if (!groups.has(title)) groups.set(title, []);
      groups.get(title)!.push(item);
    }

    // Stable ordering of groups
    const ORDER = [
      "Lake",
      "River",
      "Jobs",
      "Yakisugi (Charred Wood)",
      "Mycology",
      "Vehicles",
      "Team & People",
      "Branding",
      "Cards",
      "Chicken Cowboys Dev",
      "Development",
      "Scenery & Misc",
      "Misc",
    ];

    return Array.from(groups.entries())
      .map(([title, items]) => ({ title, items }))
      .sort((a, b) => {
        const ai = ORDER.indexOf(a.title);
        const bi = ORDER.indexOf(b.title);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || a.title.localeCompare(b.title);
      })
      .map((g) => ({ ...g, items: g.items.sort((a, b) => a.src.localeCompare(b.src, undefined, { numeric: true })) }));
  } catch {
    return [];
  }
}

function aspectFor(title: string): string {
  // Pick a reasonable aspect by group
  if (title === "Vehicles" || title === "Lake" || title === "River" || title === "Development" || title === "Branding" || title === "Cards")
    return "aspect-[16/9]";
  return "aspect-[4/5]";
}

export default function PhotosSection() {
  const grouped = getGrouped();

  return (
    <section id="photos" className="py-24 pt-32 diamond-plate relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="font-heavy text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-wider">
              OUR PHOTOS
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-4"></div>
            <p className="font-tactical text-white/90 text-lg font-semibold">
              Organized slideshows with brief labels, inferred from filenames. Tap or hover to pause.
            </p>
          </div>
        </div>

        {grouped.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white border-4 border-gray-400 p-6 text-center">
            <p className="font-tactical text-gray-800">
              No photos found in <span className="font-heavy">/public/lhc_pics</span> yet. Add images (png/jpg/jpeg/webp) and refresh.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {grouped.map((g, i) => (
              <Slideshow key={i} items={g.items} caption={g.title} aspectClass={aspectFor(g.title)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
