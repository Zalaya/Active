import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface SidebarContextState {
  expanded: boolean;
  toggleExpanded: () => void;
}

const SidebarContext = createContext<SidebarContextState | undefined>(undefined);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev: boolean) => !prev);

  return (
    <SidebarContext.Provider value={{ expanded, toggleExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
