import { cn } from '@/lib/utils';

type TextAreaInputProps = {
  rows: number;
  name: string;
  labelText: string;
  defaultValue?: string;
  className?: string;
  placeHolder?: string;
  required?: string;
};

const TextAreaInput = ({
  rows,
  name,
  labelText,
  defaultValue,
  className,
  placeHolder,
  required,
}: TextAreaInputProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{labelText || name}</label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={rows}
        className={cn(
          'border-2 rounded-[5px] border-(--clr-accent) placeholder:text-(--clr-accent-3) p-3',
          className
        )}
        placeholder={placeHolder}
        required
      />
    </div>
  );
};
export default TextAreaInput;
