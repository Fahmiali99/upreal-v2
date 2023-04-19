import React, { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
