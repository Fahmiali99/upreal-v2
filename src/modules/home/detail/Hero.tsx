import React from "react";

function Hero() {
  return (
    <div className="h-screen bg-[url('../../public/assets/home/head.png')] flex items-center bg-cover  ">
      <div className="container flex items-center mx-auto my-auto px-4 sm:px-0">
        <div className="md:flex justify-between items-center py-10">
          <div>
            <h1
              data-aos="fade-up"
              className="text-white tracking-tighter uppercase font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-8xl  "
            >
              Upreal
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className=" w-3/4 py-5 text-gray-200 font-normal "
            >
              autem corrupti totam itaque officia quidem provident recusandae
              quisquam omnis veritatis odit. Ducimus?
            </p>
          </div>
        </div>
        <div className=" w-1/5 h-2/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 opacity-10 dark:opacity-20 absolute float-right right-0 blur-3xl"></div>
      </div>
    </div>
  );
}

export default Hero;
