import type { ButtonHTMLAttributes, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const buttonVariants = cva(['text-center font-sans text-white'], {
  variants: {
    variant: {
      getStarted:
        'gradient rounded-[15px] px-[92px] py-[23px] text-[40px] font-bold',
      logIn:
        'gradient rounded-[15px] px-[31px] py-[6px] text-[20px] font-semibold mobile:hidden tablet:block',
      logInMobile: 'tablet:hidden',
    },
  },
});

interface NavigationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title: string;
  path: string;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  variant,
  ...props
}) => {
  const navigate = useNavigate();

  const changeURL = (): void => {
    navigate(props.path);
  };

  return (
    <button
      type='button'
      onClick={changeURL}
      className={cn(buttonVariants({ variant }))}
    >
      {props.title}
    </button>
  );
};
