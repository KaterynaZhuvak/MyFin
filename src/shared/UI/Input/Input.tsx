import type { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  children?: ReactNode;
}

export const Input: FC<InputProps> = ({ label, name, children, ...rest }) => {
  return (
    <div className=' flex flex-col gap-3 font-helveticaReg text-xl '>
      <label className='text-white' htmlFor={name}>
        {label}
      </label>
      <div className='relative'>
        <Field
          className=' h-16 w-full rounded-15  border border-solid border-white bg-transparent pl-5 text-base text-white '
          id={name}
          name={name}
          {...rest}
        />
        <ErrorMessage name={name} />

        {children !== undefined && (
          <div className='absolute right-5  top-1/2 -translate-x-1/2 -translate-y-1/2'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
