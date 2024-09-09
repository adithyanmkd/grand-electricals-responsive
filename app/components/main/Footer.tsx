import React from "react";
import {
  Footer as FlobiteFooter,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "#",
    isActive: false,
  },
  {
    id: 2,
    name: "Products",
    link: "#product-section",
    isActive: false,
  },
  {
    id: 3,
    name: "Our Brands",
    link: "#brand-section",
    isActive: false,
  },
  {
    id: 4,
    name: "Contact",
    link: "#footer",
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
                <p className="text-sm text-[#D4D4D4]">+91 9447623638</p>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Pages" className="text-white" />
              <FooterLinkGroup col>
                {navItems.map((value) => (
                  <FooterLink
                    key={value.id}
                    href={value.link}
                    className="text-sm text-[#D4D4D4]"
                  >
                    {value.name}
                  </FooterLink>
                ))}
                {/* <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  Product & Services
                </FooterLink>
                <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  About Us
                </FooterLink>
                <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  Contact Us
                </FooterLink> */}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" className="text-sm text-[#D4D4D4]">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />

        {/* <div className="w-full sm:flex sm:items-center sm:justify-between mx-auto">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
          </div>
        </div> */}
        <p className="text-xs mt-2 text-[#D4D4D4] text-center">
          Powered by mobiz technologies
        </p>
      </div>
    </FlobiteFooter>
  );
};

export default Footer;
