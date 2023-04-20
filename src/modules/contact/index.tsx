import React from "react";
import FooterBar from "@/components/common/FooterBar";
import NavigationBar from "@/components/common/NavigationBar";

function ContactPage() {
  return (
    <div>
      <NavigationBar />
      <div className="h-screen flex items-center bg-zinc-900 text-white">
        ContactPage
      </div>
      <FooterBar />
    </div>
  );
}

export default ContactPage;
