import FooterBar from "@/components/common/FooterBar";
import NavigationBar from "@/components/common/NavigationBar";
import React from "react";

function AboutPage() {
  return (
    <div>
      <NavigationBar />
      <div className="h-screen flex items-center bg-zinc-900 text-white">
        AboutPage
      </div>
      <FooterBar />
    </div>
  );
}

export default AboutPage;
