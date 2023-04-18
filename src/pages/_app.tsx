import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FooterBar from "@/components/common/FooterBar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 200,
    });
  });
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <NavigationBar />
      <div className=" ">
        <Component {...pageProps} />
      </div>
      <FooterBar />
    </ThemeProvider>
  );
}

export default App;
