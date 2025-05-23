import ArrowForwardIcon from "@/components/icons/ArrowForwardIcon";
import MapIcon from "@/components/icons/MapIcon";
import React from "react";

const FooterDependent = () => {
  return (
    <div className="w-full bg-[#E6F1FF]">
      <div className="page-container flex items-center justify-between">
        <div className="flex items-center gap-4 py-9">
          <MapIcon />
          <p className="text-3xl">Xem hệ thống 88 cửa hàng trên toàn quốc</p>
        </div>
        <button className="flex items-center gap-3 text-[#025FCA] bg-white rounded-full py-4 px-6">
          <p className="text-2xl">Xem ngay</p>
          <ArrowForwardIcon></ArrowForwardIcon>
        </button>
      </div>
    </div>
  );
};

export default FooterDependent;
