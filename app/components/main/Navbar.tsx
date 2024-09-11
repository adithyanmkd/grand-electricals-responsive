"use client";

import React from "react";
// import { useState } from "react";

import Link from "next/link";
import {
  Navbar as NavbarFlowbite,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

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

const Navbar = () => {
  // const [activeState, setActiveState] = useState(false);

  return (
    <div className="relative z-10">
      {/* <div className="h-[54px] flex justify-between items-center px-6 py-4 shadow-lg fixed w-full top-0 z-10  bg-white">
        <div>
          <p className="font-semibold text-xl">GE</p>
        </div>
        <div className="size-[38px] cursor-pointer rounded-md border grid place-content-center md:hidden">
          <Image
            className="w-[30px]"
            src={"/icons/menu.svg"}
            alt={"menu icon"}
            width={30}
            height={30}
          ></Image>
        </div>
      </div> */}
      <NavbarFlowbite fluid rounded className="mx-auto fixed w-full shadow-lg">
        <NavbarBrand as={Link} href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Grand Electricals
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {navItems.map((value) => (
            <NavbarLink key={value.id} as={Link} href={value.link}>
              {value.name}
            </NavbarLink>
          ))}
          {/* <NavbarLink as={Link} href="#product-section">
            About
          </NavbarLink>
          <NavbarLink as={Link} href="#brand-section">
            Our Brands
          </NavbarLink>
          <NavbarLink as={Link} href="#footer">
            Contact
          </NavbarLink> */}
        </NavbarCollapse>
      </NavbarFlowbite>
    </div>
  );
};

export default Navbar;
