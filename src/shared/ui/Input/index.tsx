import { type ReactNode, type FC, type InputHTMLAttributes } from 'react';
import { Field } from 'formik';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@shared/lib/cn';

const inputVariants = cva(
  'w-full border border-solid border-white bg-transparent text-base text-white',
  {
    variants: {
      FormInput: {
        authInput:
          'h-[44px] w-[318px] rounded-[10px] pl-5 text-base tablet:h-[64px] tablet:w-[378px] tablet:rounded-[15px]',
      },
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  name: string;
  FormInput?: 'authInput';
  className?: string;
  icon?: ReactNode | null;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  icon,
  FormInput,
  className,
  ...rest
}) => {
  return (
    <label
      className='flex w-full flex-col gap-3 font-sans text-xl text-white'
      htmlFor={name}
    >
      {label}
      <div className='relative'>
        <Field
          className={cn(inputVariants({ FormInput }), className)}
          id={name}
          name={name}
          {...rest}
        />
        {icon}
      </div>
    </label>
  );
};
