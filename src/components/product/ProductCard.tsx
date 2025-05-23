import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

type ProductCardProps = {
  imageSrc: string;
};

const ProductCard = ({ imageSrc }: ProductCardProps) => {
  return (
    <div className="w-[252px] flex flex-col gap-2 bg-white rounded-lg overflow-hidden">
      <ProductImage src={imageSrc} alt="product-image-1" />
      <ProductContent />
    </div>
  );
};

export default ProductCard;
