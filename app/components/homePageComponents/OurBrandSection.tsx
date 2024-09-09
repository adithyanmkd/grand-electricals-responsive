import React from "react";
import BrandGrid from "../subComponents/BrandGrid";

const brandLogo = [
  {
    id: 1,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal logo",
  },
  {
    id: 2,
    iconPath: "/icons/brand-logos/gm-logo.svg",
    alt: "gm logo",
  },
  {
    id: 3,
    iconPath: "/icons/brand-logos/crompton-logo.webp",
    alt: "cromton logo",
  },
  {
    id: 4,
    iconPath: "/icons/brand-logos/ace-logo.png",
    alt: "ace log",
  },
  {
    id: 5,
    iconPath: "/icons/brand-logos/havells-logo.svg",
    alt: "havells logo",
  },
  {
    id: 6,
    iconPath: "/icons/brand-logos/legrand-logo.webp",
    alt: "legrand logo",
  },
  {
    id: 7,
    iconPath: "/icons/brand-logos/usha-logo.png",
    alt: "usha logo",
  },
  {
    id: 8,
    iconPath: "/icons/brand-logos/polycab-logo.png",
    alt: "polycab logo",
  },
  {
    id: 9,
    iconPath: "/icons/brand-logos/starlight-logo.jpg",
    alt: "starlight log",
  },
];

const OurBrandSection = () => {
  return (
    <div id="brand-section" className="mt-[21px]">
      <h1 className="pb-[45px] text-center font-bold text-[26px]">
        Our Brands
      </h1>
      <div className="grid grid-cols-3 pb-[50px] max-w-[320px] md:max-w-[640px] mx-auto">
        {brandLogo.map((brand, index, array) => {
          return (
            <BrandGrid
              key={brand.id}
              index={index}
              arrayLength={array.length}
              {...brand}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurBrandSection;
