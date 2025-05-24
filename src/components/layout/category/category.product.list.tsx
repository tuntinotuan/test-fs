import { categoryProductList } from "@/api/mock.api";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ProductCard from "@/components/product/ProductCard";
import React from "react";

const CategoryProductList = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sản phẩm bán chạy</h2>
        <div className="flex items-center gap-2 text-base text-[#0373F3] cursor-pointer">
          Xem tất cả
          <ArrowRightIcon />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-3 mt-6">
        {categoryProductList.map((item) => (
          <ProductCard
            imageSrc={item.image}
            key={item.image}
            cardWidth={200}
            hiddenBtnBuy
          ></ProductCard>
        ))}
      </div>
    </>
  );
};

export default CategoryProductList;
