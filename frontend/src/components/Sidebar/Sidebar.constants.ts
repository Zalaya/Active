import { UserIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

import { Home } from "@/pages/Home.tsx";
import { Settings } from "@/pages/Settings.tsx";
import { Profile } from "@/pages/Profile.tsx";

import type { SidebarSection } from "@/components/Sidebar/Sidebar.types.ts";

export const sections: SidebarSection[] = [
  {
    id: "top",
    items: [
      {
        path: "/home",
        element: Home,
        icon: HomeIcon,
        key: "sidebar.home",
      }
    ]
  },
  {
    id: "bottom",
    items: [
      {
        path: "/profile",
        element: Profile,
        icon: UserIcon,
        key: "sidebar.profile",
      },
      {
        path: "/settings",
        element: Settings,
        icon: Cog6ToothIcon,
        key: "sidebar.settings",
      }
    ]
  }
];