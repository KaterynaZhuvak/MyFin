import type { FC } from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <svg
      width='16.000000'
      height='16.000000'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className='absolute right-[24px] top-[15px] z-10 cursor-pointer min-[768px]:hidden'
      onClick={onClick}
    >
      <defs>
        <clipPath id='clip439_4762'>
          <rect
            id='mingcute:close-fill'
            width='16.000000'
            height='16.000000'
            fill='white'
            fillOpacity='0'
          />
        </clipPath>
      </defs>
      <rect
        id='mingcute:close-fill'
        width='16.000000'
        height='16.000000'
        fill='#FFFFFF'
        fillOpacity='0'
      />
      <g clipPath='url(#clip439_4762)'>
        <path
          id='Vector'
          d='M8 9.41L11.53 12.95C11.72 13.13 11.97 13.24 12.24 13.24C12.5 13.24 12.76 13.13 12.95 12.95C13.13 12.76 13.24 12.5 13.24 12.24C13.24 11.97 13.13 11.72 12.95 11.53L9.41 8L12.94 4.46C13.04 4.37 13.11 4.26 13.16 4.14C13.21 4.01 13.24 3.88 13.24 3.75C13.24 3.62 13.21 3.49 13.16 3.37C13.11 3.25 13.04 3.14 12.94 3.05C12.85 2.95 12.74 2.88 12.62 2.83C12.5 2.78 12.37 2.75 12.24 2.75C12.11 2.75 11.98 2.78 11.85 2.83C11.73 2.88 11.62 2.95 11.53 3.05L8 6.58L4.46 3.05C4.37 2.95 4.26 2.87 4.14 2.82C4.01 2.77 3.88 2.74 3.75 2.74C3.62 2.74 3.48 2.76 3.36 2.81C3.24 2.86 3.13 2.94 3.03 3.03C2.94 3.13 2.87 3.24 2.81 3.36C2.76 3.48 2.74 3.62 2.74 3.75C2.74 3.88 2.77 4.01 2.82 4.13C2.87 4.26 2.95 4.37 3.05 4.46L6.58 8L3.05 11.53C2.95 11.62 2.87 11.73 2.82 11.86C2.77 11.98 2.74 12.11 2.74 12.24C2.74 12.37 2.77 12.51 2.82 12.63C2.87 12.75 2.94 12.86 3.03 12.96C3.13 13.05 3.24 13.13 3.36 13.18C3.49 13.23 3.62 13.25 3.75 13.25C3.88 13.25 4.01 13.22 4.14 13.17C4.26 13.12 4.37 13.04 4.46 12.94L8 9.41L8 9.41Z'
          fill='#FFFFFF'
          fillOpacity='1.000000'
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};
