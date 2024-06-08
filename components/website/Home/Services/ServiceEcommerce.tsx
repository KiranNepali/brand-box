import React from "react";
import Ecommerce1Img from "@/public/Services/EcommerceSolution/Ecommerce1.png";
import Ecommerce2Img from "@/public/Services/EcommerceSolution/Ecommerce2.png";
import Ecommerce3Img from "@/public/Services/EcommerceSolution/Ecommerce3.png";
import Ecommerce4Img from "@/public/Services/EcommerceSolution/Ecommerce4.png";
import Image from "next/image";

type Props = {};

function ServiceEcommerce({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Do</span>
      <span className="w-[70%] text-6xl ">
        <span className="text-secondary-400">E-Commerce</span> Solution
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Empowering your online presence, our ecommerce solutions seamlessly
        translate your brand vision into a digital storefront that engages and
        converts your audience.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
        <Image src={Ecommerce1Img}></Image>
        <Image src={Ecommerce2Img}></Image>
        <Image src={Ecommerce3Img}></Image>
        <Image src={Ecommerce4Img}></Image>
      </div>
    </div>
  );
}

export default ServiceEcommerce;
