import { SidebarSection } from "@/components/Sidebar/SidebarSection.tsx";
import { sections } from "@/components/Sidebar/Sidebar.constants.ts";
import {useSidebar} from "@/contexts/SidebarContext.tsx";
import type {MouseEvent} from "react";

export const Sidebar = () => {
  const { expanded, toggleExpanded } = useSidebar();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggleExpanded();
    }
  }

  return (
    <div
      className={`${expanded ? "w-48" : "w-20"} h-full bg-white rounded-lg shadow-md flex flex-col justify-between py-4 transition-all duration-200`}
      onClick={handleClick}
    >
      {sections.map(section => (
        <SidebarSection key={section.id} items={section.items} />
      ))}
    </div>
  );
};

