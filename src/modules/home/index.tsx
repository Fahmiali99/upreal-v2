import React from "react";

import Hero from "./detail/Hero";
import Content from "./detail/Content";
import Portfolio from "./detail/Portfolio";
import Service from "./detail/Service";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <Service />
      <Content />
      <Portfolio />
    </div>
  );
}

export default HomePage;
