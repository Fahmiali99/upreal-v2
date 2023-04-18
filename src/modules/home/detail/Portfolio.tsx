import React from "react";

function Portfolio() {
  return (
    <div className="py-20">
      {/* 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <h1 className="font-bold text-2xl text-blue-500">Live Demos</h1>
          <p className="text-gray-500 dark:text-white font-normal text-sm">
            Pack with awesome features, well-coded and easy-to-use user
            interface.
          </p>
        </div>

        <div>
          <p className="text-gray-500 dark:text-white font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            similique facilis expedita soluta nam. Voluptatum aut dolorum
            tenetur molestias ut, minus aspernatur perferendis magni sint
            excepturi non dolore quis recusandae.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div>
        <h1>Portfolio</h1>
      </div>
    </div>
  );
}

export default Portfolio;
