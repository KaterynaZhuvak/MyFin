import { type ReactNode, type FC, type InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  inputProps: {
    startPosition?: ReactNode;
    endPosition?: ReactNode;
  };
}

export const Input: FC<InputProps> = ({ label, name, inputProps, ...rest }) => {
  const Icon = inputProps.startPosition ?? inputProps.endPosition;
  return (
    <div
      className={`${label ? 'flex flex-col gap-3' : ''} font-[Helvetica] text-xl`}
    >
      <label className='text-white' htmlFor={name}>
        {label}
      </label>

      <div className='relative'>
        <Field
          className={`${inputProps.endPosition ? 'left-6 h-16 rounded-[15px] border-white pl-5' : 'h-[52px] max-w-[416px] rounded-[26px] border-neutral-white-2 pl-[52px]'} w-full border border-solid bg-transparent text-base text-white`}
          id={name}
          name={name}
          {...rest}
        />
        <ErrorMessage name={name} />

        <div
          className={`${inputProps.endPosition ? 'right-5' : 'left-7'} absolute top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          {Icon}
        </div>
      </div>
    </div>
  );
};
