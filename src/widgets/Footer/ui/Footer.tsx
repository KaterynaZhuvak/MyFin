import { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@shared/icons/Icon';
import { OurTeamModal } from '@entities/home/OurTeamModal';

export const Footer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className='bg-header-background'>
      <div className='container relative flex flex-col items-center justify-center gap-[28px] py-[26px] tablet:gap-[49px] tablet:pb-[45px] tablet:pt-[30px]'>
        <div className='flex items-center justify-center gap-[32px] tablet:gap-[96px]'>
          <button
            type='button'
            className='text-[16px] hover:text-hover-green tablet:text-[20px] tablet:tracking-[0.02rem]'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Contact us
          </button>
          <NavLink
            to='/privacy-policy'
            className='text-[16px] tracking-[0.02rem] hover:text-hover-green disabled:text-disabled-green tablet:text-[20px]'
          >
            Privacy policy
          </NavLink>
        </div>
        <p className='text-[12px] tablet:text-[16px]'>
          &#169;{new Date().getFullYear()} MyFin. All Rights Reserved
        </p>
        <Icon
          name='logo-footer'
          className='absolute right-[16px] top-[57px] h-[14px] w-[62px] tablet:right-[72px] tablet:top-[53px] tablet:h-[60px] tablet:w-[186px]'
        />
      </div>
      <OurTeamModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </footer>
  );
};
