import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(['text-center font-sans'], {
  variants: {
    variant: {
      gradient: 'gradient rounded-[15px] text-white',
      outline:
        'rounded-[15px] border border-[bright-green] bg-transparent text-[bright-green] hover:border-[pale-green] hover:text-[pale-green]',
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

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof iconVariants> {
  title: string;
  iconPosition?: IconPositionType;
  icon?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      <div>{icon}</div>
      {props.title}
    </button>
  );
};
