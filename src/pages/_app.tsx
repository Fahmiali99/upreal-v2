import { ThemeProvider } from "next-themes";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <NavigationBar />
      <div className="w-screen my-auto max-w-7xl mx-auto px-4 sm:px-0">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
