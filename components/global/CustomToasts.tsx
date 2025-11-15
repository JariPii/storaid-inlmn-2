import { toast } from 'sonner';
import Image from 'next/image';
import logo from '@/public/images/Logo.png';
import { returnMessages } from '@/utils/toastMessages';

export function successToast(message: string, senderName?: any) {
  const { heading, body } = returnMessages(message);

  toast.custom((t) => (
    <div
      className='p-4 flex flex-col items-center bg-(--clr-secondary) rounded-sm gap-2 border-2 border-(--clr-accent) hover:cursor-pointer'
      onClick={() => toast.dismiss(t)}
    >
      <Image
        src={logo}
        alt='Company logo'
        className='bg-(--clr-primary) h-10 w-auto'
      />
      <h2 className='text-(--clr-accent) text-center text-nowrap text-3xl'>
        {senderName ? `${heading} ${senderName}!` : `${heading}`}
      </h2>
      {body && (
        <p className=' text-(--clr-accent) text-nowrap text-center normal-case'>
          {body}
        </p>
      )}
    </div>
  ));
}

export function warningToast(message: string) {
  toast.custom((t) => (
    <div
      className='bg-white p-4 border-2 border-red-500 rounded-sm hover:cursor-pointer'
      onClick={() => toast.dismiss(t)}
    >
      <Image
        src={logo}
        alt='Company logo'
        className='bg-(--clr-primary) h-10 w-auto'
      />
      <p className='mt-3 text-red-500 text-2xl'>{message}</p>
    </div>
  ));
}
