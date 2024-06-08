import Image from "next/image";
import React from "react";
import Stats1Img from "@/public/Review/ReviewStats/Stats1.png";
import Stats2Img from "@/public/Review/ReviewStats/Stats2.png";

type Props = {};

function CustomerReview({}: Props) {
  return (
    <div className="section w-10/12 mx-auto h-screen flex justify-center items-center gap-10">
      {/* left  part  */}
      <div className="w-[45%] flex flex-col gap-4">
        {/* title  */}
        <span className="text-3xl font-semibold">
          Customer <span className="text-secondary-400">Satisfaction</span> is
          <br /> Our Satisfaction
        </span>
        {/* desc  */}
        <p className="text-primary-400">
          Brand Box is trusted by thousands of Brands all over the world.
        </p>

        {/* stats  */}
        <div className="flex  gap-3">
          <div className="w-[50%] h-[10rem]  items-center flex flex-col gap-1">
            <div className="w-[5rem] h-[5rem]">
              <Image
                className="w-full h-full object-contain object-center"
                src={Stats1Img}
              ></Image>
            </div>
            <div className="text-sm text-primary-400 text-center">
              Rated 4.8 stars by 
              our loyal customers
            </div>
          </div>
          <div className="w-full h-[10rem] items-center  flex flex-col gap-1">
            <div className="w-[4rem] h-[5rem]">
              <Image
                className="w-full h-full object-contain object-center"
                src={Stats2Img}
              ></Image>
            </div>
            <div className="text-sm text-primary-400 text-center">
              Trusted by 100+ businesses worldwide
            </div>
          </div>
        </div>
      </div>
      {/* right-part  */}
      <div className="w-[60%] flex gap-6 flex-col">
        {ReviewsData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[6rem] flex  justify-center items-star flex-col gap-1  bg-primary-100 p-4"
          >
            <span className="text-[14px] text-primary-500">{item.title} </span>
            <span className="text-[13px] text-primary-400">{item.review}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;

const ReviewsData = [
  {
    id: 1,
    title: "Brand Box delivers excellence!",
    review:
      "Impressed by their diverse offerings and top-notch service. Will be back for more. The quality of the products exceeded my expectations.",
  },
  {
    id: 2,
    title: "Impressed with Brand Box !",
    review:
      "Impressed by their diverse offerings and top-notch service. Will be back for more. The quality of the products exceeded my expectations.",
  },
  {
    id: 3,
    title: "They made me very happy!",
    review:
      "Impressed by their diverse offerings and top-notch service. Will be back for more. The quality of the products exceeded my expectations.",
  },
];
