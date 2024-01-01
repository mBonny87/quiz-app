import { ChangeEventHandler } from 'react';

export type CheckboxProps = {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  return (
    <div className="container flex items-center gap-4">
      <input type="checkbox" name="filter" id={label} onChange={onChange} />
      <label className="text-slate-800" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
