import type { FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { CustomPopover } from '@shared/ui/CustomPopover';

export const SearchButton: FC = () => {
  return (
    <CustomPopover
      trigger={
        <div className='self-center justify-self-center tablet:hidden '>
          <Icon
            name='magnifying-glass'
            className='order-1 size-[20px] cursor-pointer '
          />
        </div>
      }
      content={
        <div className='flex w-screen justify-center bg-[#060606]'>
          <form className='relative w-[343px]'>
            <input
              type='search'
              name='search'
              placeholder='Search'
              className='h-[52px] w-full rounded-full border-2 border-white bg-transparent pl-[52px] pr-[32px] text-white outline-none'
            />
            <Icon
              name='magnifying-glass'
              className='absolute left-[30px] top-[18px] size-[16px] cursor-pointer'
            />
          </form>
        </div>
      }
      sideOffset={15}
    />
  );
};
