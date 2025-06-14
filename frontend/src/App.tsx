import { Layout } from "@/components/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "@/components/Navigation.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
};