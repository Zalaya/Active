import { Layout } from "@/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "@/Navigation.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
};