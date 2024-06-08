import HomeMain from "@/components/website/HomeMain";
import BackgroundImg from "@/public/background.svg";
import Image from "next/image";
import LaptopImg from "@/public/laptop.svg";
export default function Home() {
  return (
    <>
      <div className="relative w-full ">
        <HomeMain />
      </div>
    </>
  );
}
