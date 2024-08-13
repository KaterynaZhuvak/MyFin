import type { FC } from 'react';
import { ExpensesList, ExpensesTotalMoneyAmount } from '@entities/expenses';
import { ExpensesFiltersWidget } from '@widgets/Expenses/ui/ExpensesFiltersWidget';

export const ExpensesPage: FC = () => {
  return (
    <main className='w-full p-[0_16px] desktop:p-[40px_74px_94px_24px]'>
      <ExpensesFiltersWidget />

      <ExpensesTotalMoneyAmount />

      <ExpensesList />
    </main>
  );
};
