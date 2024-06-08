import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function BlogDetail({}: Props) {
  return (
    <div className="w-8/12 my-[10rem] overflow-hidden mx-auto relative">
      {/* blog nav  */}

      {/* main blog  detail  */}
      <div className="w-full text-center">
        {/* title  */}
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-semibold text-secondary-300">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </span>
          <span className="text-[12px] font-semibold">
            <span className="text-primary-400">August 13, 2013 · </span>
            <span>DAILY DIGEST</span>
          </span>
        </div>

        {/* image  */}
        <div className="w-full h-[50vh] mt-[5rem] overflow-hidden rounded-xl bg-primary-200">
          <Image
            src=""
            className="w-full h-full object-cover object-center"
          ></Image>
        </div>

        {/* description */}
        <div className="flex w-[60%] mx-auto mt-[5rem] text-[15px] text-primary-400 flex-col gap-6 justify-center items-center">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
        </div>

        {/* image  */}
        <div className="w-[70%] h-[50vh] mx-auto mt-[5rem] overflow-hidden rounded-xl bg-primary-200">
          <Image
            src=""
            className="w-full h-full object-cover object-center"
          ></Image>
        </div>

        {/* description */}
        <div className="flex w-[60%] mx-auto mt-[5rem] text-[15px] text-primary-400 flex-col gap-6 justify-center items-center">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
        </div>

        {/* banner  */}
        <div className="w-[75%] h-[9rem] mt-[5rem] mx-auto flex gap-3 justify-center items-center">
          <div className="h-full w-[5px] bg-secondary-300"></div>
          {/* text  */}
          <p className="w-[80%] text-3xl font-semibold text-primary-400 text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            modi fugit enim nesciunt minima saepe. Necessitatibus, qui alias?
          </p>
        </div>

        {/* description */}
        <div className="flex w-[60%] mx-auto mt-[5rem] text-[15px] text-primary-400 flex-col gap-6 justify-center items-center">
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab,
            omnis quidem qui mollitia a nisi dicta vitae illum minus, eum
            eveniet maiores sapiente eligendi placeat deserunt. Ea, perspiciatis
            dolor.
          </p>
        </div>

        {/* recommended articles  */}
        <div className="w-[80%] mx-auto mt-[5rem] text-start">
          <div className="text-left font-bold text-3xl mb-[3rem]">
            Recommended Articles
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-10 mt-5">
              {dailyDigestData.map((item, index) => (
                <Link
                  key={index}
                  href="/blogs/blog-category/blog-detail"
                  className="w-full h-[15rem] border-[1px] cursor-pointer overflow-hidden  hover:border-secondary-300 border-primary-100 rounded-xl bg-white p-4 flex gap-3"
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
                      src=""
                    ></Image>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

const dailyDigestData = [
  {
    date: "August 13, 2021",
    title:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    image: "image1.jpg",
  },
  {
    date: "August 13, 2021",
    title:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    image: "image2.jpg",
  },
  {
    date: "August 13, 2021",
    title:
      "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
    description:
      "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    image: "image3.jpg",
  },
];
