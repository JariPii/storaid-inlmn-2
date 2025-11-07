'use client';

import { useBooking } from '@/hooks/BookingContext';
import { cn } from '@/lib/utils';
import { ActionResponse } from '@/utils/types';
import { useActionState, useEffect, useEffectEvent } from 'react';

const initialState: ActionResponse<Record<string, unknown>> = {
  success: false,
  message: '',
  errors: {},
  inputs: {},
};

type FormProps<T extends Record<string, unknown>> = {
  action: (
    _prevState: ActionResponse<T> | null,
    formData: FormData
  ) => Promise<ActionResponse<T>>;
  children: (args: {
    isPending: boolean;
    state: ActionResponse<T>;
  }) => React.ReactNode;
  className?: string;
};

const Form = <T extends Record<string, unknown>>({
  action,
  children,
  className,
}: FormProps<T>) => {
  const [state, formAction, isPending] = useActionState(action, initialState);
  const { resetBooking } = useBooking();

  const handleReset = useEffectEvent(() => {
    resetBooking();
  });

  useEffect(() => {
    if (state.success) {
      handleReset();
    }
    // if (state.success) {
    //   console.log('Resetting booking context...');
    // }
  }, [state]);

  return (
    <>
      <form
        // key={formKey}
        action={formAction}
        className={cn('flex gap-2 w-full flex-1', className)}
      >
        {children({ isPending, state })}
      </form>
    </>
  );
};
export default Form;
