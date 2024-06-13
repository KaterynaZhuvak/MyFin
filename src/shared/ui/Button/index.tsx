import type { ButtonHTMLAttributes, FC } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(['text-center font-sans'], {
  variants: {
    variant: {
      gradient: 'gradient rounded-[15px] text-white',
      outline:
        'rounded-[15px] border-DEFAULT border-bright-green bg-transparent text-bright-green hover:border-pale-green hover:text-pale-green',
      ghost: 'text-white hover:text-bright-green tablet:hidden',
    },
    size: {
      xs: 'py-[5px] text-[16px]',
      s: 'py-[6px] text-[20px]',
      m: 'py-[8px] text-[28px]',
      l: 'py-[8px] text-[32px]',
      xl: 'py-[18px] text-[40px]',
    },
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ variant, size, ...props }) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={cn(buttonVariants({ variant, size }), props.className)}
    >
      {props.title}
    </button>
  );
};
