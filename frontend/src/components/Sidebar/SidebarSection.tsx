import { SidebarButton } from "@/components/Sidebar/SidebarButton.tsx";

import type { SidebarItem } from "@/components/Sidebar/Sidebar.types.ts";

interface SidebarSectionProps {
  items: SidebarItem[];
}

export const SidebarSection = ({ items }: SidebarSectionProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {items.map(({ icon, key, path }) => (
        <SidebarButton key={key} icon={icon} path={path} />
      ))}
    </div>
  );
};