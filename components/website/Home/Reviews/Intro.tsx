import React from "react";

type Props = {};

function Intro({}: Props) {
  return (
    <div className="section w-full h-screen flex flex-col justify-center items-center ">
      <span className="text-5xl">
        Our Customer <span className="text-secondary-400">Love</span>
        <span> Our Work</span>
      </span>
      <div className="mt-[7rem]">Golo</div>
    </div>
  );
}

export default Intro;
