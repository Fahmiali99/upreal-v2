import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FooterBar from "@/components/common/FooterBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <NavigationBar />
      <div className=" container mx-auto my-auto px-4 sm:px-0">
        <Component {...pageProps} />
      </div>
      <FooterBar />
    </ThemeProvider>
  );
}

export default App;
