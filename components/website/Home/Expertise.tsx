import React from "react";

type Props = {};

function Expertise({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-xl text-secondary-400">Our Expertise</span>
      <span className="text-3xl w-[70%] ">
        “We are catalysts for small companies, transforming them into vibrant
        brands and nurturing their growth.”
      </span>

      <div className="mt-[5%]">
        <span>GOLO</span>
      </div>
    </div>
  );
}

export default Expertise;
