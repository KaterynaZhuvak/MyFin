import type { FC } from 'react';
import { ExpensesList, ExpensesTotalMoneyAmount } from '@entities/expenses';

export const ExpensesPage: FC = () => {
  return (
    <section className='size-full bg-[#0F0F0F] p-[40px_74px_94px_24px]'>
      <ExpensesTotalMoneyAmount />
      <ExpensesList />
    </section>
  );
};
