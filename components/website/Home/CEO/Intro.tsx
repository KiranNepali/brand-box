import React from "react";

type Props = {};

function Intro({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <span className="text-5xl">
        Lets See What Our CEO Have To <span className="text-secondary-400">Say</span>
      </span>
      <div className="mt-[7rem]">Golo</div>
    </div>
  );
}

export default Intro;
