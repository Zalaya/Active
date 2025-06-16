import { NavLink } from "react-router-dom";

import type { ComponentType, SVGProps } from "react";

interface SidebarButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  path: string;
}

export const SidebarButton = ({ icon: Icon, path }: SidebarButtonProps) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div
          className={`flex items-center p-3 rounded-md transition-all duration-200 cursor-pointer shadow-md
            ${isActive ? "bg-gray-300 text-black" : "text-gray-500 hover:text-black hover:bg-gray-200"}
          `}
        >
          <Icon className="h-6 w-6 transition-transform duration-200 transform" />
        </div>
      )}
    </NavLink>
  );
};