import type { FC } from 'react';

interface ButtonProps {
  title: string;
  styles: string;
}

export const Button: FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      type='button'
      className={`gradient rounded-[15px] text-center font-sans text-white ${styles}`}
    >
      {title}
    </button>
  );
};
