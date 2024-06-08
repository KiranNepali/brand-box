import React from "react";
import PackageDesign1Img from "@/public/Services/PackageDesign/PackageDesign1.png";
import PackageDesign2Img from "@/public/Services/PackageDesign/PackageDesign2.png";
import PackageDesign3Img from "@/public/Services/PackageDesign/PackageDesign3.png";
import PackageDesign4Img from "@/public/Services/PackageDesign/PackageDesign4.png";
import Image from "next/image";

type Props = {};

function ServicePackage({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Do</span>
      <span className="w-[70%] text-6xl ">
        <span className="text-secondary-400">Package</span> Design
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Crafting captivating packaging that embodies your brand essence, we
        transform vision into tangible designs that captivate your audience.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
          <Image src={PackageDesign1Img}></Image>
          <Image src={PackageDesign2Img}></Image>
          <Image src={PackageDesign3Img}></Image>
          <Image src={PackageDesign4Img}></Image>
      </div>
    </div>
  );
}

export default ServicePackage;
