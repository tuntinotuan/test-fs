import React from "react";
import Button from "../../button/Button";
import VietnamIcon from "../../icons/VietnamIcon";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";

const HeaderControl = () => {
  const controlLists = [
    {
      icon: <VietnamIcon />,
      title: "VI",
    },
    {
      icon: (
        <div className="relative">
          <CartIcon />
          <div className="absolute -top-1/2 -right-1/2 w-6 h-6 flex items-center justify-center  rounded-full bg-[#FF5630] text-white">
            12
          </div>
        </div>
      ),
      title: "Giỏ hàng",
    },
    {
      icon: <UserIcon />,
      title: "Tài khoản",
    },
  ];
  return (
    <div className="flex items-center gap-8">
      {controlLists.map((item) => (
        <Button key={item.title}>
          {item.icon}
          <p className="shrink-0">{item.title}</p>
        </Button>
      ))}
    </div>
  );
};

export default HeaderControl;
