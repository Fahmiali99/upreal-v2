import React from "react";
import Image from "next/image";
import logo from "@/../../public/assets/home/uprealWhite.png";

function SplashScreen() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-900">
      <Image src={logo} className=" animate-pulse " alt="" width={300} />
    </div>
  );
}

export default SplashScreen;
