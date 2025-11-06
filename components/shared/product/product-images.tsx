"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export default function ProductImages({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt={`Product image ${currentImage}`}
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex gap-x-2">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentImage(index)}
            className={cn(
              "border cursor-pointer hover:border-orange-200",
              currentImage === index && "border-orange-600",
            )}
          >
            <Image
              src={image}
              alt={`Product Image ${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
