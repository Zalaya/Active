import { useSidebar } from "@/contexts/SidebarContext.tsx";
import { Switch } from "@/components/Switch.tsx";

export const Settings = () => {
  const { mode, toggleMode } = useSidebar();

  return (
    <div className="max-w-xl p-4">
      <Switch
        checked={mode === "fixed"}
        onChange={toggleMode}
        label="Sidebar fijo"
      />
    </div>
  );
};
