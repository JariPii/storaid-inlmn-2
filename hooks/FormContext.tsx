'use client';
import { createContext, useContext, useState } from 'react';

type SendBookingContextType = {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
  resetBooking: () => void;
};

type SendNameContextType = {
  senderName: string;
  setSenderName: (name: string) => void;
  resetSenderName: () => void;
};

type FormContextType = {
  booking: SendBookingContextType;
  name: SendNameContextType;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const resetBooking = () => setSelectedUnit('');

  const [senderName, setSenderName] = useState('');
  const resetSenderName = () => setSenderName('');

  return (
    <FormContext.Provider
      value={{
        booking: { selectedUnit, setSelectedUnit, resetBooking },
        name: { senderName, setSenderName, resetSenderName },
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useBooking must be within a BookingProvider');
  }
  return context.booking;
};

export const useName = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useName must be within a NameProvider');
  }
  return context.name;
};
