import React from "react";
import Image from "next/image";
import logo from "@/../../public/assets/home/upreal.png";

function SplashScreen() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Image src={logo} alt="" width={350} />
    </div>
  );
}

export default SplashScreen;
