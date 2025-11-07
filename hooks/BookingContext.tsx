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
