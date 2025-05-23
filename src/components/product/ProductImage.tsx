import Image from "next/image";
import React from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="p-2">
      <Image src={src} alt={alt} width={237} height={237}></Image>
    </div>
  );
};

export default ProductImage;
