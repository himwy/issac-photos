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

export function OptimizedImage({
  src,
  alt,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={`
        ${className}
        duration-700 ease-in-out
        ${isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"}
      `}
      onLoad={() => setIsLoading(false)}
    />
  );
}
