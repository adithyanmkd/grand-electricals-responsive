import Image from "next/image";
import React from "react";

const ChooseCard = () => {
  return (
    <div>
      <div>
        <Image
          src={"/icons/wide-selection.svg"}
          width={52}
          height={52}
          alt={"selection icon"}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ChooseCard;
