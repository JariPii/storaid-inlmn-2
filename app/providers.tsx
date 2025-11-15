import { FormProvider } from '@/hooks/FormContext';
import { Toaster } from 'sonner';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FormProvider>
        <Toaster position='top-center' />
        {children}
      </FormProvider>
    </>
  );
}

export default Providers;
