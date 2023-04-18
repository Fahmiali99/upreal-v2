import React from "react";
import { contents } from "@/utils/contents";

function Content() {
  return (
    <div className="container mx-auto my-auto px-4 sm:px-0 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {contents.map((item, idx) => (
          <div
            key={idx}
            className="hover:animate-pulse border p-4 bg-gray-100 dark:bg-slate-800 text-black dark:bg-gray-800 dark:text-white dark:border-slate-800 rounded-lg"
          >
            <item.Icons className="text-5xl text-blue-500" />
            <h1 className="font-bold text-xl text-blue-500">{item.name}</h1>
            <p className="text-gray-500 dark:text-white font-normal text-sm">
              {item.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
