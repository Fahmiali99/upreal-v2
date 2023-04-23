import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import MultipleItems from "@/components/common/SlickItem";

function Project() {
  const [open, setOpen] = useState(false);

  const handleOPen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
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
              <MultipleItems />
            </div>
          </div>
          {/* <div className=" w-1/5 h-2/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 opacity-10 dark:opacity-20 absolute float-right right-0 blur-3xl"></div> */}
        </div>
      </div>

      <button
        onClick={handleOPen}
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="defaultModal"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50  w-full flex justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          open ? "block" : "hidden"
        }`}
      >
        <div className=" bg-gray-900 w-screen h-screen absolute opacity-40"></div>
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                onClick={handleClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
