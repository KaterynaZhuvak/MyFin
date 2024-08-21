import { type FC } from 'react';
import { useExpensesQuery } from '@entities/expenses/model';
import { Expense } from '../Expense';

export const ExpensesList: FC = () => {
  const { isLoading, isError, data, error } = useExpensesQuery();

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className='w-full max-w-[343px] tablet:max-w-[966px]'>
          {data?.expenses.map((expense) => (
            <Expense
              key={expense._id}
              bg='odd:bg-[#262626]'
              expense={expense}
            />
          ))}
        </ul>
      )}
      {!data?.expenses.length && (
        <div className='text-[18px] font-bold tablet:text-[30px]'>
          No expenses yet
        </div>
      )}
    </>
  );
};
