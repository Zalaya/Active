import { useTranslation } from "react-i18next";

import type { NavItem } from "@/components/Sidebar/Sidebar.tsx";
import { SidebarButton } from "@/components/Sidebar/SidebarButton.tsx";

interface SidebarSectionProps {
  items: NavItem[];
}

export const SidebarSection = ({ items }: SidebarSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-center">
      {items.map(({ icon, key, path }) => (
        <SidebarButton key={key} icon={icon} label={t(key)} path={path} />
      ))}
    </div>
  );
};