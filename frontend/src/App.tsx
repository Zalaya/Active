import { BrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout.tsx";
import { Navigation } from "@/routes/Navigation.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
};