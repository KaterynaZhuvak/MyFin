import type { FC } from 'react';
import { ExpensesList } from '@entities/expenses';

export const ExpensesPage: FC = () => {
  return (
    <div className='size-full'>
      <h1>Expenses Page</h1>
      <ExpensesList />
    </div>
  );
};
