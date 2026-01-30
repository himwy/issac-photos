"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

// Check if URL is from Cloudinary
function isCloudinaryUrl(url: string): boolean {
  return url.includes("res.cloudinary.com");
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const baseClassName = `
    ${className}
    duration-700 ease-in-out
    ${isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"}
  `;

  // For Cloudinary URLs, use regular img tag to avoid double optimization
  if (isCloudinaryUrl(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`${baseClassName} ${fill ? "absolute inset-0 w-full h-full object-cover" : ""}`}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoading(false)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={baseClassName}
      onLoad={() => setIsLoading(false)}
    />
  );
}
