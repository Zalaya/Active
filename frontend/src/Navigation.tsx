import { Routes, Route } from "react-router-dom";
import { Settings } from "@/pages/Settings";

export const Navigation = () => (
  <Routes>
    <Route path="/settings" element={<Settings />} />
  </Routes>
);