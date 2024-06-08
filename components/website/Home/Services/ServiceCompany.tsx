import React from "react";
import CompanyMng1Img from "@/public/Services/CompanyManagement/CompanyMng1.png";
import CompanyMng2Img from "@/public/Services/CompanyManagement/CompanyMng2.png";
import CompanyMng3Img from "@/public/Services/CompanyManagement/CompanyMng3.png";
// import CompanyMng4Img from "@/public/Services/CompanyManagement/CompanyMng4.png";
import Image from "next/image";

type Props = {};

function ServiceCompany({}: Props) {
  return (
    <div className="section h-screen relative w-full text-center flex flex-col gap-2 justify-center items-center">
      <span className="text-2xl ">We Provide</span>
      <span className="w-[70%] text-6xl ">
        Company Management
        <span className="text-secondary-400"> System</span>
      </span>

      {/* desc  */}
      <div className="w-[60%]">
        Empower your team with our streamlined management system, optimizing
        tasks and enhancing communication for peak efficiency.
      </div>

      {/* cards ad  */}
      <div className="w-[70%] mt-6 grid grid-cols-4 gap-1 place-content-center items-center place-items-center mx-auto">
        {/* card  */}
        <Image src={CompanyMng1Img}></Image>
        <Image src={CompanyMng2Img}></Image>
        <Image src={CompanyMng3Img}></Image>
        <Image src={CompanyMng1Img}></Image>
      </div>
    </div>
  );
}

export default ServiceCompany;
