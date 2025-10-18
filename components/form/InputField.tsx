// type LabelProps = {
//   label?: 'hidden' | 'visible';
// };

import { cn } from '@/lib/utils';

type InputFieldProps = {
  type: 'text' | 'email';
  id: string;
  name: string;
  placeholder: string;
  labelVisibility?: 'hidden' | 'block';
  className?: string;
};

const InputField = ({
  type,
  id,
  name,
  placeholder,
  labelVisibility = 'block',
  className,
}: InputFieldProps) => {
  return (
    <div className='flex flex-col gap-3 flex-1'>
      <label htmlFor='name' className={`${labelVisibility}`}>
        Your Name
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={cn(
          'border-[1px] border-(--clr-accent) placeholder:text-(--clr-accent) p-3.5 rounded-[10px] focus:border-(--clr-secondary) w-full',
          className
        )}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default InputField;
