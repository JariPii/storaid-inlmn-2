'use client';
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
};

const Form = ({ action, children }: FormProps) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      console.log(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {children} {state.message && <p>{state.message}</p>}
    </form>
  );
};
export default Form;
