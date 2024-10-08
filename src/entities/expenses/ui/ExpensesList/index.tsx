import { type FC } from 'react';
import { useExpensesQuery } from '@entities/expenses/model';
import { Expense } from '../Expense';

export const ExpensesList: FC = () => {
  const { isLoading, isError, data, error } = useExpensesQuery();

  return (
    <>
      {isLoading ? (
        <h2 className='text-[18px] font-bold tablet:text-[30px]'>Loading...</h2>
      ) : (
        <ul className='w-full'>
          {data?.expenses.map((expense) => (
            <Expense key={expense._id} expense={expense} />
          ))}
        </ul>
      )}
      {!isLoading && !data?.expenses.length && (
        <div className='text-[18px] font-bold tablet:text-[30px]'>
          No expenses yet
        </div>
      )}
      {isError ? (
        <h2 className='text-[18px] font-bold tablet:text-[30px]'>
          {error?.message}
        </h2>
      ) : null}
    </>
  );
};
