import { cn } from '@/lib/utils';

type TextAreaInputProps = {
  rows: number;
  name: string;
  labelText: string;
  defaultValue?: string;
  className?: string;
  placeHolder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const TextAreaInput = ({
  rows,
  name,
  labelText,
  defaultValue,
  className,
  placeHolder,
  required,
  onChange,
  error,
}: TextAreaInputProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className={cn(error ? 'text-red-500' : '')}>
        {error ? `${labelText} *` : labelText || name}
      </label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={rows}
        className={cn(
          `border-2 rounded-[5px] border-(--clr-accent) placeholder:text-(--clr-accent-3) p-3  `,
          error ? 'border-red-500' : '',
          className
        )}
        placeholder={placeHolder}
        required={required}
        onChange={onChange}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};
export default TextAreaInput;
