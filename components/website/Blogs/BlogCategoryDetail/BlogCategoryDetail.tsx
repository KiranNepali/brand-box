import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogData } from "../../../../data/Blogs";

type Props = {};

function BlogCategoryDetail({}: Props) {
  return (
    <div className="w-8/12 pb-[10rem] text-center mt-[10rem] overflow-hidden mx-auto relative">
      {/* title  */}
      <div className="flex flex-col gap-4">
        <span className="text-5xl font-semibold text-secondary-300">
          Daily Digest
        </span>
        {/* descriotion  */}
        <p className="text-[15px] w-[60%] mx-auto text-primary-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas id
          omnis dolores recusandae maiores!
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <div className="flex text-start flex-col gap-10 mt-5">
          {BlogData.dailyDigestData.map((item, index) => (
            <Link
              key={index}
              href="/blogs/blog-category/blog-detail"
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

      {/* button  */}
      <button className="px-3 mt-[2rem] py-2 hover:text-primary-50 hover:bg-secondary-300 duration-150  border-[1px] rounded-lg text-sm font-medium border-primary-200">
        More Article
      </button>
    </div>
  );
}

export default BlogCategoryDetail;
