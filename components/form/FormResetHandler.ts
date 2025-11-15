'use client';

import { useBooking } from '@/hooks/FormContext';
import { useEffect } from 'react';

type FormState = {
  message?: string;
};

const FormResetHandler = ({ state }: { state: FormState }) => {
  const { resetBooking } = useBooking();

  useEffect(() => {
    if (state.message) {
      resetBooking();
    }
  }, [state?.message, resetBooking]);
  return null;
};

export default FormResetHandler;
