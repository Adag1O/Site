"use client";

import Image from "next/image";

export function ProductSlider({ ProductSlider }: { ProductSlider: string[] }) {
  return (
    <div>
      {ProductSlider.map((product, index) => (
        <Image 
          key={index} 
          src={product} 
          alt={`Product ${index + 1}`} 
          width={200} 
          height={200} 
        />
      ))}
    </div>
  );
}
