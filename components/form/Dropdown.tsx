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

  const errorUnderOption = Boolean(defaultValue && error);
  const errorInSelect = Boolean(!defaultValue && error);

  return (
    <div className='flex flex-col gap-1 flex-1'>
      <label htmlFor={id} className={cn(error ? 'text-red-500' : '')}>
        {error ? `${label} *` : label}
      </label>
      <select
        id={id}
        name={name}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        className={cn(
          'border-2 border-(--clr-accent) p-3 rounded-[10px] text-(--clr-accent-3)',
          error ? 'border-red-500' : '',
          selected ? 'font-semibold' : '',
          errorInSelect && 'text-black  bg-red-50'
        )}
        defaultValue={defaultValue || ''}
      >
        <option value='' className='text-(--clr-accent-3) font-bold'>
          {errorInSelect ? error : optionTitle}
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
      {errorUnderOption && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};
export default Dropdown;
