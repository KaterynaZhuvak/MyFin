import type { FC } from 'react';

export const SidebarButton: FC = () => {
  return (
    <button
      type='button'
      className='border-gradient m-[0_auto]  min-h-[42px] w-[152px]  '
    >
      <span className='bg-gradient-to-r from-[#2ED1A0] to-[#3F8B70] bg-clip-text text-[20px] text-transparent'>
        Log out
      </span>
    </button>
  );
};
