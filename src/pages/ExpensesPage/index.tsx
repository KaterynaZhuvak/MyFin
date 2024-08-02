import type { FC } from 'react';
import { ExpensesList, ExpensesTotalMoneyAmount } from '@entities/expenses';

export const ExpensesPage: FC = () => {
  return (
    <section className='size-full bg-[#0F0F0F] p-[40px_74px_94px_24px]'>
      <h1 className='text-[34px] font-bold leading-10'>Expenses Page</h1>
      <ExpensesTotalMoneyAmount />
      <ExpensesList />
    </section>
  );
};
