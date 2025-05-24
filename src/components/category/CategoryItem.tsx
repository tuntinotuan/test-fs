import Image from "next/image";
import React from "react";

type CategoryItemProps = {
  title: string;
  src: string;
  alt: string;
};

const CategoryItem = ({ title, src, alt }: CategoryItemProps) => {
  return (
    <div className="w-[342px] h-[94px] flex items-center gap-4 bg-white py-3 px-4 rounded-xl cursor-pointer">
      <Image src={src} alt={alt} width={70} height={70}></Image>
      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;
