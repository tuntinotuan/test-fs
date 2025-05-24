import ButtonFilter from "@/components/button/ButtonFilter";
import Dropdown from "@/components/dropdown/Dropdown";
import React, { useState } from "react";

const ProductMenuFilter = () => {
  const btnList = ["Liên quan", "Bán chạy", "Mới nhất", "Nổi bật"];
  const [currentBtnActive, setCurrentBtnActive] = useState<string>(btnList[0]);
  const [priceSort, setPriceSort] = useState<"asc" | "desc">("asc");
  return (
    <div className="flex items-center justify-between flex-wrap">
      <p className="text-xl font-semibold">Danh sách sản phẩm</p>
      <div className="flex items-center flex-wrap gap-3">
        <p className="mr-3">Sắp xếp theo</p>
        {btnList.map((item) => (
          <ButtonFilter
            key={item}
            currentBtnActive={currentBtnActive}
            onClick={() => setCurrentBtnActive(item)}
          >
            {item}
          </ButtonFilter>
        ))}
        <Dropdown
          name={priceSort === "asc" ? "Giá: Cao → Thấp" : "Giá: Thấp → Cao"}
          className="bg-transparent !text-black"
        >
          <div className="bg-white rounded shadow-sm overflow-hidden">
            <p
              className="hover:bg-gray-200 p-2 transition-all"
              onClick={() => setPriceSort("asc")}
            >
              Giá: Thấp → Cao
            </p>
            <p
              className="hover:bg-gray-200 p-2 transition-all"
              onClick={() => setPriceSort("desc")}
            >
              Giá: Cao → Thấp
            </p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProductMenuFilter;
