import React from "react";
import CategoryCard from "../subComponents/CategoryCard";

interface CategoryType {
  id: number;
  label: string;
  imgPath: string;
  alt: string;
  description: string;
}

const categoryValues: CategoryType[] = [
  {
    id: 1,
    label: "Fans",
    imgPath: "/images/products/fan-image.svg",
    alt: "fan image",
    description:
      "Energy-efficient ceiling fans, exhaust fans, and portable fans for homes and businesses.",
  },
  {
    id: 2,
    label: "Lighting Solutions",
    imgPath: "/images/products/lighting.svg",
    alt: "light image",
    description:
      "From LED to smart lighting, we offer a wide range of solutions for every home or business.",
  },
  {
    id: 3,
    label: "Wiring & Cables",
    imgPath: "/images/products/wiring.svg",
    alt: "wiring image",
    description:
      "High-quality and durable wiring for all types of installations.",
  },
  {
    id: 4,
    label: "MCBs & DBs",
    imgPath: "/images/products/mcb-switches.svg",
    alt: "mcb switches",
    description:
      "Reliable Miniature Circuit Breakers (MCBs) and Distribution Boards (DBs) for secure and efficient electrical systems.",
  },
  {
    id: 5,
    label: "Air Modular",
    imgPath: "/images/products/air-moduler.svg",
    alt: "mcb switches",
    description:
      "Modern modular air systems for energy-efficient and smart climate control.",
  },
  {
    id: 6,
    label: "Accessories",
    imgPath: "/images/products/accessories.svg",
    alt: "accessories",
    description:
      "A full range of electrical accessories including plug points, adapters, conduits, and connectors.",
  },
];

const ProductCategories = () => {
  return (
    <div className="pt-[32px]">
      <h1 className="text-[26px] font-bold text-center">Products & Services</h1>
      <div className="space-y-[23px] mt-[24px]">
        {categoryValues.map((product) => (
          <CategoryCard key={product.id} {...product} />
        ))}
        {/* <CategoryCard
          imgPath={"/images/products/fan-image.svg"}
          alt="fan image"
          label="Fans"
          description="Energy-efficient ceiling fans, exhaust fans, and portable fans for homes and businesses."
        /> */}
      </div>
    </div>
  );
};

export default ProductCategories;
