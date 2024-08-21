import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@shared/icons/Icon';

export const ExpensesFiltersWidget: FC = () => {
  const viewport = window.innerWidth;

  return (
    <section className=' flex w-full flex-row items-center justify-between tablet:w-full'>
      <Icon
        name='filters'
        className='block size-[24px] cursor-pointer stroke-white tablet:hidden'
      />

      <h2 className='text-center text-[25px] font-bold leading-10 tablet:text-left tablet:text-[34px]'>
        All Expenses
      </h2>

      <NavLink
        to='/expenses/create'
        className='flex items-center justify-center gap-[2px] rounded-[10px] text-[16px] font-semibold text-bright-green tablet:h-[40px] tablet:w-[212px] tablet:bg-[linear-gradient(289.25deg,_#BFFCBA_-112.17%,_rgba(155,_255,_182,_0.8217)_-19.51%,_rgba(122,_250,_199,_0.484375)_-0.92%,_#15FFC0_133.51%,_rgba(68,_255,_221,_0.7)_157.37%)] tablet:text-white tablet:hover:bg-[linear-gradient(289.25deg,_#A3E99D_-112.17%,_rgba(9,_52,_35,_0.484375)_1.54%,_#05A67B_133.51%,_rgba(155,_255,_182,_0.8217)_157.34%,_rgba(68,_255,_221,_0.7)_157.37%)]'
      >
        <Icon
          name='plus'
          className='block size-[24px] stroke-bright-green tablet:hidden'
        />
        {viewport >= 768 ? 'Add a new expense' : 'Add'}
      </NavLink>
    </section>
  );
};
