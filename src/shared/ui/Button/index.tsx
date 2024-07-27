import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(['font-sans', 'font-bold'], {
  variants: {
    variant: {
      gradient: [
        'gradient',
        'rounded-[15px]',
        'text-white',
        'disabled:bg-disabled-green',
      ],
      outline: [
        'rounded-[15px]',
        'border',
        'border-[bright-green]',
        'bg-transparent',
        'text-[bright-green]',
        'hover:border-[pale-green]',
        'hover:text-[pale-green]',
      ],
      ghost: [
        'text-white',
        'hover:text-bright-green',
        'disabled:text-disabled-green',
        'tablet:hidden',
      ],
      disabled: ['bg-disabled-green', 'rounded-[15px]', 'text-white'],
    },
    size: {
      xs: ['py-[5px]', 'text-[16px]'],
      s: ['py-[6px]', 'text-[20px]'],
      m: ['py-[8px]', 'text-[28px]'],
      l: ['py-[8px]', 'text-[32px]'],
      xl: ['tablet:py-[18px]', 'tablet:text-[40px]'],
    },
  },
});

type IconPositionType = 'start' | 'end';

const iconVariants = cva('absolute top-1/2 -translate-x-1/2 -translate-y-1/2', {
  variants: {
    iconPosition: {
      start: 'left-7',
      end: 'right-5',
    },
  },
  defaultVariants: {
    iconPosition: 'start',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof iconVariants> {
  title: string;
  iconPosition?: IconPositionType;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  icon,
  className,
  isSubmit = false,
  ...props
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={props.onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {icon}
      {props.title}
    </button>
  );
};
