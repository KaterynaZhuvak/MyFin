import {
  type ChangeEvent,
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
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

export const Select: FC<SelectProps> = ({
  name,
  options,
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

  const handleOnFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
      field.onBlur(name);
    }, 150);
  }, [field, name]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(name, event.target.value).catch(() => {
        // Error occurred, but we're handling it silently
        // You might want to set an error state here if appropriate
      });
    },
    [setFieldValue, name]
  );

  const handleOnClick = useCallback(
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
    <fieldset className={cn('relative w-full', className)}>
      <div className='relative w-full'>
        <input
          {...field}
          type='text'
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
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
          isOpen
            ? 'absolute z-10 mt-2 w-full overflow-hidden rounded-[15px] border border-white bg-modal-background'
            : 'hidden'
        }
      >
        <ul className='max-h-[408px] w-full overflow-y-auto rounded-[15px]'>
          {filteredOptions.map((option) => (
            <option
              key={option}
              onClick={handleOnClick}
              className='flex h-[64px] w-full items-center rounded-[15px] bg-transparent pl-5 hover:cursor-pointer'
            >
              {option}
            </option>
          ))}
        </ul>
      </div>
      <div
        className={meta.touched && meta.error ? 'mt-1 text-red-500' : 'hidden'}
      >
        {meta.error}
      </div>
    </fieldset>
  );
};
