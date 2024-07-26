import { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoutButton } from '@features/auth';
import { OurTeamModal } from '@entities/home/OurTeamModal';

export const UserPopoverContent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className='flex h-[246px] w-[217px] flex-col gap-[28px] rounded-[10px] border-2  border-white bg-black p-[20px_0_20px_20px]'>
      <NavLink
        to='/settings/change-avatar'
        className=' text-[20px] font-bold text-white transition-colors  hover:text-[#1D664F]'
      >
        Edit Avatar
      </NavLink>
      <button
        type='button'
        className='text-left text-[20px] font-bold text-white transition-colors  hover:text-[#1D664F]'
        onClick={handleIsOpen}
      >
        Contact Us
      </button>
      <NavLink
        to=''
        className='cursor-not-allowed  text-[20px] font-bold text-disabled-green'
        aria-disabled='true'
      >
        Privacy Policy
      </NavLink>
      <LogoutButton />
      <OurTeamModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </ul>
  );
};
