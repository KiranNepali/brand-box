// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import BackgroundImg from "@/public/background.svg";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full h-screen">
          <Image src={BackgroundImg}></Image>
        </div>
        <Navbar />
        <div className="bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
