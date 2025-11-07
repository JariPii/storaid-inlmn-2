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
  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        // value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        className={error ? 'border-2 border-red-500' : ''}
        defaultValue={defaultValue || ''}
      >
        <option value=''>{optionTitle}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
};
export default Dropdown;
