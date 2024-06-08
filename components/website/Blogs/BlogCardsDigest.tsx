import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BlogData } from "../../../data/Blogs";

type Props = {};

function BlogCardsDigest({}: Props) {
  return (
    <div className="w-full">
      {/* title  */}
      <div className="w-full flex justify-between items-center">
        <span className="font-semibold text-xl">Daily Digest</span>
        {/* button  */}
        <Link
          href="/blogs/blog-category"
          className="px-2 py-1 hover:text-primary-50 hover:bg-secondary-300 duration-150  border-[1px] rounded-lg text-sm font-medium border-primary-200"
        >
          View all
        </Link>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-10 mt-5">
          {BlogData.dailyDigestData.map((item, index) => (
            <Link
              key={index}
              href="blogs/blog-category/blog-detail"
              className="w-full h-[15rem] border-[1px] cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl bg-white p-4 flex gap-3"
            >
              {/* left  */}
              {/* title  */}

              <div className="w-[70%] flex flex-col gap-3 items-start">
                <div className="text-primary-400 font-medium text-[11px]">
                  {item.date}
                </div>
                <div className="text-primary-400 font-semibold text-xl">
                  {item.title}
                </div>
                {/* desc  */}
                <div className="text-primary-400 text-[15px]">
                  {item.description}
                </div>
              </div>

              {/* right part  */}
              {/* image */}
              <div className="w-[30%] h-full bg-primary-200 overflow-hidden rounded-xl">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={item.image}
                ></Image>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCardsDigest;
