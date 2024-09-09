import React from "react";
import BrandGrid from "../subComponents/BrandGrid";

const brandLogo = [
  {
    id: 1,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 2,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 3,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 4,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 5,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 6,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 7,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 8,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
  {
    id: 9,
    iconPath: "/icons/brand-logos/goldmedal-logo.svg",
    alt: "goldmedal log",
  },
];

const OurBrandSection = () => {
  return (
    <div className="mt-[21px]">
      <h1 className="pb-[45px] text-center font-bold text-[26px]">
        Our Brands
      </h1>
      <div className="grid grid-cols-3 pb-[50px] max-w-[320px] mx-auto">
        {brandLogo.map((brand, index, array) => {
          console.log(array.length);
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
