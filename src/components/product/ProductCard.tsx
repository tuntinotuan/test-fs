import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";

type ProductCardProps = {
  imageSrc: string;
  cardWidth?: number;
  hiddenBtnBuy?: boolean;
};

const ProductCard = ({
  imageSrc,
  cardWidth,
  hiddenBtnBuy = false,
}: ProductCardProps) => {
  return (
    <div
      className="w-[252px] flex flex-col gap-2 bg-white hover:shadow-md rounded-lg overflow-hidden transition-all"
      style={{ width: cardWidth }}
    >
      <ProductImage src={imageSrc} alt="product-image-1" />
      <ProductContent hiddenBtnBuy={hiddenBtnBuy} />
    </div>
  );
};

export default ProductCard;
