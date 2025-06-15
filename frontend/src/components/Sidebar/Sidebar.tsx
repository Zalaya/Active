import type { ComponentType, SVGProps } from "react";

import { HomeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

import { SidebarSection } from "@/components/Sidebar/SidebarSection.tsx";

export type NavItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  key: string;
  path: string;
};

const topItems: NavItem[] = [
  { icon: HomeIcon, key: "sidebar.home", path: "/home" }
];

const bottomItems: NavItem[] = [
  { icon: Cog6ToothIcon, key: "sidebar.settings", path: "/settings" }
];

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-20 h-screen bg-white border-r flex flex-col justify-between items-center py-4">
      <SidebarSection items={topItems} />
      <SidebarSection items={bottomItems} />
    </div>
  );
};
