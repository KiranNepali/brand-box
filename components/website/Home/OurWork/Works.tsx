import React from "react";
import RecentWOrk1Img from "@/public/Works/RecentWorks/RecentWork1.png";
import RecentWOrk2Img from "@/public/Works/RecentWorks/RecentWork2.png";
import RecentWOrk3Img from "@/public/Works/RecentWorks/RecentWork3.png";
import RecentWOrk4Img from "@/public/Works/RecentWorks/RecentWork4.png";
import RecentWOrk5Img from "@/public/Works/RecentWorks/RecentWork5.png";
import RecentWOrk6Img from "@/public/Works/RecentWorks/RecentWork6.png";
import Image from "next/image";

type Props = {};

function Works({}: Props) {
  return (
    <div className="section w-full mx-auto h-screen overflow-hidden flex justify-center items-center">
      {/* works cards  */}
      <div className="grid w-[70%] grid-cols-3 gap-2">
        {OurWorksData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[18rem] overflow-hidden rounded-3xl bg-primary-200"
          >
            <Image
              src={item.img}
              className="w-full h-full object-center object-cover"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;

const OurWorksData = [
  {
    id: 1,
    img: RecentWOrk1Img,
  },
  {
    id: 2,
    img: RecentWOrk2Img,
  },
  {
    id: 3,
    img: RecentWOrk3Img,
  },
  {
    id: 4,
    img: RecentWOrk4Img,
  },
  {
    id: 5,
    img: RecentWOrk5Img,
  },
  {
    id: 6,
    img: RecentWOrk6Img,
  },
];
