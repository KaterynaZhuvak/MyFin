import { type FC } from 'react';
import { NavLink } from 'react-router-dom';

export const ExpensesFiltersWidget: FC = () => {
  return (
    <section className='flex w-[964px] flex-row justify-between'>
      <h1 className='text-[34px] font-bold leading-10'>All Expenses</h1>
      <NavLink
        to='/expenses/create'
        className='gradient flex h-[40px] w-[212px] items-center justify-center rounded-[10px] text-[16px] font-semibold'
      >
        Add a new expense
      </NavLink>
    </section>
  );
};
