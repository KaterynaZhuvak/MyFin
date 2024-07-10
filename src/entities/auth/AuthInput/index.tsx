import { type ReactNode, type FC } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Icon } from '@shared/icons/Icon';
import { Input } from '@shared/ui/Input';
import { cn } from '@shared/lib/cn';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icon?: ReactNode;
}

export const AuthInput: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  icon,
}) => {
  const [_, meta] = useField(name);
  return (
    <div className='relative'>
      <Input
        className={cn(meta.error && meta.touched ? 'border-red-500' : '')}
        label={label}
        type={type}
        name={name}
        icon={icon}
        placeholder={placeholder}
        FormInput='authInput'
      />
      {meta.touched && !meta.error ? (
        <Icon
          name='form-ok'
          className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-[62px] size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#05A67B] via-[#093423] to-[#093423] tablet:right-[-40px] tablet:top-[72px] tablet:size-[24px]`}
        />
      ) : null}
      {meta.touched && meta.error ? (
        <Icon
          name='form-error'
          className={`absolute ${icon ? 'right-[50px]' : 'right-[16px]'} top-[62px] size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-t from-[#FF4444] to-[#FF7363] tablet:right-[-40px] tablet:top-[72px] tablet:size-[24px]`}
        />
      ) : null}
      <ErrorMessage name={name}>
        {(msg) => <div className='text-red-500'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
