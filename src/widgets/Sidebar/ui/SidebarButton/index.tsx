import type { FC } from 'react';

export const SidebarButton: FC = () => {
  const buttonStyles = `
  border-gradient
  m-[96px_auto_0_auto]
  min-h-[42px]
  w-[152px]
  select-none
  duration-300

  tablet:mt-[562px]

  hover:border-[#20ccaa]
  hover:shadow-[0_5px_5px_1px_#1D664F5a,_0_0_0_#000,_0_-5px_5px_1px_#1D664F5a,_0_0_0_#000]

  *:duration-300
  *:hover:drop-shadow-[0_0px_2px_#1D664Faa]
  *:hover:text-[#10aaaa]
  `;

  return (
    <button type='button' className={buttonStyles}>
      <span className='bg-gradient-to-r from-[#2ED1A0] to-[#3F8B70] bg-clip-text text-[20px] text-transparent'>
        Log out
      </span>
    </button>
  );
};
