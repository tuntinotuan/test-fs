import React from "react";
import LockIcon from "../../icons/LockIcon";
import FreeShipIcon from "../../icons/FreeShipIcon";
import TruckIcon from "../../icons/TruckIcon";
import ReturnIcon from "../../icons/ReturnIcon";

const HomeServiceList = () => {
  const serviceLists = [
    {
      icon: <LockIcon />,
      title: "Hỗ trợ 24/7",
    },
    {
      icon: <FreeShipIcon />,
      title: "Miễn phí vận chuyển",
    },
    {
      icon: <TruckIcon />,
      title: "Giao hàng nhanh 2h",
    },
    {
      icon: <ReturnIcon />,
      title: "30 ngày đổi trả",
    },
  ];
  return (
    <div className="flex items-center gap-5">
      {serviceLists.map((item) => (
        <div key={item.title} className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default HomeServiceList;
