import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface brandType {
  id: number;
  iconPath: string;
  alt: string;
  index: number;
  arrayLength: number;
}

const BrandGrid = ({ iconPath, alt, index, arrayLength }: brandType) => {
  let rightBorder = true;
  let bottomBorder = true;

  //right border condition
  if ((index + 1) % 3 === 0) {
    rightBorder = false;
  }

  //bottom border condition
  if (arrayLength - 3 < index + 1) {
    bottomBorder = false;
  }
  return (
    <div
      className={clsx(
        "w-full h-[100px] grid place-items-center",
        rightBorder && "border-r-[1px]",
        bottomBorder && "border-b-[1px]"
      )}
    >
      <Image
        className="saturate-0 hover:saturate-100"
        src={iconPath}
        height={19}
        width={95}
        alt={alt}
      />
    </div>
  );
};

export default BrandGrid;
