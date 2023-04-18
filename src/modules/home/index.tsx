import React from "react";

import Hero from "./detail/Hero";
import Content from "./detail/Content";
import Portfolio from "./detail/Portfolio";
import Service from "./detail/Service";
import Maps from "./detail/Maps";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <Service />
      <Content />
      <Portfolio />
      <Maps />
    </div>
  );
}

export default HomePage;
