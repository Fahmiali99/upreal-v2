import React from "react";
import imgMaps from "@/../../public/assets/home/world.png";
import Image from "next/image";
function Maps() {
  return (
    <div className="">
      <div className="relative">
        <div className="flex justify-center items-center">
          <Image
            className="absolute w-3/4 md:w-2/4 opacity-10"
            src={imgMaps}
            alt=""
          />
          <div className="relative py-5 md:py-0 container mx-auto my-auto px-4 sm:px-0 h-auto md:h-[calc(90vh-4rem)] ">
            <div className="h-full flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold sm:text-4xl w-4/5 md:w-3/5 text-center ">
                Subscribe now to Our Newsletter and get the Coupon code.
              </h1>
              <p className="text-center py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
