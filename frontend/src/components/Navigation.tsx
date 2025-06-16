import { Routes, Route } from "react-router-dom";

import { sections } from "@/components/Sidebar/Sidebar.constants.ts";

export const Navigation = () => (
  <Routes>
    {sections.flatMap(section =>
      section.items.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))
    )}
  </Routes>
);
