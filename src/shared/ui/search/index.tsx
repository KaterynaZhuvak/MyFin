import { type FormEvent, type FC } from 'react';
import { Icon } from '@shared/icons/Icon';

export const SmarchInput: FC = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): string => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue: string = (form.search as HTMLInputElement).value;
    return inputValue;
  };

  return (
    <form
      className='relative order-2 hidden self-center justify-self-center tablet:block '
      onSubmit={handleOnSubmit}
    >
      <input
        type='search'
        name='search'
        placeholder='Search'
        className='h-[52px] w-[416px] rounded-full border-2 border-white bg-transparent pl-[52px] pr-[32px] text-white outline-none'
      />
      <Icon
        name='magnifying-glass'
        className='absolute left-[24px] top-[18px] size-[16px] cursor-pointer'
      />
    </form>
  );
};
