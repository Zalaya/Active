import { useTranslation } from "react-i18next";

import { SidebarButton } from "@/components/Sidebar/SidebarButton.tsx";
import type { Route } from "@/components/Navigation/Navigation.types.ts";

interface SidebarSectionProps {
  items: Route[];
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