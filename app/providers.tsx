import { Toaster } from 'sonner';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}

export default Providers;
