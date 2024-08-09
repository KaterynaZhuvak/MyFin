import type { FC } from 'react';
import { ExpensesList, ExpensesTotalMoneyAmount } from '@entities/expenses';
import { ExpensesFiltersWidget } from '@widgets/Expenses/ui/ExpensesFiltersWidget';

export const ExpensesPage: FC = () => {
  return (
    <main className='size-full  p-[40px_74px_94px_24px]'>
      <ExpensesFiltersWidget />
      <ExpensesTotalMoneyAmount />
      <ExpensesList />
    </main>
  );
};
