import { type FC } from 'react';
import { useExpensesQuery } from '@entities/expenses/model/useExpensesQuery';
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
          {data?.expenses.map((expense, index) => (
            <Expense
              key={expense._id}
              bg={index % 2 === 0 ? 'bg-[#262626]' : 'bg-inherit'}
              expense={expense}
            />
          ))}
        </ul>
      )}
    </>
  );
};
