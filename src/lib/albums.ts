import fs from "fs";
import path from "path";

export interface Album {
  id: string;
  title: string;
  category: "events" | "sports";
  coverImage: string;
  images: string[];
  description: string;
}

export interface PortraitImage {
  src: string;
  alt: string;
}

// Album descriptions - customize these for each album
// Key should match the folder name exactly
const albumDescriptions: Record<string, string> = {
  // Events
  "Acer Predator League Hong Kong 2026": "Coverage of the Acer Predator League esports tournament in Hong Kong.",
  "BLAST Premier Hong Kong Rivals 2025": "Professional CS2 tournament featuring top international teams.",
  "HKJC Gentlemen_s Raceday 2026 - PER SE": "Elegant moments from the Hong Kong Jockey Club Gentlemen's Raceday.",
  "HKU French Society Boat Party 2025": "A vibrant boat party organized by HKU French Society.",
  "White Summer Terence Lam 2025": "Concert photography from Terence Lam's White Summer event.",
  "沙田九約太平清醮": "Traditional Jiao Festival celebrations in Sha Tin.",
  "觀塘區電子競技大賽暨體驗日2025 - CS2 3v3": "Kwun Tong District esports competition and experience day.",
  // Sports
  "HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)": "Ultimate frisbee match between Ninety-nine and Siempre.",
};

// Get description for an album, with fallback
function getAlbumDescription(folderName: string): string {
  return albumDescriptions[folderName] || "Photos from this event.";
}

// Get the cover image for an album (prioritize files with "cover" in name)
function getCoverImage(images: string[]): string {
  const coverImage = images.find((img) =>
    img.toLowerCase().includes("cover")
  );
  return coverImage || images[0] || "";
}

// Scan a category folder and return albums
export function getAlbums(category: "events" | "sports"): Album[] {
  const categoryFolder = category === "events" ? "Events" : "Sports";
  const publicPath = path.join(process.cwd(), "public", categoryFolder);

  if (!fs.existsSync(publicPath)) {
    return [];
  }

  const folders = fs.readdirSync(publicPath, { withFileTypes: true });

  return folders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      const folderPath = path.join(publicPath, dirent.name);
      const files = fs.readdirSync(folderPath);
      const images = files.filter((file) =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );

      const coverImage = getCoverImage(images);
      const id = encodeURIComponent(dirent.name);

      return {
        id,
        title: dirent.name,
        category,
        coverImage: `/${categoryFolder}/${encodeURIComponent(dirent.name)}/${encodeURIComponent(coverImage)}`,
        images: images.map(
          (img) => `/${categoryFolder}/${encodeURIComponent(dirent.name)}/${encodeURIComponent(img)}`
        ),
        description: getAlbumDescription(dirent.name),
      };
    })
    .filter((album) => album.images.length > 0);
}

// Get a specific album by category and id
export function getAlbum(
  category: "events" | "sports",
  id: string
): Album | null {
  const albums = getAlbums(category);
  return albums.find((album) => album.id === id) || null;
}

// Get portrait images
export function getPortraits(): PortraitImage[] {
  const publicPath = path.join(process.cwd(), "public", "Portraits");

  if (!fs.existsSync(publicPath)) {
    return [];
  }

  const files = fs.readdirSync(publicPath);
  const images = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  return images.map((img) => ({
    src: `/Portraits/${encodeURIComponent(img)}`,
    alt: img.replace(/\.[^/.]+$/, ""),
  }));
}
