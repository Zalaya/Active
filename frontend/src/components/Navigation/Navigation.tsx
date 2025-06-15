import { Routes, Route } from "react-router-dom";

import { routes } from "@/components/Navigation/Navigation.constants.ts";

export const Navigation = () => (
  <Routes>
    {routes.map(({ path, element: Element }) => (
      <Route key={path} path={path} element={<Element />} />
    ))}
  </Routes>
);
