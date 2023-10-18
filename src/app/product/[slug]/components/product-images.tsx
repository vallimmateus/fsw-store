"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ProductImagesProps = {
  imageUrls: string[];
  name: string;
};

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
        />
      </div>
      <div className="mx-auto mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            onClick={() => handleImageClick(imageUrl)}
            key={imageUrl}
            className={cn(
              "flex aspect-square h-[100px] items-center justify-center rounded-lg bg-accent",
              {
                "border-2 border-solid border-primary":
                  imageUrl === currentImage,
              },
            )}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
