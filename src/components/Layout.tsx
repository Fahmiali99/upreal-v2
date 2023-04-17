import React, { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <div className=" ">
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
