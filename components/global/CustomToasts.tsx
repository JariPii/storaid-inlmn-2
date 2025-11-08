import { toast } from 'sonner';
import Image from 'next/image';
import logo from '@/public/images/Logo.png';

export function successToast(message: string) {
  toast.custom((t) => (
    <div
      className='p-4 flex flex-col justify-center items-center bg-(--clr-secondary) rounded-sm gap-2 w-[30rem] border-2 border-(--clr-accent) hover:cursor-pointer'
      onClick={() => toast.dismiss(t)}
    >
      <Image
        src={logo}
        alt='Company logo'
        className='bg-(--clr-primary) h-10 w-auto'
      />
      <p className=' text-(--clr-accent) w-full'>{message}</p>
    </div>
  ));
}

export function warningToast(message: string) {
  toast.custom((t) => (
    <div
      className='bg-white p-4 border-2 border-red-500 rounded-sm hover:cursor-pointer'
      onClick={() => toast.dismiss(t)}
    >
      <p>{message}</p>
    </div>
  ));
}
