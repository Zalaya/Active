import { SidebarSection } from "@/components/Sidebar/SidebarSection.tsx";
import { bottomItems, topItems } from "@/components/Sidebar/Sidebar.constants.ts";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-20 h-screen bg-white border-r flex flex-col justify-between items-center py-4">
      <SidebarSection items={topItems} />
      <SidebarSection items={bottomItems} />
    </div>
  );
};
