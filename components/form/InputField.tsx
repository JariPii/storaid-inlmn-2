type InputFieldProps = {
  type: 'text' | 'email';
  id: string;
  name: string;
  placeholder: string;
};

const InputField = ({ type, id, name, placeholder }: InputFieldProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <label htmlFor='name'>Your Name</label>
      <input
        type={type}
        id={id}
        name={name}
        className=' border-[1px] border-(--clr-accent) placeholder:text-(--clr-accent) p-3.5 rounded-[10px] focus:border-(--clr-secondary)'
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default InputField;
