import type { FC } from 'react';

interface GradientButtonProps {
  title: string;
  styles: string;
}

export const GradientButton: FC<GradientButtonProps> = ({ title, styles }) => {
  return (
    <button
      type='button'
      className={`gradient rounded-[15px] text-center font-sans text-white ${styles}`}
    >
      {title}
    </button>
  );
};
