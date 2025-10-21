'use client';
import { cn } from '@/lib/utils';
import { useActionState, useEffect } from 'react';

export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ success: boolean; message: string }>;

const initialState = {
  success: false,
  message: '',
};

type FormProps = {
  action: actionFunction;
  children: React.ReactNode;
  className?: string;
};

const Form = ({ action, children, className }: FormProps) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      console.log(state.message);
    }
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className={cn('flex gap-2 w-full flex-1', className)}
      >
        {children}
      </form>
      <div>{state.message && <p>{state.message}</p>}</div>
    </>
  );
};
export default Form;
