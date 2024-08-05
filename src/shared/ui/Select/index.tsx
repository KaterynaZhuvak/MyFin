import {
  type ChangeEvent,
  type MouseEvent,
  useCallback,
  useMemo,
  useState,
  type FC,
} from 'react';
import { Icon } from '@shared/icons/Icon';
import { cn } from '@shared/lib/cn';

interface SelectProps {
  label?: string;
  name: string;
  options: string[];
  placeholder?: string;
  value?: string;
  className?: string;
  inputClassName?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  name,
  options,
  placeholder,
  value,
  className,
  inputClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ?? '');

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [options, inputValue]
  );

  const handleOnFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, []);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleOnClick = useCallback((e: MouseEvent<HTMLOptionElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
    setIsOpen(false);
  }, []);

  return (
    <fieldset className={cn('relative w-full', className)}>
      {label ? (
        <label htmlFor={name} className='mb-2 block text-[20px]'>
          {label}
        </label>
      ) : null}
      <div className='relative w-full'>
        <input
          type='text'
          onFocus={handleOnFocus}
          name={name}
          id={name}
          value={inputValue}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={placeholder}
          className={cn(
            'h-[64px] w-full rounded-[15px] border border-white bg-transparent pl-5 pr-12',
            inputClassName
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
      {isOpen ? (
        <div className='absolute z-10 mt-2 w-full overflow-hidden rounded-[15px] border border-white bg-modal-background'>
          <ul className='max-h-[408px] w-full overflow-y-auto rounded-[15px]'>
            {filteredOptions.map((option) => (
              <option
                key={option}
                value={option}
                onClick={handleOnClick}
                className='flex h-[64px] w-full items-center rounded-[15px] bg-transparent pl-5 hover:cursor-pointer'
              >
                {option}
              </option>
            ))}
          </ul>
        </div>
      ) : null}
    </fieldset>
  );
};
