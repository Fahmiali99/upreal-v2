import { adress, legal, product, sosmed } from "@/utils/footer";
import React from "react";

function FooterBar() {
  return (
    <footer className="bg-zinc-800  relative">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="text-white self-center text-2xl font-semibold whitespace-nowrap text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Legal
              </h2>
              <ul className=" text-gray-400 font-medium">
                {legal.map((item, idx) => (
                  <li key={idx} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-6 text-sm font-semibold  uppercase ">
                Products
              </h2>
              <ul className=" text-gray-400 font-medium">
                {product.map((item, idx) => (
                  <li key={idx} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Adress
              </h2>
              <ul className=" text-gray-400 font-medium">
                {adress.map((item, idx) => (
                  <li key={idx} className="mb-4">
                    <a href="#" className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2021 Copyright :
            <a href="https://fahmialihusni.com" className="hover:underline">
              UEC. Fahmi
            </a>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {sosmed.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 hover:text-white"
              >
                <item.Icons />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
