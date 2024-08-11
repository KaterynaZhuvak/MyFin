import { type Dispatch, type FC, type SetStateAction, useState } from 'react';
import { Field, useFormikContext } from 'formik';
import { Icon } from '@shared/icons/Icon';

interface DropdownInterface {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputName: string;
  options: string[];
  inputWrapperStyles: string;
  inputStyles: string;
  inputIconStyles: string;
  dropdownWrapperStyles: string;
  dropdownStyles: string;
  optionStyles: string;
  optionIconStyles: string;
}

export const CustomDropdown: FC<DropdownInterface> = ({
  inputValue,
  setInputValue,
  inputName,
  options,
  inputWrapperStyles,
  inputStyles,
  inputIconStyles,
  dropdownWrapperStyles,
  dropdownStyles,
  optionStyles,
  optionIconStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { setFieldValue } = useFormikContext();

  const handleOnClick = (option: string): void => {
    setFieldValue(inputName, option).catch(() => {
      // Error occurred, but we're handling it silently
      // You might want to set an error state here if appropriate
    });
  };

  return (
    <div className={inputWrapperStyles}>
      <Field
        name={inputName}
        type='text'
        value={inputValue}
        placeholder={inputValue ? inputValue : options[0]}
        readOnly
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${inputStyles} focus:outline-none`}
      />

      <Icon
        name='arrow'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${isOpen ? 'rotate-180' : 'rotate-0'} ${inputIconStyles}`}
      />

      <div
        className={`${isOpen ? 'block bg-[#0F0F0F]' : 'hidden'} ${dropdownWrapperStyles}`}
      >
        <ul className={dropdownStyles}>
          {options.map((option) => (
            <li key={option} className='relative'>
              <button
                type='button'
                value={option}
                onClick={() => {
                  handleOnClick(option);
                  setInputValue(option);
                  setIsOpen(false);
                }}
                className={`${inputValue === option ? 'bg-[#272727] text-bright-green' : 'bg-transparent'} ${optionStyles}`}
              >
                {option}
              </button>

              <Icon
                name='tick'
                className={`${inputValue === option ? '' : 'hidden'} ${optionIconStyles}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
