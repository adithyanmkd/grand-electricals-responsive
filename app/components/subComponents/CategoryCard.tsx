import Image from "next/image";
import React from "react";

const CategoryCard = ({ imgPath, alt, label, description }: any) => {
  return (
    <div className="rounded-[10px] mx-auto w-[275px] h-auto p-[17px] bg-white">
      <div>
        <Image src={imgPath} height={209} width={242} alt={alt}></Image>
      </div>
      <div>
        <h3 className="mt-[18px] font-medium text-lg">{label}</h3>
        <p className="mt-[8px] font-light text-base text-[#979797]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
