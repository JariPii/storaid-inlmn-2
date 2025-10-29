// type LabelProps = {
//   label?: 'hidden' | 'visible';
// };

import { cn } from '@/lib/utils';
import React from 'react';

type InputFieldProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  labelVisibility?: 'hidden' | 'block';
  className?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaRequired?: boolean;
};

const InputField = ({
  type,
  name,
  label,
  placeholder,
  labelVisibility = 'block',
  className,
  defaultValue,
  required = false,
  ariaRequired,
  onChange,
}: InputFieldProps) => {
  return (
    <div className='flex flex-col gap-1 flex-1'>
      <label htmlFor={name} className={`${labelVisibility}`}>
        {label || name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={cn(
          'border-[1px] border-(--clr-accent) placeholder:text-(--clr-accent)  p-3 rounded-[10px] focus:border-(--clr-secondary) w-full',
          className
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        aria-required={ariaRequired}
        onChange={onChange}
      />
    </div>
  );
};
export default InputField;
