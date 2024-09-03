import type { FC } from 'react';
import { CreateExpense } from '@features/expenses';

export const CreateExpensePage: FC = () => {
  return (
    <main className='size-full'>
      <CreateExpense />
    </main>
  );
};
