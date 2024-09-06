import Image from "next/image";
import React from "react";

const CategoryCard = ({ imgPath, alt }: any) => {
  return (
    <div>
      <div>
        <Image src={imgPath} height={209} width={242} alt={alt}></Image>
      </div>
      <div></div>
    </div>
  );
};

export default CategoryCard;
