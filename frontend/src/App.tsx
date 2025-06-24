import { BrowserRouter } from "react-router-dom";

import { Router } from "@/Router.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};