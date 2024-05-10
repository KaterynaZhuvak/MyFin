import { useState, type FC, type InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';
import { CheckIcon, EyeOffIcon, EyeOnIcon, SearchIcon } from '../../sprite';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type: string;
  icon?: string;
}

export const Input: FC<InputProps> = ({ label, name, type, icon, ...rest }) => {
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);
  const Eye = isVisiblePassword ? <EyeOnIcon /> : <EyeOffIcon />;
  const typeOfText = isVisiblePassword ? 'text' : type;
  let Icon;

  switch (icon) {
    case 'check':
      Icon = <CheckIcon />;
      break;
    case 'search':
      Icon = <SearchIcon />;
      break;

    default:
      null;
  }

  return (
    <div
      className={`${icon !== 'search' ? 'flex flex-col gap-3' : ''}  font-helveticaReg text-xl`}
    >
      <label className='text-white' htmlFor={name}>
        {label}
      </label>
      <div className='relative'>
        <Field
          className={`${icon !== 'search' ? 'left-6 h-16 rounded-15px border-white pl-5' : 'h-52px max-w-416px rounded-26px border-neutral-white-2 pl-52px'} w-full border border-solid bg-transparent text-base text-white`}
          id={name}
          name={name}
          type={type !== 'password' ? type : typeOfText}
          {...rest}
        />
        <ErrorMessage name={name} />
        <div
          role='presentation'
          onMouseDown={() => {
            setIsvisiblePassword(true);
          }}
          onMouseUp={() => {
            setIsvisiblePassword(false);
          }}
          onMouseLeave={() => {
            setIsvisiblePassword(false);
          }}
          className={`${icon !== 'search' ? 'right-5' : 'left-7'} absolute   top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          {type !== 'password' ? Icon : Eye}
        </div>
      </div>
    </div>
  );
};
