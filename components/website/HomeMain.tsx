"use client";
import React from "react";
import Hero from "./Home/Hero";
import BackgroundImg from "@/public/background.svg";
import Image from "next/image";
import HomeSection2 from "./Home/HomeSection2";
import HomeSection3 from "./Home/HomeSection3";
import AboutUs from "./Home/AboutUs";
import Expertise from "./Home/Expertise";
import ServiceMain from "./Home/Services/ServiceMain";
import OurWorkMain from "./Home/OurWork/OurWorkMain";
import CeoMain from "./Home/CEO/CeoMain";
import ReviewMain from "./Home/Reviews/ReviewMain";
import ContactMain from "./Home/Contact/ContactMain";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
type Props = {};
function HomeMain({}: any) {
  useGSAP(() => {
    gsap.to(".hero", {
      scrollTrigger: {
        markers: true,
        start: "50% top",
        end: "top top",
        trigger: ".hero",
      },
    });
  });
  return (
    <div className="  main  text-primary-400">
      <div className="panel hero">
        <Hero />
      </div>
      <div className="panel">
        <HomeSection2 />
      </div>
      <div className="panel">
        <HomeSection3 />
      </div>
      <AboutUs />
      <Expertise />
      <ServiceMain />
      <OurWorkMain />
      <CeoMain />
      <ReviewMain />
      <ContactMain />
    </div>
  );
}

export default HomeMain;
