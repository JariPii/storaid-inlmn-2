'use client';
import { pricingPlans } from '@/mockData';
import { createContext, useContext, useState } from 'react';

type BookingContextType = {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
  resetBooking: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedUnit, setSelectedUnit] = useState('');

  const resetBooking = () => setSelectedUnit('');

  return (
    <BookingContext.Provider
      value={{ selectedUnit, setSelectedUnit, resetBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be within a BookingProvider');
  }
  return context;
};

type NameContextType = {
  senderName: string;
  setSenderName: (name: string) => void;
  resetSenderName: () => void;
};

const NameContext = createContext<NameContextType | undefined>(undefined);

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [senderName, setSenderName] = useState('');

  const resetSenderName = () => setSenderName('');

  return (
    <NameContext.Provider
      value={{ senderName, setSenderName, resetSenderName }}
    >
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error('useName must be within a NameProvider');
  }
  return context;
};
