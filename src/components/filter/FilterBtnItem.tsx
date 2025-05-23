import React from "react";

type FilterBtnItemProps = {
  title: string;
};

const FilterBtnItem = ({ title }: FilterBtnItemProps) => {
  return (
    <div className="flex items-center justify-center border border-gray-200 rounded py-2">
      {title}
    </div>
  );
};

export default FilterBtnItem;
