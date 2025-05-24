import { productList } from "@/api/mock.api";
import ProductCard from "@/components/product/ProductCard";
import React from "react";

const ProductCardList = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap mt-5">
      {productList.map((item, index) => (
        <ProductCard key={index} imageSrc={item.image}></ProductCard>
      ))}
    </div>
  );
};

export default ProductCardList;
