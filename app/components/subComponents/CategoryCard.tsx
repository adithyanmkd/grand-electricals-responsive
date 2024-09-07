import Image from "next/image";
import React from "react";

interface CategoryType {
  id: number;
  label: string;
  imgPath: string;
  alt: string;
  description: string;
}

const CategoryCard = (props: CategoryType) => {
  return (
    <div className="rounded-[10px] mx-auto w-[275px] h-auto p-[17px] shadow-md bg-white">
      <div>
        <Image
          src={props.imgPath}
          height={209}
          width={242}
          alt={props.alt}
        ></Image>
      </div>
      <div>
        <h3 className="mt-[18px] font-medium text-lg">{props.label}</h3>
        <p className="mt-[8px] font-light text-base text-[#979797]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
