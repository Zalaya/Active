import { SidebarSection } from "@/components/Sidebar/SidebarSection.tsx";
import { sections } from "@/components/Sidebar/Sidebar.constants.ts";

export const Sidebar = () => {
  return (
    <div className="w-20 h-full bg-white rounded-lg shadow-md flex flex-col justify-between py-4">
      {sections.map(section => (
        <SidebarSection key={section.id} items={section.items} />
      ))}
    </div>
  );
};

