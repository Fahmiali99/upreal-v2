import React, { useState } from "react";
import dynamic from "next/dynamic";

const ThemeChanger = dynamic(() => import("@/components/common/ThemeHand"), {
  ssr: false,
});

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  return (
    <div className=" bg-white-700  dark:bg-gray-900 text-white border-b  dark:border-slate-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:px-0">
        <a
          href="https://flowbite.com/"
          className="flex items-center text-black dark:text-dark"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          onClick={handleOpen}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${open ? " block" : " hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col  md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
            {menu.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-black dark:text-white text-sm"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <ThemeChanger />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
