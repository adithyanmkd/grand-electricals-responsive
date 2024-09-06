import Image from "next/image";
import React from "react";

const IntroContent = () => {
  return (
    <>
      <div className="mt-[54px] pb-[27px] bg-[#F3F3F3]">
        <div className="pt-[41px] max-w-[330px] space-y-[14px] mx-auto">
          <h1 className="text-[28px] font-bold text-center">
            Your Complete Electrical Shopping Destination
          </h1>
          <p className="text-lg text-center font-light text-[#747474]">
            We offer high-quality electrical products and excellent customer
            service for professionals, DIY enthusiasts, and anyone needing
            electrical supplies.
          </p>
        </div>
        <div className="mt-[41px]">
          <Image
            className="mx-auto"
            width={300}
            height={189}
            src={"/images/intro-image.svg"}
            alt={"intro illustration"}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default IntroContent;
