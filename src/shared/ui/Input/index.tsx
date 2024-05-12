import { type ReactNode, type FC, type InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const inputVariants = cva(
  'w-full border border-solid bg-transparent text-base text-white',
  {
    variants: {
      iconPosition: {
        start:
          'h-[52px] max-w-[416px] rounded-[26px] border-neutral-white-2 pl-[52px]',
        end: 'left-6 h-16 rounded-[15px] border-white pl-5',
      },
    },
    defaultVariants: {
      iconPosition: 'end',
    },
  }
);

const iconVariants = cva('absolute top-1/2 -translate-x-1/2 -translate-y-1/2', {
  variants: {
    iconPosition: {
      start: 'left-7',
      end: 'right-5',
    },
  },
  defaultVariants: {
    iconPosition: 'end',
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  name: string;
  className?: string;

  icon?: ReactNode | null;
}

export const Input: FC<InputProps> = ({
  iconPosition,
  label,
  name,
  icon,
  className,
  ...rest
}) => {
  return (
    <div
      className={`${label ? 'flex flex-col gap-3' : ''} font-[Helvetica] text-xl`}
    >
      <label className='text-white' htmlFor={name}>
        {label}
      </label>

      <div className='relative'>
        <Field
          className={cn(inputVariants({ iconPosition, className }))}
          id={name}
          name={name}
          {...rest}
        />
        <ErrorMessage name={name} />

        <div className={cn(iconVariants({ iconPosition }))}>{icon}</div>
      </div>
    </div>
  );
};
