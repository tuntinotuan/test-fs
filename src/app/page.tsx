"use client";

import HeaderMain from "@/components/layout/header.main";
import HeaderSale from "@/components/layout/header.sale";
import HomeBanner from "@/components/layout/home.banner";
import HomeMenu from "@/components/layout/home.menu";
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
      </div>
    </div>
  );
};
