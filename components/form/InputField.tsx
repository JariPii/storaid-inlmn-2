import { cn } from '@/lib/utils';

import React from 'react';

type InputFieldProps = {
  type: string;
  name: string;
  label?: string;
  labelVisibility?: 'hidden' | 'block';
  labelOptional?: string;
  labelOptionalError?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({
  type,
  name,
  label,
  labelVisibility = 'block',
  labelOptional,
  labelOptionalError,
  placeholder,
  className,
  defaultValue,
  error,
  onChange,
}: InputFieldProps) => {
  // TODO: Add optional chaining to error and labelOptional text, default and error!!

  return (
    <div className='flex flex-col gap-1 flex-1'>
      <div className='flex gap-1'>
        <label
          htmlFor={name}
          className={cn(`${labelVisibility}`, error ? 'text-red-500' : '')}
        >
          {error ? `${labelOptionalError} * ` : ` ${label} `}
        </label>
        <span className={cn(' text-sm align-text-top')}>
          {labelOptional ? `${labelOptional} ` : ''}
        </span>
      </div>
      <input
        id={name}
        name={name}
        type={type}
        className={cn(
          `border-2 placeholder:text-(--clr-accent-3) p-3 rounded-[10px] focus:border-(--clr-secondary) w-full ${
            error
              ? ' border-red-500 bg-red-100 placeholder:text-black'
              : ' border-(--clr-accent)'
          }`,
          className
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};
export default InputField;
