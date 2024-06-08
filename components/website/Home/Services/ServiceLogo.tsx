import React from "react";
import LogoDesign1Img from "@/public/Services/LogoDesign/LogoDesign1.png";
import LogoDesign2Img from "@/public/Services/LogoDesign/LogoDesign2.png";
import LogoDesign3Img from "@/public/Services/LogoDesign/LogoDesign3.png";
import LogoDesign4Img from "@/public/Services/LogoDesign/LogoDesign4.png";
import Image from "next/image";

type Props = {};

function ServiceLogo({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Do</span>
      <span className="w-[70%] text-6xl ">
        <span className="text-secondary-400">Logo</span> Design
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Crafting iconic logos that embody your brand essence, we translate
        vision into symbols that resonate with your audience.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
          <Image src={LogoDesign1Img}></Image>
          <Image src={LogoDesign2Img}></Image>
          <Image src={LogoDesign3Img}></Image>
          <Image src={LogoDesign4Img}></Image>
      </div>
    </div>
  );
}

export default ServiceLogo;
