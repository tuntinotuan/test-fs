import React, { useEffect, useRef, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { useHover } from "usehooks-ts";
const Dropdown = ({
  children,
  className,
  activeClassName,
  name,
}: {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  name: string;
}) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();
  const isHovered = useHover(hoverRef);
  useEffect(() => {
    if (hoverRef.current) {
      setRect(hoverRef.current.getBoundingClientRect());
    }
  }, [isHovered]);

  return (
    <>
      <div
        ref={hoverRef}
        className={`flex items-center gap-2 bg-[#0155C6] text-white rounded-lg p-[15px] cursor-pointer transition-all ${className} ${
          isHovered ? `${activeClassName} rounded-br-none rounded-bl-none` : ""
        }`}
      >
        <MenuRoundedIcon></MenuRoundedIcon>
        {name}
        <ArrowDownIcon
          className={`transition-all ${isHovered ? "-rotate-180" : ""}`}
          fontSize="small"
        ></ArrowDownIcon>
        {/* {isHovered && ( */}
        <DropdownShowContent rect={rect} isHovered={isHovered}>
          {children}
        </DropdownShowContent>
        {/* )} */}
      </div>
    </>
  );
};

const DropdownShowContent = ({
  rect,
  children,
  isHovered,
}: {
  rect: any;
  isHovered: boolean;
  children: React.ReactNode;
}) => {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (!rect) return;
    const tooltipOffset = 0; // distance from the element
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let style: React.CSSProperties = {
      position: "absolute",
    };

    style = {
      top: rect.top + scrollY + rect.height - tooltipOffset,
      left: rect.left,
      minWidth: rect.width,
    };

    setTooltipStyle(style);
  }, [rect, isHovered]);
  return (
    <div
      className={`absolute z-50 transition-all ${
        isHovered ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ ...tooltipStyle }}
    >
      {children}
    </div>
  );
};

export default Dropdown;
