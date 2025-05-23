import React from "react";
import CameraIcon from "../icons/CameraIcon";
import SearchIcon from "../icons/SearchIcon";

const SearchHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 w-[739px] border-2 border-[#0373F3] rounded-full p-2">
      <input
        type="search"
        className={`flex-1 ml-3`}
        placeholder="Tìm sản phẩm"
      />
      <div className="flex items-center gap-3">
        <CameraIcon />
        <div className="py-3 px-6 bg-[#0373F3] text-white rounded-full cursor-pointer">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
