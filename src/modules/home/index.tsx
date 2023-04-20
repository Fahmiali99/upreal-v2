import React, { useEffect, useState } from "react";
import Hero from "./detail/Hero";
import Content from "./detail/Content";
import Maps from "./detail/Maps";
import Service from "./detail/Service";
import Project from "./detail/Project";

import AOS from "aos";
import "aos/dist/aos.css";
import SplashScreen from "@/components/common/SplashScreen";
import NavigationBar from "@/components/common/NavigationBar";
import FooterBar from "@/components/common/FooterBar";

function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 200,
    });
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <NavigationBar />
          <div>
            <Hero />
            <Content />
            <Service />
            <Project />
            {/* <Maps /> */}
          </div>
          <FooterBar />
        </>
      )}
    </div>
  );
}

export default HomePage;
