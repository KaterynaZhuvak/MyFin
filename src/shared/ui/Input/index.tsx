import { type ReactNode, type FC, type InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const inputVariants = cva(
  'w-full border border-solid border-white bg-transparent text-base text-white',
  {
    variants: {
      authInput: {
        default:
          'left-6 h-16 rounded-[10px] pl-5 text-base tablet:rounded-[15px]',
      },
    },
    defaultVariants: {
      authInput: 'default',
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  name: string;
  className?: string;

  icon?: ReactNode | null;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  icon,
  className,
  ...rest
}) => {
  return (
    <label
      className='relative flex w-full flex-col gap-3 font-sans text-xl text-white'
      htmlFor={name}
    >
      {label}
      <Field
        className={cn(inputVariants({ authInput: 'default' }), className)}
        id={name}
        name={name}
        {...rest}
      />
      {icon}
      <ErrorMessage name={name}>
        {(msg) => <div className='text-red-500'>{msg}</div>}
      </ErrorMessage>
    </label>
  );
};
