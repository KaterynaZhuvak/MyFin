import type { FC } from 'react';
import { ExpensesList, ExpensesTotalMoneyAmount } from '@entities/expenses';
import { FiltersAndAddButton } from '@widgets/Expenses/ui/FiltersAndAddButton';

export const ExpensesPage: FC = () => {
  return (
    <main className='size-full  p-[40px_74px_94px_24px]'>
      <FiltersAndAddButton />
      <ExpensesTotalMoneyAmount />
      <ExpensesList />
    </main>
  );
};
