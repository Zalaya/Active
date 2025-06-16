import { NavLink } from "react-router-dom";

import { useSidebar } from "@/contexts/SidebarContext.tsx";
import type { ComponentType, SVGProps } from "react";

interface SidebarButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  path: string;
  label: string;
}

export const SidebarButton = ({ icon: Icon, path, label }: SidebarButtonProps) => {
  const { expanded } = useSidebar();

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div
          className={`flex items-center p-3 rounded-md transition-all duration-200 cursor-pointer shadow-md
            ${isActive ? "bg-gray-200 text-black" : "text-black hover:text-black hover:bg-gray-200"}
          `}
        >
          <Icon className="h-6 w-6 flex-shrink-0 transition-transform duration-200 transform" />
          <span
            className={`ml-2 text-sm font-medium truncate transition-all duration-200
              ${expanded ? "opacity-100 visible w-auto" : "opacity-0 invisible w-0"}
            `}
          >
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
};