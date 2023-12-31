import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home, Layout } from "./screens";
import ConnectModal from "./screens/Connect";
export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 6000,
    });

    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wallets" element={<ConnectModal />} />
        </Route>
      </Routes>
    </div>
  );
}
