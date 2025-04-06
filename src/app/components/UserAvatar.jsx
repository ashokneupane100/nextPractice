// src/app/components/UserAvatar.jsx
"use client";

import Image from "next/image";

export default function UserAvatar({ src, alt }) {
  return (
    <Image
      src={src}
      width={48}
      height={48}
      alt={alt}
      className="rounded-full mx-auto"
      placeholder="blur"
      blurDataURL="/placeholder.png"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  );
}