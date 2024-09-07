import React from "react";
import CategoryCard from "../subComponents/CategoryCard";

const ProductCategories = () => {
  return (
    <div className="pt-[32px]">
      <h1 className="text-[26px] font-bold text-center">Products & Services</h1>
      <div className="space-x-[23px] mt-[24px]">
        <CategoryCard
          imgPath={"/images/products/fan-image.svg"}
          alt="fan image"
          label="Fans"
          description="Energy-efficient ceiling fans, exhaust fans, and portable fans for homes and businesses."
        />
      </div>
    </div>
  );
};

export default ProductCategories;
