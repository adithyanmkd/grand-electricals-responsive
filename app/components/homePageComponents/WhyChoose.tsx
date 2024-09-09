import React from "react";
import ChooseCard from "../subComponents/ChooseCard";

const cardValues = [
  {
    id: 1,
    label: "Wide Selection",
    description:
      "From essential wiring and lighting to advanced electrical systems.",
    iconPath: "/icons/wide-selection.svg",
    alt: "wide selection icon",
  },
  {
    id: 2,
    label: "Quality Products",
    description: "Sourced from top manufacturers and trusted brands.",
    iconPath: "/icons/quality-product.svg",
    alt: "quality product icon",
  },
  {
    id: 3,
    label: "Expert Advice",
    description:
      "Knowledgeable staff ready to assist with product recommendations and solutions.",
    iconPath: "/icons/expert-advice.svg",
    alt: "expert advice icon",
  },
  {
    id: 4,
    label: "Customer Satisfaction",
    description: "Dedicated to providing excellent service and support.",
    iconPath: "/icons/customer-satisfaction.svg",
    alt: "customer satisfaction icon",
  },
];

const WhyChoose = () => {
  return (
    <div className="mt-[21px] py-[35px] bg-[#F3F3F3]">
      <h1 className="pb-[45px] text-center font-bold text-[26px] md:text-[32px]">
        Why Choose Us
      </h1>
      <div className="space-y-[43px]">
        {cardValues.map((card) => (
          <ChooseCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
