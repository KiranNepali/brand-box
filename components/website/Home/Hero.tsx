"use client"
import React from "react";
import HeroBoxImg from "@/public/boxfigma.svg";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="section h-screen  w-full flex justify-center items-center">
      <div>
        <Image src={HeroBoxImg}></Image>
      </div>
    </div>
  );
}

export default Hero;
