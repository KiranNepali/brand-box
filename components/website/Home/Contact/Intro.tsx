import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="section w-full h-screen text-center flex flex-col justify-center items-center ">
      <span className="text-5xl">
        <span>Loving Our Work</span> <br />
        <span className="text-secondary-400">CONTACT US</span>
      </span>
      <div className="mt-[7rem]">Golo</div>
    </div>
  );
}

export default Contact;
