import React from "react";
import BlogBookGif from "@/public/BlogBook.gif";
import Image from "next/image";

type Props = {};

function BlogHero({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center text-center">
      {/* BlogHero  */}
      <div className="text-6xl font-semibold text-secondary-300">
        Explore a world of endless <br /> exploration and enlightenment
      </div>

      {/* description */}
      <p className="w-[75%] text-lg text-primary-400 mt-[2rem]">
        Dive into our world of captivating blogs, where each post promises a
        rich tapestry of inspiration, insight, and enlightenment, inviting you
        to immerse yourself in a realm of endless discovery and growth.
      </p>

      {/* blog  book  */}
      <div className="w-[10rem]  h-[10rem] bg-blend-darken">
        <Image
          className="w-full h-full bg-[] bg-cover bg-center"
          src={BlogBookGif}
        ></Image>
      </div>
    </div>
  );
}

export default BlogHero;
