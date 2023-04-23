import SlickItem from "@/components/common/SlickItem";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

function Project() {
  return (
    <div className=" bg-zinc-700">
      <div className="h-screen bg-[url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex items-center bg-cover  ">
        <div className="container items-center mx-auto my-auto px-4 sm:px-0">
          {/* Section 1 */}
          <div className="md:flex justify-between items-center py-10">
            <div>
              <h1
                data-aos="fade-up"
                className="text-white grid grid-cols-2 tracking-tighter uppercase font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-6xl  "
              >
                Travel And Inspire Your Life
              </h1>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="flex items-center "
              >
                <BsPlayCircle className="mr-3 text-3xl text-white" />
                <p className=" w-3/4 py-5 text-white text-lg dark:text-white font-normal ">
                  Autem corrupti totam
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="grid grid-cols-1 md:grid-cols-2 items-center"
          >
            <p className=" w-auto md:w-5/6 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              soluta deserunt eligendi inventore hic fuga, pariatur consectetur,
              quam saepe ratione, suscipit veritatis quia velit aut odio ea
              ipsum ipsa eum.
            </p>
            <div className="p-5 md:p-0">
              <SlickItem />
            </div>
          </div>
          {/* <div className=" w-1/5 h-2/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 opacity-10 dark:opacity-20 absolute float-right right-0 blur-3xl"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
