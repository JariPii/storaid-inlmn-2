'use client';

import { useBooking, useName } from '@/hooks/BookingContext';
import { cn } from '@/lib/utils';
import { ActionResponse } from '@/utils/types';
import { useActionState, useEffect, useEffectEvent } from 'react';
import { successToast, warningToast } from '../global/CustomToasts';

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
  const { senderName: senderName, resetSenderName } = useName();

  const handleReset = useEffectEvent(() => {
    resetBooking();
    resetSenderName();
  });

  useEffect(() => {
    if (!state.message) {
      return;
    }
    if (!state.success) {
      warningToast(state.message);
    } else {
      successToast(state.message, senderName);

      handleReset();
    }
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className={cn('flex gap-2 w-full flex-1', className)}
        noValidate
      >
        {children({ isPending, state })}
      </form>
    </>
  );
};
export default Form;
