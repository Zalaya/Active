import { useTranslation } from "react-i18next";

import { SidebarButton } from "@/components/Sidebar/SidebarButton.tsx";

import type { SidebarItem } from "@/components/Sidebar/Sidebar.types.ts";

interface SidebarSectionProps {
  items: SidebarItem[];
}

export const SidebarSection = ({ items }: SidebarSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className={`px-4 flex flex-col gap-4`}>
      {items.map(({ icon, path, key }) => (
        <SidebarButton icon={icon} path={path} label={t(key)} />
      ))}
    </div>
  );
};