import React from "react";
import bgHead from "@/../../public/assets/home/head.png";
import bgChat from "@/../../public/assets/home/chat.png";
import bgProgres from "@/../../public/assets/home/progres.png";
import Image from "next/image";
function Hero() {
  return (
    <div className="container mx-auto my-auto px-4 sm:px-0 ">
      <div className="md:flex justify-between items-center py-10">
        <div>
          <h1 className="font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-5xl  text-black dark:text-white">
            We Provide Best Website Design For You
          </h1>
          <p className=" w-3/4 py-5 text-gray-500 dark:text-white font-normal text-base">
            autem corrupti totam itaque officia quidem provident recusandae
            quisquam omnis veritatis odit. Ducimus?
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Purple to Blue
          </button>
        </div>

        <div className="relative   rounded-lg ">
          <Image src={bgHead} alt="" width={700} className="z-10" />
          <span className="hidden md:block z-0 text-xs font-medium text-center p-0.5 leading-none rounded-full px-2 absolute -translate-y-1/2 translate-x-1/2 left-auto right-0 top-2/4 ">
            <Image src={bgProgres} alt="" width={120} />
          </span>
          <span className="hidden md:block text-xs font-medium text-center p-0.5 leading-none rounded-full px-2 -blue-200 absolute translate-y-1/2 -translate-x-1/2 right-auto bottom-20 left-0 ">
            <Image src={bgChat} alt="" width={200} />
          </span>
        </div>
      </div>
      <div className=" w-1/5 h-2/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 opacity-10 dark:opacity-20 absolute float-right right-0 blur-3xl"></div>
    </div>
  );
}

export default Hero;
