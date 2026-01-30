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

// Convert public_id to Cloudinary URL with automatic optimization and resizing
function toCloudinaryUrl(publicId: string, width: number = 1200): string {
  // w_ for width, c_limit to not upscale, f_auto for format, q_auto for quality
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},c_limit,f_auto,q_auto/${publicId}`;
}

// For thumbnails/covers use smaller size
function toCloudinaryThumbnail(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_600,c_limit,f_auto,q_auto/${publicId}`;
}

// All images from Cloudinary organized by folder (auto-generated)
const cloudinaryImages = [
  "Portraits/DSC03874-3.jpg",
  "Portraits/DSC06514-3.jpg",
  "Portraits/DSC02706.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC06926.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC06905.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC06838.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02375.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02353-2.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02329.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02158-6.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02104.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC01955-4.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC01945-2.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC01890.jpg",
  "Events/White Summer Terence Lam 2025/DSC09805-2.jpg",
  "Events/White Summer Terence Lam 2025/DSC09690-3.jpg",
  "Events/BLAST Premier Hong Kong Rivals 2025/Cover Photo For Blast HK.jpg",
  "Portraits/image.png",
  "Portraits/DSC09676.jpg",
  "Portraits/DSC09591.jpg",
  "Portraits/DSC01586-4.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC07005-4.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02363.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02156-2.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC01865.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02363.jpg",
  "Sports/HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/Cover.jpg",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/DSC09170.jpg",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/DSC09128.jpg",
  "Events/觀塘區電子競技大賽暨體驗日2025 - CS2 3v3/cover photo.jpg",
  "Events/沙田九約太平清醮/DSC04310.jpg",
  "Events/沙田九約太平清醮/DSC03892.jpg",
  "Events/沙田九約太平清醮/DSC03859.jpg",
  "Events/沙田九約太平清醮/DSC03802.jpg",
  "Events/沙田九約太平清醮/cover_.jpg",
  "Events/沙田九約太平清醮/cover.jpg",
  "Events/White Summer Terence Lam 2025/DSC09690-2.jpg",
  "Events/HKU French Society Boat Party 2025/DSC00592.jpg",
  "Events/HKU French Society Boat Party 2025/DSC00469.jpg",
  "Events/HKU French Society Boat Party 2025/DSC00346.jpg",
  "Events/HKU French Society Boat Party 2025/cover.jpg",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/Untitledbhjbb-1.jpg",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/image.png",
  "Events/HKJC Gentlemen_s Raceday 2026 - PER SE/DSC01504.jpg",
  "Events/BLAST Premier Hong Kong Rivals 2025/image.jpg",
  "Events/BLAST Premier Hong Kong Rivals 2025/DSC02412-7.jpg",
  "Events/Acer Predator League Hong Kong 2026/DSC09925.jpg",
];

// Album descriptions
const albumDescriptions: Record<string, string> = {
  "Acer Predator League Hong Kong 2026": "Coverage of the Acer Predator League esports tournament in Hong Kong.",
  "BLAST Premier Hong Kong Rivals 2025": "Professional CS2 tournament featuring top international teams.",
  "HKJC Gentlemen_s Raceday 2026 - PER SE": "PER SE's moment from HKJC Gentlemen's Raceday",
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
  // Special case for HKFDF event: use DSC02363.jpg as cover
  if (images.some(img => img.includes("HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02363.jpg"))) {
    const hkfdfCover = images.find(img => img.includes("HKFDF 2025 Hong Kong Mixed club league - 2 (Ninety-nine v Siempre)/DSC02363.jpg"));
    if (hkfdfCover) return hkfdfCover;
  }
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
    
    // For display, replace _ with ' in this album's title
    let displayTitle = albumName;
    let displayDescription = getAlbumDescription(albumName);
    if (albumName === "HKJC Gentlemen_s Raceday 2026 - PER SE") {
      displayTitle = "HKJC Gentlemen's Raceday 2026 - PER SE";
      displayDescription = getAlbumDescription("HKJC Gentlemen's Raceday 2026 - PER SE");
    }
    albums.push({
      id: encodeURIComponent(albumName),
      title: displayTitle,
      category,
      coverImage: toCloudinaryThumbnail(coverImage),
      images: images.map(img => toCloudinaryUrl(img)),
      description: displayDescription,
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
  // Try direct match first, then try decoding
  const decodedId = decodeURIComponent(id);
  return albums.find((album) => 
    album.id === id || 
    album.id === decodedId || 
    decodeURIComponent(album.id) === decodedId
  ) || null;
}

export function getPortraits(): PortraitImage[] {
  const portraits = cloudinaryImages.filter((id) => id.startsWith("Portraits/"));
  
  return portraits.map((publicId) => ({
    src: toCloudinaryUrl(publicId, 800),
    alt: publicId.split("/").pop() || "",
  }));
}
