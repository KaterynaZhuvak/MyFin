import type { FC } from 'react';

interface ButtonWithGradientProps {
  title: string;
  styles: string;
}

export const ButtonWithGradient: FC<ButtonWithGradientProps> = ({
  title,
  styles,
}) => {
  return (
    <button
      type='button'
      className={`gradient rounded-[15px] text-center font-sans text-white ${styles}`}
    >
      {title}
    </button>
  );
};
