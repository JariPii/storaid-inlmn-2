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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({
  type,
  name,
  label,
  placeholder,
  labelVisibility = 'block',
  className,
  defaultValue,
  error,
  onChange,
}: InputFieldProps) => {
  const errorUnderInput = Boolean(defaultValue && error);
  const errorInPlaceholder = Boolean(!defaultValue && error);

  return (
    <div className='flex flex-col gap-1 flex-1'>
      <label
        htmlFor={name}
        className={cn(`${labelVisibility}`, error ? 'text-red-500' : '')}
      >
        {error ? `${label} *` : `${label || name}`}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={cn(
          `border-2 placeholder:text-(--clr-accent-3) p-3 rounded-[10px] focus:border-(--clr-secondary) w-full ${
            error ? 'border-red-500' : ' border-(--clr-accent)'
          }`,
          errorInPlaceholder && 'text-black font-bold bg-red-50',
          className
        )}
        placeholder={errorInPlaceholder ? error : placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {errorUnderInput && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};
export default InputField;
