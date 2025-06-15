import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/Home.tsx";
import { Settings } from "@/pages/Settings.tsx";

export const Navigation = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);