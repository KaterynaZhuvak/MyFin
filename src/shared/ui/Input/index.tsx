import { type ReactNode, type FC, type InputHTMLAttributes, memo } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import { type VariantProps, cva } from 'class-variance-authority';
import { Icon } from '@shared/icons/Icon';
import { cn } from '../../lib/cn';

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
  icon?: ReactNode | null;
}

export const Input: FC<InputProps> = memo(function Input({
  label,
  name,
  icon,
  FormInput,
  ...rest
}) {
  const [_, meta] = useField(name);
  return (
    <label
      className='relative flex w-full flex-col gap-3 font-sans text-xl text-white'
      htmlFor={name}
    >
      {label}
      <div className='relative'>
        <Field
          className={cn(
            inputVariants({ FormInput }),
            meta.error ? 'border-red-500' : ''
          )}
          id={name}
          name={name}
          {...rest}
        />
        {icon}
        {meta.touched && !meta.error && FormInput === 'authInput' ? (
          <Icon
            name='form-ok'
            className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-1/2 size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#05A67B] via-[#093423] to-[#093423] tablet:right-[-40px] tablet:size-[24px]`}
          />
        ) : null}
        {meta.touched && meta.error && FormInput === 'authInput' ? (
          <Icon
            name='form-error'
            className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-1/2 size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-t from-[#FF4444] to-[#FF7363] tablet:right-[-40px] tablet:size-[24px]`}
          />
        ) : null}
      </div>
      <ErrorMessage name={name}>
        {(msg) => <div className='text-red-500'>{msg}</div>}
      </ErrorMessage>
    </label>
  );
});
