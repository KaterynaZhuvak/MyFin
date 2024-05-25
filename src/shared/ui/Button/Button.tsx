import type { FC } from 'react';

export const Button: FC = () => {
  const customGradient = {
    background:
      'linear-gradient(-18.47deg, rgb(191, 252, 186) -76.08%, rgba(155, 255, 182, 0.82) -3.269%, rgba(122, 250, 199, 0.48) 11.343%, rgb(21, 255, 192) 116.98%, rgba(68, 255, 221, 0.7) 135.735%)',
  };

  return (
    <button
      type='button'
      style={customGradient}
      className='h-[64px] w-[378px] rounded-[15px] text-center font-sans text-[32px] font-bold text-white'
    >
      Button
    </button>
  );
};
