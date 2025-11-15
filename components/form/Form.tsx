'use client';

import { useBooking, useName } from '@/hooks/FormContext';
import { cn } from '@/lib/utils';
import { ActionResponse } from '@/utils/types';
import {
  startTransition,
  useActionState,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from 'react';
import { successToast, warningToast } from '../global/CustomToasts';
import { ZodObject, z } from 'zod';

const initialState: ActionResponse<Record<string, unknown>> = {
  success: false,
  message: '',
  errors: {},
  inputs: {},
};

type FormProps<S extends ZodObject<any>> = {
  action: (
    _prevState: ActionResponse<z.infer<S>> | null,
    formData: FormData
  ) => Promise<ActionResponse<z.infer<S>>>;
  children: (args: {
    isPending: boolean;
    state: ActionResponse<z.infer<S>>;
    handleFieldChange: (field: keyof z.infer<S>, value: any) => void;
  }) => React.ReactNode;
  className?: string;
  schema?: S;
};

const Form = <S extends ZodObject<any>>({
  action,
  children,
  className,
  schema,
}: FormProps<S>) => {
  const [state, formAction, isPending] = useActionState(action, initialState);
  const [clientErrors, setClientErrors] = useState<Record<string, string[]>>(
    {}
  );
  const { resetBooking } = useBooking();
  const { senderName: senderName, resetSenderName } = useName();

  const formRef = useRef<HTMLFormElement>(null);

  const handleReset = useEffectEvent(() => {
    resetBooking();
    resetSenderName();

    setClientErrors({});

    formRef.current?.reset();
  });

  const handleFieldChange = (field: keyof z.infer<S>, value: any) => {
    if (!schema) return;
    const fieldSchema = schema.pick({ [field]: true } as const);

    const partialData = { [field]: value } as Partial<z.infer<S>>;
    const result = fieldSchema.safeParse(partialData);

    const newErrors = { ...clientErrors };
    if (!result.success) {
      newErrors[field as string] = result.error.issues.map((e) => e.message);
    } else {
      delete newErrors[field as string];
    }

    setClientErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!schema) return;
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries()) as z.infer<S>;

    const validation = schema.safeParse(rawData);

    if (!validation.success) {
      const newErrors: Record<string, string[]> = {};

      validation.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        if (field) {
          if (!newErrors[field]) newErrors[field] = [];
          newErrors[field].push(err.message);
        }
      });
      setClientErrors(newErrors);
      warningToast('Please correct the highlighted fields');
      return;
    }

    setClientErrors({});
    startTransition(() => {
      formAction(formData);
    });
  };

  function mergeErrors<T extends Record<string, unknown>>(
    serverErrors: { [K in keyof T]?: string[] } | undefined,
    clientErrors: Record<string, string[]>
  ): { [K in keyof T]?: string[] } {
    return {
      ...(serverErrors ?? {}),
      ...(clientErrors as { [K in keyof T]?: string[] }),
    };
  }

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
        ref={formRef}
        action={!schema ? formAction : undefined}
        onSubmit={schema ? handleSubmit : undefined}
        className={cn('flex gap-2 w-full flex-1', className)}
        noValidate
      >
        {children({
          isPending,
          state: {
            ...state,
            errors: mergeErrors(state.errors, clientErrors),
          },
          handleFieldChange,
        })}
      </form>
    </>
  );
};
export default Form;
