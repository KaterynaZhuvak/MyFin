import {
  useCallback,
  useMemo,
  useState,
  type FC,
  type MouseEvent,
} from 'react';
import { useField, useFormikContext } from 'formik';
import { Icon } from '@shared/icons/Icon';
import { cn } from '@shared/lib/cn';

interface SelectProps {
  name: string;
  options: string[];
  maxLength?: number;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

export const Select: FC<SelectProps> = ({
  name,
  options,
  maxLength,
  placeholder,
  className,
  inputClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta] = useField<string>(name);
  const { setFieldValue } = useFormikContext();

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(field.value.toLowerCase())
      ),
    [options, field.value]
  );

  const onInputFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onInputBlur = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
      field.onBlur(name);
    }, 150);
  }, [field, name]);

  const onOptionClick = useCallback(
    (e: MouseEvent<HTMLOptionElement>) => {
      setFieldValue(name, e.currentTarget.value).catch(() => {
        // Error occurred, but we're handling it silently
        // You might want to set an error state here if appropriate
      });
      setIsOpen(false);
    },
    [setFieldValue, name]
  );

  return (
    <div className={cn('relative w-full', className)}>
      <div className='relative w-full'>
        <input
          {...field}
          type='text'
          id={name}
          maxLength={maxLength}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          placeholder={placeholder}
          className={cn(
            'h-[64px] w-full rounded-[15px] border border-white bg-transparent pl-5 pr-12',
            inputClassName,
            meta.touched && meta.error ? 'border-red-500' : ''
          )}
        />
        <Icon
          name='arrow'
          className={cn(
            'absolute right-[24px] top-1/2 size-6 -translate-y-1/2 transform',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <div
        className={
          isOpen && filteredOptions.length > 0
            ? 'absolute z-10 mt-2 w-full overflow-hidden rounded-[15px] border border-white bg-modal-background'
            : 'hidden'
        }
      >
        <ul className='max-h-[408px] w-full overflow-y-auto rounded-[15px]'>
          {filteredOptions.map((option) => (
            <option
              key={option}
              onClick={onOptionClick}
              className='flex h-[64px] w-full items-center rounded-[15px] bg-transparent pl-5 hover:cursor-pointer'
            >
              {option}
            </option>
          ))}
        </ul>
      </div>
    </div>
  );
};
