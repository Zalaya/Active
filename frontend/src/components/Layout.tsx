import type { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {

}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  );
};