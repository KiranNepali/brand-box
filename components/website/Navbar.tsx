import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImg from "@/public/logo.svg";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="w-full backdrop-blur-sm z-[10000]  h-[5rem] fixed top-0 left-0 flex justify-center  items-center">
      <div className="w-10/12 flex justify-between items-center">
        {/* logo  */}
        <div className="text-secondary-800 cursor-pointer flex gap-3 text-lg">
          <Link href="/" className="w-[4rem]">
            <Image src={LogoImg}></Image>
          </Link>
          <div className="flex happy-monkey text-secondary-500  flex-col justify-center leading-6">
            <span>Brand</span>
            <span>Box</span>
          </div>
        </div>
        {/* navlinks  */}
        <div className="text-center flex ml-[5rem] gap-8 text-[15px] text-primary-600">
          <Link href="/" className="text-secondary-400">
            Home
          </Link>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Services</span>
          <span className="cursor-pointer">Our Works</span>
        </div>

        {/* right contact blog  */}
        <div className="flex gap-3 text-[15px]">
          {/* contact button  */}
          <button className="bg-secondary-300 cursor-pointer hover:bg-primary-50 hover:text-primary-800 duration-300   border-[1px] border-secondary-300 text-primary-50 w-[8rem] py-[6px] rounded-xl text-nowrap">
            Contact Us
          </button>
          <Link
            href="/blogs"
            className="hover:bg-secondary-300 cursor-pointer text-center duration-300 text-primary-800 border-[1px] hover:text-primary-50  border-secondary-300 w-[5.5rem] py-[6px] rounded-xl text-nowrap"
          >
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
