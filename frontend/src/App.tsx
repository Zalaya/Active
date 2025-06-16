import { BrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout.tsx";
import { Navigation } from "@/components/Navigation.tsx";
import { SidebarProvider } from "@/contexts/SidebarContext.tsx";

export const App = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Layout>
          <Navigation />
        </Layout>
      </BrowserRouter>
    </SidebarProvider>
  );
};