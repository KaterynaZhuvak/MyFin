import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const UserPopoverContent: FC = () => {
  return (
    <ul className='flex h-[246px] w-[217px] flex-col gap-[28px] rounded-[10px] border-2  border-white bg-black p-[20px_0_20px_20px]'>
      <NavLink
        to='/settings/change-avatar'
        className=' text-[20px] font-bold text-white transition-colors  hover:text-[#1D664F]'
      >
        Edit Avatar
      </NavLink>
      <NavLink
        to=''
        className='cursor-not-allowed text-[20px] font-bold text-disabled-green'
        aria-disabled='true'
      >
        Contact Us
      </NavLink>
      <NavLink
        to=''
        className='cursor-not-allowed text-[20px] font-bold text-disabled-green'
        aria-disabled='true'
      >
        Privacy Policy
      </NavLink>
      <button
        className='text-left text-[20px] font-bold text-white hover:text-[#1D664F]'
        type='button'
      >
        Log Out
      </button>
    </ul>
  );
};
