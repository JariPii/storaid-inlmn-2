import { BookingProvider, NameProvider } from '@/hooks/BookingContext';
import { Toaster } from 'sonner';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BookingProvider>
        <NameProvider>
          <Toaster position='top-center' />
          {children}
        </NameProvider>
      </BookingProvider>
    </>
  );
}

export default Providers;
