import type { FC } from 'react';
import { ExpensesList } from '@entities/expenses';

export const ExpensesPage: FC = () => {
  return (
    <section className='size-full'>
      <h1 className='text-[34px] font-bold leading-10'>Expenses Page</h1>
      <ExpensesList />
    </section>
  );
};
