import ButtonFooter from "@/components/button/ButtonFooter";
import ButtonScrollToTop from "@/components/button/ButtonScrollToTop";
import FooterListText from "@/components/footer/FooterListText";
import AppleStoreIcon from "@/components/icons/AppleStoreIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import GooglePlayStoreIcon from "@/components/icons/GooglePlayStoreIcon";
import VietnamIcon from "@/components/icons/VietnamIcon";
import Image from "next/image";
import React from "react";

const FooterLast = () => {
  const footerList = [
    {
      title: "Viet Hung Auto Production Trading Joint Stock Company",
      logoBelow: <p></p>,
      list: [
        {
          textNormal: "Tax code:",
          textBold: "0305094228",
        },
        {
          textNormal: "Phone number:",
          textBold: "0283 760 7607",
        },
        {
          textNormal: "Opening hour:",
          textBold: "09:00 - 22:00 from Mon - Fri",
        },
        {
          textNormal: "Address:",
          textBold:
            "13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.",
        },
      ],
    },
    {
      title: "Sitemap",
      list: [
        {
          textNormal: "About",
          textBold: "",
        },
        {
          textNormal: "Article",
          textBold: "",
        },
        {
          textNormal: "Cart",
          textBold: "",
        },
        {
          textNormal: "Contact",
          textBold: "",
        },
      ],
    },
    {
      title: "Legal",
      list: [
        {
          textNormal: "Privacy policy",
          textBold: "",
        },
        {
          textNormal: "Cookie policy",
          textBold: "",
        },
        {
          textNormal: "Delivery policy",
          textBold: "",
        },
        {
          textNormal: "FAQs",
          textBold: "",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="page-container flex items-start justify-between flex-wrap gap-3 py-24">
        {footerList.map((i) => (
          <div key={i.title} className="">
            <FooterListText title={i.title}></FooterListText>
            {i.list.map((j, index) => (
              <p
                key={index}
                className="text-xl text-[#637381] mb-2 cursor-pointer"
              >
                {j.textNormal}
                <span className="font-bold ml-1">{j.textBold}</span>
              </p>
            ))}
            {i.logoBelow && (
              <Image
                src={"/bo-cong-thuong.png"}
                alt="bo-cong-thuong"
                width={200}
                height={75.66666412353516}
                className="mt-8"
                unoptimized
              ></Image>
            )}
          </div>
        ))}
        <div>
          <FooterListText title="Download App"></FooterListText>
          <ButtonFooter
            smallText="Get It On"
            largerText="Google Play Store"
            icon={<GooglePlayStoreIcon />}
            className="bg-[#1C252E]"
          ></ButtonFooter>
          <ButtonFooter
            smallText="Download from"
            largerText="Apple App Store"
            icon={<AppleStoreIcon />}
            className="bg-[#0373F3]"
          ></ButtonFooter>
          <div className="flex items-center gap-2 w-max ml-auto">
            <VietnamIcon />
            VI
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <ButtonScrollToTop />
    </footer>
  );
};

export default FooterLast;
