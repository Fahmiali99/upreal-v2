import FooterBar from "@/components/common/FooterBar";
import NavigationBar from "@/components/common/NavigationBar";
import React from "react";

function NotFound() {
  return (
    <>
      <div className="text-white">
        <NavigationBar />
      </div>
      <div className=" h-[calc(90vh-4rem)] flex justify-center items-center text-white">
        <div>
          <h1 className=" text-xl font-thin underline underline-offset-[10px] md:underline-offset-[20px] decoration-[1px]">
            404 Page NotFound
          </h1>
        </div>
      </div>
      <div className="text-white">
        <FooterBar />
      </div>
    </>
  );
}

export default NotFound;
