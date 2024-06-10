import type { ButtonHTMLAttributes, FC } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(['text-center font-sans'], {
  variants: {
    variant: {
      gradient: 'gradient rounded-[15px] text-white',
      outline: '',
      withoutOutline: 'tablet:hidden',
    },
    size: {
      s: 'h-[42px] w-[122px]',
      m: 'h-[64px] w-[378px]',
      l: 'h-[96px] w-[416px]',
    },
  },
  compoundVariants: [
    {
      variant: 'gradient',
      size: 'l',
      class: 'text-[40px] font-bold',
    },
    {
      variant: 'gradient',
      size: 's',
      class: 'text-[20px] font-semibold mobile:hidden tablet:block',
    },
  ],
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ variant, size, ...props }) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={cn(buttonVariants({ variant, size }))}
    >
      {props.title}
    </button>
  );
};
