import type { PropsWithChildren } from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen bg-purple-100">
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  );
};