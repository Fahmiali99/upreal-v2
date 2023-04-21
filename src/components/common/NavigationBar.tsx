import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logo from "@/../../public/assets/layout/logo.png";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const router = useRouter();

  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` fixed w-full z-20 top-0 left-0 border-b border-gray-600 duration-300 ease-in-out ${
        scrolled ? " bg-zinc-800 text-white " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto my-auto px-4 sm:px-0  flex flex-wrap items-center justify-between  p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} className=" mr-3" width={45} alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Upreal
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white border border-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            onClick={handleOpen}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
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
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
            open ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col  md:p-0 mt-4 font-medium   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
              scrolled ? "text-white" : ""
            }`}
          >
            {menu.map((item, idx) => (
              <div key={idx} className="py-2">
                <li
                  className={
                    router.pathname === item.href
                      ? "active   decoration-orange-500  underline underline-offset-[10px] md:underline-offset-[32px] decoration-[2px]"
                      : ""
                  }
                >
                  <Link className=" py-2 pl-2 pr-2" href={item.href}>
                    {item.name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(NavigationBar);
