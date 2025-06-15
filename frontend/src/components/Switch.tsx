import { Switch as HeadlessSwitch } from "@headlessui/react";

interface SwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch = ({ label, checked, onChange }: SwitchProps) => {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm">{label}</span>}
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        className={`${
          checked ? "bg-purple-600" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
      >
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </HeadlessSwitch>
    </div>
  );
};