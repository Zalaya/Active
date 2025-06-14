import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";

interface SidebarButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}

export const SidebarButton = ({ icon: Icon, label, path }: SidebarButtonProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `group flex flex-col items-center transition ${
          isActive ? "text-purple-700 hover:text-white" : "text-gray-500 hover:text-white"
        }`
      }
    >
      <div className="p-2 rounded-full group-hover:bg-purple-700 cursor-pointer transform group-hover:scale-125 transition duration-200">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-[10px]">{label}</span>
    </NavLink>
  );
};