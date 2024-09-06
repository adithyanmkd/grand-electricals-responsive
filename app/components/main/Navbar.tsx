import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="h-[54px] flex justify-between items-center px-6 py-4 shadow-lg fixed w-full top-0 z-10  bg-white">
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
      </div>
    </>
  );
};

export default Navbar;
