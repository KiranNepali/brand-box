"use client";
import React from "react";
import CeoImg from "@/public/CEO/Ceo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {};

function CeoVideo({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      {/* intro  */}
      <span className="text-3xl">
        A <span className="text-secondary-400">message</span> from the CEO
      </span>

      {/* video  */}
      <div className="w-[50%] overflow-hidden h-[40%] relative rounded-xl bg-primary-300">
        <Icon
          className="absolute w-[3rem] h-[3rem]  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          icon="gridicons:play"
          style={{ color: "white" }}
        />
        <Image
          src={CeoImg}
          className="w-full h-full object-cover object-center text-white"
        ></Image>
      </div>
    </div>
  );
}

export default CeoVideo;
