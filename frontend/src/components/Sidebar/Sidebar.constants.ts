import { routes } from "@/components/Navigation/Navigation.constants.ts";

export const topItems = routes.filter((route) => route.position === "top");
export const bottomItems = routes.filter((route) => route.position === "bottom");
