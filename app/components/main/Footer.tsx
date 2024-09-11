import React from "react";
import {
  Footer as FlobiteFooter,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    isActive: false,
  },
  {
    id: 2,
    name: "Products",
    link: "/#product-section",
    isActive: false,
  },
  {
    id: 3,
    name: "Our Brands",
    link: "/#brand-section",
    isActive: false,
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact",
    isActive: false,
  },
];

const Footer = () => {
  return (
    <FlobiteFooter id="footer" container className="bg-[#45496A] rounded-none">
      <div className="w-full max-w-screen-lg mx-auto">
        <div>
          <div>
            <FooterTitle
              title="Grand Electricals"
              className="text-2xl text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Office" className="text-white" />
              <FooterLinkGroup col>
                <p className="text-sm text-[#D4D4D4]">
                  Palakkad - Kozhikode Hwy, Kalladikode, Karmiba South, Kerala
                  678596
                </p>
                <p className="text-sm text-[#D4D4D4]">grandkkd171@gmail.com</p>
                <p className="text-sm text-[#D4D4D4]">
                  +91 9447623638 <span className="block">+91 7025657485</span>
                </p>
                {/* social media links */}
                <FooterTitle title="Follow Us" className="text-white" />
                <div className="mt-4 flex space-x-6">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61556320111011"
                    }
                  >
                    <Image
                      src={"/icons/facebook.svg"}
                      width={20}
                      height={15}
                      alt="facebook icon"
                    ></Image>
                  </Link>
                  <Link
                    href={"https://chat.whatsapp.com/KoR2cWweqWy2vp8zkMWRM5"}
                  >
                    <Image
                      src={"/icons/whatsapp.svg"}
                      width={20}
                      height={15}
                      alt="Whatsapp icon"
                    ></Image>
                  </Link>
                </div>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Pages" className="text-white" />
              <FooterLinkGroup col>
                {navItems.map((value) => (
                  <FooterLink
                    key={value.id}
                    href={value.link}
                    as={Link}
                    className="text-sm text-[#D4D4D4]"
                  >
                    {value.name}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Our Sister Concern" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  KOKU&apos;S HOME STAY
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />

        {/* <div className="w-full sm:flex sm:items-center sm:justify-between mx-auto">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mx-auto">
            <Link href={"/"}>
              <Image
                src={"/icons/facebook.svg"}
                width={20}
                height={15}
                alt="facebook icon"
              ></Image>
            </Link>
            <Link href={"/"}>
              <Image
                src={"/icons/whatsapp.svg"}
                width={20}
                height={15}
                alt="facebook icon"
              ></Image>
            </Link>
          </div>
        </div> */}

        <div className={"w-full flex justify-center"}>
          <div>
            <Link
              href={"https://www.mobiztechnologies.com/"}
              className={"text-xs text-[#D4D4D4] text-center"}
            >
              Powered by Mobiz Technologies
            </Link>
          </div>
        </div>
      </div>
    </FlobiteFooter>
  );
};

export default Footer;
