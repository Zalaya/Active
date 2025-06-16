import type { ComponentType, SVGProps } from "react";

export type SidebarItem = {
  path: string;
  element: ComponentType;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  key: string;
};

export type SidebarSection = {
  id: string;
  items: SidebarItem[];
};