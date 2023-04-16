import React from "react";
import NavigationBar from "./common/NavigationBar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <div className=" bg-slate-700  text-white">
        <NavigationBar />
        <div className="w-screen my-auto max-w-7xl mx-auto px-4 sm:px-0">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
