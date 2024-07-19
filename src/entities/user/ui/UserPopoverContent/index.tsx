import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const UserPopoverContent: FC = () => {
  return (
    <div className='h-[246px] w-[217px] rounded-[10px] border-2 border-white bg-black p-[20px_0_20px_20px] '>
      <ul className='flex h-[204px] w-[139px] flex-col gap-[28px]'>
        <NavLink
          to='/settings/change-avatar'
          className=' text-[20px] font-bold text-white'
        >
          Edit Avatar
        </NavLink>
        <NavLink to='' className='text-[20px] font-bold text-white'>
          Contact Us
        </NavLink>
        <NavLink to='' className='text-[20px] font-bold text-white'>
          Privacy Policy
        </NavLink>
        <button
          className='text-left text-[20px] font-bold text-white'
          type='button'
        >
          Log Out
        </button>
      </ul>
    </div>
  );
};
