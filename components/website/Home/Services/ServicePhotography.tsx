import React from "react";
import Photography1Img from "@/public/Services/ProductPhotography/Photography1.png";
import Photography2Img from "@/public/Services/ProductPhotography/Photography2.png";
import Photography3Img from "@/public/Services/ProductPhotography/Photography3.png";
import Photography4Img from "@/public/Services/ProductPhotography/Photography4.png";
import Image from "next/image";

type Props = {};

function ServicePhotography({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Do</span>
      <span className="w-[70%] text-6xl ">
        Product
        <span className="text-secondary-400"> Photogrpahy</span>
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Through our lens, we capture the essence of your product, transforming
        it into stunning imagery that speaks volumes to your audience, igniting
        desire and driving engagement.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
        <Image src={Photography1Img}></Image>
        <Image src={Photography2Img}></Image>
        <Image src={Photography3Img}></Image>
        <Image src={Photography4Img}></Image>
      </div>
    </div>
  );
}

export default ServicePhotography;
