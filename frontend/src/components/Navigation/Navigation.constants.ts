import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

import { Home } from "@/pages/Home.tsx";
import { Settings } from "@/pages/Settings.tsx";
import type { Route } from "@/components/Navigation/Navigation.types.ts";

export const routes: Route[] = [
  {
    path: "/home",
    element: Home,
    icon: HomeIcon,
    key: "sidebar.home",
    position: "top",
  },
  {
    path: "/settings",
    element: Settings,
    icon: Cog6ToothIcon,
    key: "sidebar.settings",
    position: "bottom",
  }
];
