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

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = "do7btffiq";

// Convert public_id to Cloudinary URL with automatic optimization
function toCloudinaryUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}

// All images from Cloudinary organized by folder
const cloudinaryImages = [
  "Events/BLAST Premier Hong Kong Rivals 2025/Cover Photo For Blast HK",
  "Events/BLAST Premier Hong Kong Rivals 2025/image",
  "Events/BLAST Premier Hong Kong Rivals 2025/DSC02412-7",
  "Events/Acer Predator League Hong Kong 2026/DSC09925",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/Untitledbhjbb-1",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/image",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/DSC01504",
  "Events/HKU French Society Boat Party 2025/cover",
  "Events/HKU French Society Boat Party 2025/DSC00592",
  "Events/HKU French Society Boat Party 2025/DSC00469",
  "Events/HKU French Society Boat Party 2025/DSC00346",
  "Events/White Summer Terence Lam 2025/DSC09690-2",
  "Events/沙田九約太平清醮/cover",
  "Events/沙田九約太平清醮/cover_",
  "Events/沙田九約太平清醮/DSC04310",
  "Events/沙田九約太平清醮/DSC03892",
  "Events/沙田九約太平清醮/DSC03859",
  "Events/沙田九約太平清醮/DSC03802",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/cover photo",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/DSC09170",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/DSC09128",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/Cover",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC07005-4",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02363",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02158-3",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02156-2",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC01865",
  "Portraits/image",
  "Portraits/DSC09676",
  "Portraits/DSC09591",
  "Portraits/DSC06514-3",
  "Portraits/DSC01586-4",
];

// Album descriptions
const albumDescriptions: Record<string, string> = {
  "Acer Predator League Hong Kong 2026": "Coverage of the Acer Predator League esports tournament in Hong Kong.",
  "BLAST Premier Hong Kong Rivals 2025": "Professional CS2 tournament featuring top international teams.",
  "HKJC Gentlemen_s Raceday 2026 - PER SE": "Elegant moments from the Hong Kong Jockey Club Gentlemen's Raceday.",
  "HKU French Society Boat Party 2025": "A vibrant boat party organized by HKU French Society.",
  "White Summer Terence Lam 2025": "Concert photography from Terence Lam's White Summer event.",
  "沙田九約太平清醮": "Traditional Jiao Festival celebrations in Sha Tin.",
  "觀塘區電子競技大賽暨體驗日2025 - CS2 3v3": "Kwun Tong District esports competition and experience day.",
  "HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)": "Ultimate frisbee match between Ninety-nine and Siempre.",
};

function getAlbumDescription(folderName: string): string {
  return albumDescriptions[folderName] || "Photos from this event.";
}

// Get cover image (prioritize files with "cover" in name)
function getCoverImage(images: string[]): string {
  const coverImage = images.find((img) =>
    img.toLowerCase().includes("cover")
  );
  return coverImage || images[0] || "";
}

// Parse Cloudinary images into albums
function parseAlbums(category: "events" | "sports"): Album[] {
  const categoryFolder = category === "events" ? "Events" : "Sports";
  
  // Group images by album folder
  const albumMap = new Map<string, string[]>();
  
  for (const publicId of cloudinaryImages) {
    if (publicId.startsWith(categoryFolder + "/")) {
      const parts = publicId.split("/");
      if (parts.length >= 3) {
        const albumName = parts[1];
        if (!albumMap.has(albumName)) {
          albumMap.set(albumName, []);
        }
        albumMap.get(albumName)!.push(publicId);
      }
    }
  }
  
  // Convert to Album array
  const albums: Album[] = [];
  
  for (const [albumName, images] of albumMap) {
    const coverImage = getCoverImage(images);
    
    albums.push({
      id: encodeURIComponent(albumName),
      title: albumName,
      category,
      coverImage: toCloudinaryUrl(coverImage),
      images: images.map(toCloudinaryUrl),
      description: getAlbumDescription(albumName),
    });
  }
  
  return albums;
}

export function getAlbums(category: "events" | "sports"): Album[] {
  return parseAlbums(category);
}

export function getAlbum(
  category: "events" | "sports",
  id: string
): Album | null {
  const albums = getAlbums(category);
  return albums.find((album) => album.id === id) || null;
}

export function getPortraits(): PortraitImage[] {
  const portraits = cloudinaryImages.filter((id) => id.startsWith("Portraits/"));
  
  return portraits.map((publicId) => ({
    src: toCloudinaryUrl(publicId),
    alt: publicId.split("/").pop() || "",
  }));
}
