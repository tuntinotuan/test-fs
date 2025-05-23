import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../product/ProductCard";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const SlideProduct = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const productLists = [
    { image: "/product-image-1.png" },
    { image: "/product-image-2.png" },
    { image: "/product-image-3.png" },
    { image: "/product-image-4.png" },
    { image: "/product-image-5.png" },
    { image: "/product-image-1.png" },
    { image: "/product-image-2.png" },
    { image: "/product-image-3.png" },
    { image: "/product-image-4.png" },
    { image: "/product-image-5.png" },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {productLists.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard imageSrc={item.image}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-[#CDE4FE] rounded-full cursor-pointer z-10"
      >
        <ArrowLeftIcon fontSize="medium"></ArrowLeftIcon>
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 flex items-center justify-center bg-[#CDE4FE] rounded-full cursor-pointer z-10"
      >
        <ArrowRightIcon fontSize="medium"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default SlideProduct;
