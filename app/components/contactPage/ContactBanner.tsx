import React from "react";
import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="mt-[60px] md:max-w-full md:h-[50%] md:mt-[41px] lg:max-w-full">
      <div className="relative flex justify-center items-center">
        <Image
          className="w-full h-full hidden md:flex"
          src={"/images/banner/contact-banner.png"}
          width={500}
          height={375}
          alt="banner image"
        ></Image>
        <Image
          className="w-full h-[50%]  md:hidden"
          src={"/images/banner/top-image.png"}
          width={500}
          height={375}
          alt="banner image"
        ></Image>
        <div className="absolute text-white">
          <h2 className="text-4xl">Contact Us</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
