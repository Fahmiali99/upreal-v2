import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Content() {
  return (
    <div className=" bg-zinc-700">
      <div className="container mx-auto my-auto px-4 sm:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contents.map((item: any, idx: number) => (
            <div key={idx}>
              <p className="text-gray-500 dark:text-white font-normal text-sm">
                {item.about}
              </p>
            </div>
          ))}
        </div>
        <div className="  mt-10 grid grid-cols-3">
          <div className=" border-b border-orange-500"></div>
          <div className=" border-b border-white"></div>
          <div className=" border-b border-white"></div>
        </div>
      </div>
    </div>
  );
}

const contents = [
  {
    about: (
      <div
        data-aos="fade-left"
        className="hover:animate-pulse border p-4  text-black  rounded-lg"
      >
        <div className="  text-white">
          voluptate minima voluptas voluptatum itaque quisquam debitis officia
          beatae porro, sit quis!
        </div>
        <div className=" font-bold text-xl text-white pt-2 flex items-center">
          <h1 className="mr-2">Fast loading</h1> <BsArrowRight />
        </div>
      </div>
    ),
  },
  {
    about: (
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="hover:animate-pulse border border-gray-400 p-4  text-black  rounded-lg"
      >
        <div className="  text-gray-400">
          voluptate minima voluptas voluptatum itaque quisquam debitis officia
          beatae porro, sit quis!
        </div>
        <div className=" font-bold text-xl text-gray-400 pt-2 flex items-center">
          <h1 className="mr-2">W3 Validated</h1> <BsArrowRight />
        </div>
      </div>
    ),
  },
  {
    about: (
      <div
        data-aos="fade-left"
        data-aos-delay="600"
        className="hover:animate-pulse border p-4 border-gray-500 text-black  rounded-lg"
      >
        <div className="  text-gray-500">
          voluptate minima voluptas voluptatum itaque quisquam debitis officia
          beatae porro, sit quis!
        </div>
        <div className=" font-bold text-xl text-gray-500 pt-2 flex items-center">
          <h1 className="mr-2">Creative design</h1> <BsArrowRight />
        </div>
      </div>
    ),
  },
];

export default Content;
