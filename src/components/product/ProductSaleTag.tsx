import React from "react";
import FireIcon from "../icons/FireIcon";

const ProductSaleTag = () => {
  return (
    <div className="w-[128px] flex items-center gap-2 bg-gradient-to-br from-[#FFD666] to-[#FFAB00] rounded-full p-2">
      <FireIcon />
      <p className="font-semibold text-[#7A0916]">Giá cực sốc</p>
    </div>
  );
};

export default ProductSaleTag;
