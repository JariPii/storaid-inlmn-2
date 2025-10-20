import { cn } from '@/lib/utils';

type TextAreaInputProps = {
  rows: number;
  name: string;
  labelText: string;
  defaultValue?: string;
  className?: string;
  placeHolder?: string;
};

const TextAreaInput = ({
  rows,
  name,
  labelText,
  defaultValue,
  className,
  placeHolder,
}: TextAreaInputProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{labelText || name}</label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={rows}
        required
        className={cn(
          'border-2 rounded-[5px] border-(--clr-accent) placeholder:text-(--clr-accent) p-3',
          className
        )}
        placeholder={placeHolder}
      />
    </div>
  );
};
export default TextAreaInput;
