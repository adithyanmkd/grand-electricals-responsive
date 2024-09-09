import React from "react";
import Image from "next/image";

const IntroContent = () => {
  return (
    <>
      <div className="pb-[27px] pt-[41px] bg-[#F3F3F3] flex justify-center">
        <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 lg:px-3">
          <div className="pt-[41px]  transition-all space-y-[14px] text-center lg:text-left">
            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold max-w-[330px] md:max-w-[500px] lg:max-w-[580px] mx-auto lg:mr-auto lg:ml-0">
              Your Complete Electrical Shopping Destination
            </h1>
            <p className="text-lg font-light text-[#747474] max-w-[330px] md:max-w-[500px] mx-auto lg:mr-auto lg:ml-0">
              We offer high-quality electrical products and excellent customer
              service for professionals, DIY enthusiasts, and anyone needing
              electrical supplies.
            </p>
          </div>
          <div className="mt-[41px]" id="product-section">
            <Image
              className="md:w-[60%] lg:w-[70%] mx-auto lg:mr-0  lg:ml-auto"
              width={300}
              height={189}
              src={"/images/intro-image.svg"}
              alt={"intro illustration"}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroContent;
