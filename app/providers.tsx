import { Toaster } from 'sonner';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position='top-center' />
      {children}
    </>
  );
}

export default Providers;
