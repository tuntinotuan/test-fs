"use client";

import HeaderMain from "@/components/layout/header/header.main";
import HeaderSale from "@/components/layout/header/header.sale";
import HomeBanner from "@/components/layout/home/home.banner";
import HomeMenu from "@/components/layout/home/home.menu";
import HomeProduct from "@/components/layout/home/home.product";
import NavPage from "@/components/nav/NavPage";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <HeaderSale />
      <HeaderMain />
      <HomeMenu />
      <HomeBody />
    </div>
  );
}

const HomeBody = () => {
  return (
    <div className="bg-homeBodyBg my-4">
      <div className="page-container py-6">
        <NavPage />
        <HomeBanner />
        <HomeProduct />
      </div>
    </div>
  );
};
