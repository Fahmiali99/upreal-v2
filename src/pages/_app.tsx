import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FooterBar from "@/components/common/FooterBar";

import AOS from "aos";
import "aos/dist/aos.css";
import SplashScreen from "@/components/common/SplashScreen";

function App({ Component, pageProps }: AppProps): JSX.Element {
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
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <NavigationBar />
          <div className=" ">
            <Component {...pageProps} />
          </div>
          <FooterBar />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
