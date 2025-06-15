import { UserIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

import { Home } from "@/pages/Home.tsx";
import { Settings } from "@/pages/Settings.tsx";
import { Profile } from "@/pages/Profile.tsx";
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
    path: "/profile",
    element: Profile,
    icon: UserIcon,
    key: "sidebar.profile",
    position: "bottom",
  },
  {
    path: "/settings",
    element: Settings,
    icon: Cog6ToothIcon,
    key: "sidebar.settings",
    position: "bottom",
  }
];
