"use client";
import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="fixed  bottom-10 left-0 w-full flex justify-center items-center">
      <div className="w-10/12 flex justify-between items-center">
        {/* copyright  */}
        <span className="text-[12px]">
          <span className=" text-primary-400">© Design & Developed by </span>
          <span className="under underline text-secondary-700 font-semibold">
            WebX
          </span>
        </span>

        {/* socio icons  */}
        <div className="flex text-primary-400  gap-5">
          <Icon
            icon="ri:facebook-fill"
            className="text-xl hover:text-secondary-500 cursor-pointer"
          />
          <Icon
            icon="ri:instagram-fill"
            className="text-xl hover:text-secondary-500 cursor-pointer"
          />
          <Icon
            icon="ri:twitter-x-fill"
            className="text-xl hover:text-secondary-500 cursor-pointer"
          />
          <Icon
            icon="ri:linkedin-fill"
            className="text-xl hover:text-secondary-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
