import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#45496A] pb-[20px]">
      <ul className="max-w-[300px] mx-auto pt-5 space-y-[26px]">
        <li className="text-center space-y-[10px]">
          <h4 className="font-semibold text-lg text-white">Office</h4>
          <p className="text-sm text-[#D4D4D4]">
            Palakkad - Kozhikode Hwy, Kalladikode, Karmiba South, Kerala 678596
          </p>
        </li>
        <li className="text-center space-y-[10px]">
          <Image
            className="mx-auto"
            src={"icons/phone.svg"}
            width={15}
            height={15}
            alt="phone icon"
          />
          <p className="text-sm text-[#D4D4D4]">+91 9447623638</p>
        </li>
        <li className="text-center space-y-[10px]">
          <h4 className="font-semibold text-lg text-white">Pages</h4>
          {/* navigation link */}
          <ul className="text-sm text-[#D4D4D4] space-y-1">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#product-section"}>About Us</Link>
            </li>
            <li>
              <Link href={"#footer"}>Contact Us</Link>
            </li>
          </ul>
          {/* navigation link ended */}
        </li>
        <li className="text-center space-y-[10px]">
          <h4 className="font-bold text-[20px] text-white">
            Grand Electricals
          </h4>
          <ul className="flex space-x-4 mx-auto justify-center w-auto max-w-[100px]">
            <li>
              <Link href={"#"}>
                <Image
                  src={"/icons/facebook.svg"}
                  width={18}
                  height={18}
                  alt="facebook icon"
                />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image
                  src={"/icons/whatsapp.svg"}
                  width={18}
                  height={18}
                  alt="facebook icon"
                />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image
                  src={"/icons/instagram.svg"}
                  width={18}
                  height={18}
                  alt="facebook icon"
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className="text-center space-y-[10px]">
          <div className="h-px bg-[#898989]"></div>
          <p className="text-xs text-[#D4D4D4]">Powered By Mobiz Technology</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
