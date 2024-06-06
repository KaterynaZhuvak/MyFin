import type { FC } from 'react';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <svg
      width='30.000000'
      height='22.000000'
      viewBox='0 0 30 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className='cursor-pointer min-[768px]:hidden'
      onClick={onClick}
    >
      <defs />
      <rect
        id='Rectangle 5775'
        rx='1.000000'
        width='30.000000'
        height='2.000000'
        fill='#FFFFFF'
        fillOpacity='1.000000'
      />
      <rect
        id='Rectangle 5776'
        y='10.000000'
        rx='1.000000'
        width='30.000000'
        height='2.000000'
        fill='#FFFFFF'
        fillOpacity='1.000000'
      />
      <rect
        id='Rectangle 5777'
        y='20.000000'
        rx='1.000000'
        width='30.000000'
        height='2.000000'
        fill='#FFFFFF'
        fillOpacity='1.000000'
      />
    </svg>
  );
};
