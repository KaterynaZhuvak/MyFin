import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExpensesList } from '@entities/expenses';
import { expensesApi } from '@entities/expenses/api/expenses.api';

export const ExpensesPage: FC = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: expensesApi,
  });

  return (
    <section className='size-full bg-[#0F0F0F] p-[40px_74px_94px_24px]'>
      <h1 className='text-[34px] font-bold leading-10'>Expenses Page</h1>
      <h1 className='m-[40px_0] text-[24px] font-bold leading-10'>
        In Total for this period:{' '}
        <span className='text-[#AE6B6B]'>${data?.sum} $</span>
      </h1>
      <ExpensesList
        expenses={data ? data.expenses : []}
        isLoading={isLoading}
        isError={isError}
        error={error ? error : undefined}
      />
    </section>
  );
};
