import { type ReactNode, type FC, type InputHTMLAttributes } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import { type VariantProps, cva } from 'class-variance-authority';
import { Icon } from '@shared/icons/Icon';
import { cn } from '../../lib/cn';

const inputVariants = cva(
  'w-full border border-solid bg-transparent text-base text-white',
  {
    variants: {
      iconPosition: {
        start:
          'h-[52px] max-w-[416px] rounded-[26px] border-neutral-white-2 pl-[52px]',
        end: 'left-6 h-16 rounded-[10px] border-white pl-5 tablet:rounded-[15px]',
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
      end: 'right-[5px] tablet:right-[20px]',
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
  const [_, meta] = useField(name);

  return (
    <div
      className={`${label ? 'flex flex-col gap-3' : ''} w-full font-sans text-xl`}
    >
      <label className='text-white' htmlFor={name}>
        {label}
      </label>

      <div className='relative'>
        <Field
          className={cn(inputVariants({ iconPosition, className }), {
            'border-red-500': meta.touched && meta.error,
          })}
          id={name}
          name={name}
          {...rest}
        />
        <div className={cn(iconVariants({ iconPosition }))}>{icon}</div>
        {meta.touched && !meta.error ? (
          <div
            className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-1/2 -translate-y-1/2 tablet:right-[-40px]`}
          >
            <Icon
              name='form-ok'
              className='size-[20px] rounded-full bg-gradient-to-br from-[#05A67B] via-[#093423] to-[#093423] tablet:size-[24px]'
            />
          </div>
        ) : null}
        {meta.touched && meta.error ? (
          <Icon
            name='form-error'
            className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-1/2 size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-t from-[#FF4444] to-[#FF7363] tablet:right-[-40px] tablet:size-[24px]`}
          />
        ) : null}
      </div>
      <ErrorMessage name={name}>
        {(msg) => <div className='text-red-500'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
