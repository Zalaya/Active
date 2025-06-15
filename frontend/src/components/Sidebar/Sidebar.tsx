import type { ComponentType, SVGProps } from "react";

import { HomeIcon, ClipboardIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import { SidebarSection } from "@/components/Sidebar/SidebarSection.tsx";
import { useSidebar } from "@/contexts/SidebarContext.tsx";

export type NavItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  fallback: string;
  key: string;
  path: string;
};

const topItems: NavItem[] = [
  { icon: HomeIcon, fallback: "Home", key: "sidebar.home", path: "/" },
  { icon: ClipboardIcon, fallback: "Tasks", key: "sidebar.tasks", path: "/tasks" },
];

const bottomItems: NavItem[] = [
  { icon: Cog6ToothIcon, fallback: "Settings", key: "sidebar.settings", path: "/settings" },
  { icon: UserIcon, fallback: "Profile", key: "sidebar.profile", path: "/profile" }
];

export const Sidebar = () => {
  const { mode } = useSidebar();
  const isHover = mode === "hover";

  return (
    <div className={`fixed top-0 left-0 z-50 ${isHover ? "group/sidebar" : ""}`}>
      <div
        className={`transition-all duration-300 bg-white border-r flex justify-center 
          ${isHover ? "w-0 hover:w-20" : "w-20"}
        `}
      >
        <div className="relative flex justify-center items-center w-full">
          <div
            className={`flex flex-col justify-between items-center py-4 h-screen transition-opacity duration-200
              ${isHover ? "opacity-0 group-hover/sidebar:opacity-100" : "opacity-100"}
            `}
          >
            <SidebarSection items={topItems} />
            <SidebarSection items={bottomItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
