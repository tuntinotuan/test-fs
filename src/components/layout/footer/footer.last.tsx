import React from "react";

const FooterLast = () => {
  const infoList = [
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
  ];
  return (
    <footer>
      <div className="page-container py-24">
        <h2 className="font-bold text-xl text-[#013065] mb-8 uppercase">
          Viet Hung Auto Production Trading Joint Stock Company
        </h2>
        {infoList.map((item, index) => (
          <p key={index} className="text-xl">
            {item.textNormal}
            <span className="font-bold text-[#637381] ml-1">
              {item.textBold}
            </span>
          </p>
        ))}
      </div>
    </footer>
  );
};

export default FooterLast;
