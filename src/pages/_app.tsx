import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FooterBar from "@/components/common/FooterBar";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <div className=" ">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
