import React from "react";
import ArrowRightIcon from "../icons/arrow/ArrowRightIcon";

const NavPage = () => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-4 text-[#919EAB]">
        Trang chủ
        <ArrowRightIcon></ArrowRightIcon>
      </div>
      <p className="font-bold text-blue700 cursor-pointer">Sản phẩm</p>
    </div>
  );
};

export default NavPage;
