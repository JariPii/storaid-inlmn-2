import { socialLinks } from '@/utils/socialLinks';

const HeaderSocials = () => {
  return (
    <div className='flex gap-4'>
      {socialLinks.map((link, i) => {
        const Icon = link.icon;
        const { ariaLabelName, href } = link;
        return (
          <div key={i} className='h-auto rounded-full bg-(--clr-accent) p-1'>
            <a
              href={href}
              aria-label={ariaLabelName}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon className='w-[1.5rem] h-[1.5rem] text-(--clr-secondary)' />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default HeaderSocials;
