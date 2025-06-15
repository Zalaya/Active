import type { ComponentType, SVGProps } from "react";

export type Route = {
  path: string;
  element: ComponentType;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  key: string;
  position: "top" | "bottom";
};
