import Image from "next/image";
import React from "react";

function Service() {
  return (
    <div className=" bg-zinc-700">
      <div className="container mx-auto my-auto px-4 sm:px-0 py-20 text-white text-center">
        <div>
          <p>quidem repellat tenetur fugiat ipsa excepturi placeat!</p>
          <h1 className=" text-2xl font-bold pt-2">Service Availabe</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center">
          {service.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-left"
              data-aos-delay="400"
              className="flex justify-center pt-6"
            >
              <div
                className={`bg-cover bg-[url('../../public/assets/home/service.png')] w-72 h-96 flex items-end justify-center`}
              >
                <div className="pb-5">
                  <h1 className="text-2xl font-semibold">{item.title}</h1>
                  <p className=" text-gray-300">{item.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const service = [
  {
    title: "TYPE 1",
    about: "Lorem ipsum dolor sit amet",
  },
  {
    title: "TYPE 1",
    about: "Lorem ipsum dolor sit amet",
  },
  {
    title: "TYPE 1",
    about: "Lorem ipsum dolor sit amet",
  },
  {
    title: "TYPE 1",
    about: "Lorem ipsum dolor sit amet",
  },
  {
    title: "TYPE 1",
    about: "Lorem ipsum dolor sit amet",
  },
];

export default Service;
