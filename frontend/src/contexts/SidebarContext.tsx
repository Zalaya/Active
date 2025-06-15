import { createContext, type PropsWithChildren, useContext, useState } from "react";

type SidebarMode = "fixed" | "hover";

interface SidebarContextState {
  mode: SidebarMode;
  toggleMode: () => void;
};

export const SidebarContext = createContext<SidebarContextState | undefined>(undefined);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<SidebarMode>(() => {
    return (localStorage.getItem("sidebar-mode") as SidebarMode) || "fixed";
  })

  const toggleMode = () => {
    const newMode = mode === "fixed" ? "hover" : "fixed";

    setMode(newMode);
    localStorage.setItem("sidebar-mode", newMode);
  }

  return (
    <SidebarContext.Provider value={{ mode, toggleMode }}>
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