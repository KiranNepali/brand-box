import React from "react";
import AdDesign1Img from "@/public/Services/AdDesign/AdDesign1.png";
import AdDesign2Img from "@/public/Services/AdDesign/AdDesign2.png";
import AdDesign3Img from "@/public/Services/AdDesign/AdDesign3.png";
// import AdDesign4Img from "@/public/Services/AdDesign/AdDesign4.png";

import Image from "next/image";

type Props = {};

function ServicesAd({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Do</span>
      <span className="w-[70%] text-6xl ">
        <span className="text-secondary-400">Ad</span> Design
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Our ad design services capture the essence of your brand, translating
        vision into an iconic symbol that resonates with your audience.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
        <Image src={AdDesign1Img} className=""></Image>
        <Image src={AdDesign2Img} className=""></Image>
        <Image src={AdDesign3Img} className=""></Image>
        <Image src={AdDesign1Img} className=""></Image>
      </div>
    </div>
  );
}

export default ServicesAd;
