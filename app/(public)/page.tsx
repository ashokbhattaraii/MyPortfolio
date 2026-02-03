"use client";

import { useEffect, useState } from "react";
import Expertise from "./Components/Home/expertise";
import Contact from "./Components/Home/contact";
import Info from "./Components/Home/info";
import AboutMe from "./Components/Home/about-me";
import PopupMessage from "./Components/message/popupMessage";

export default function Home() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <main className="flex justify-center flex-col w-full overflow-x-hidden">
      {showNotification && (
        <PopupMessage
          onClose={() => setShowNotification(false)}
          autoCloseDuration={5000}
        />
      )}
      <Info />
      <AboutMe />
      <Expertise />
      <Contact />
    </main>
  );
}
