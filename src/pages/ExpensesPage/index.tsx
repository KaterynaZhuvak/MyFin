import type { FC } from 'react';
import { ExpensesList } from '@entities/expenses';

export const ExpensesPage: FC = () => {
  return (
    <section className='size-full bg-[#0F0F0F] p-[40px_74px_94px_24px]'>
      <h1 className='text-[34px] font-bold leading-10'>Expenses Page</h1>
      <h1 className='m-[40px_0] text-[24px] font-bold leading-10'>
        In Total for this period: <span className='text-[#AE6B6B]'>3500 $</span>
      </h1>
      <ExpensesList />
    </section>
  );
};
