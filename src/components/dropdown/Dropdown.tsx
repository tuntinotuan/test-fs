import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowDownIcon from "../icons/ArrowDownIcon";
const Dropdown = () => {
  return (
    <div className="flex items-center gap-2 bg-[#0155C6] text-white rounded-lg p-[15px]">
      <MenuRoundedIcon></MenuRoundedIcon>
      Danh mục sản phẩm
      <ArrowDownIcon></ArrowDownIcon>
    </div>
  );
};

export default Dropdown;
