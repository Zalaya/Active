import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/Home.tsx";
import { Tasks } from "@/pages/Tasks.tsx";
import { Settings } from "@/pages/Settings.tsx";
import { Profile } from "@/pages/Profile.tsx";

export const Navigation = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/tasks" element={<Tasks/>} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);