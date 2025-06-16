import type { PropsWithChildren } from "react";

import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen p-4 bg-gray-200 box-border">
      <div className="flex h-full gap-4">
        <Sidebar />
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
