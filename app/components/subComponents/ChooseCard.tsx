import Image from "next/image";
import React from "react";

interface CardType {
  label: string;
  description: string;
  iconPath: string;
  alt: string;
}

const ChooseCard = ({ label, description, iconPath, alt }: CardType) => {
  return (
    <div className="max-w-[304px] w-full mx-auto">
      <div>
        <Image
          className="mx-auto"
          src={iconPath}
          width={52}
          height={52}
          alt={alt}
        />
      </div>
      <div className="text-center mt-[17px] space-y-[8px]">
        <h4 className="text-lg font-medium">{label}</h4>
        <p className="font-light tex-lg text-[#414141]">{description}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
