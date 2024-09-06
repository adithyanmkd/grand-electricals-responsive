import React from "react";
import CategoryCard from "../subComponents/CategoryCard";

const ProductCategories = () => {
  return (
    <div className="pt-[27px] bg-[#FAF9F6]">
      <h1 className="text-[26px] font-bold text-center">Products & Services</h1>
      <CategoryCard
        imgPath={"/images/products/fan-image.svg"}
        alt="fan image"
      />
    </div>
  );
};

export default ProductCategories;
