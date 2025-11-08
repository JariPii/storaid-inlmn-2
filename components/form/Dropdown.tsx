import { cn } from '@/lib/utils';
import { useState } from 'react';

type DropdownProps = {
  onChange?: (value: string) => void;
  label: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  optionTitle: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
};

const Dropdown = ({
  label,
  id,
  name,
  options,
  optionTitle,
  onChange,
  required,
  error,
  defaultValue,
}: DropdownProps) => {
  const [selected, setSelected] = useState(defaultValue || '');
  return (
    <div className='flex flex-col gap-1 flex-1'>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        className={cn(
          'border-2 border-(--clr-accent) p-3 rounded-[10px] text-(--clr-accent-3)',
          error ? 'border-red-500' : '',
          selected ? 'font-semibold' : ''
        )}
        defaultValue={defaultValue || ''}
      >
        <option value='' className='text-(--clr-accent-3) font-bold'>
          {optionTitle}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='text-(--clr-accent-3) font-bold'
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};
export default Dropdown;
