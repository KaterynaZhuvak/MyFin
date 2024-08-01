import { type FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { expensesApi } from '@entities/expenses/api/expenses.api';
import { Expense } from '../Expense';

export const ExpensesList: FC = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: expensesApi,
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((expense, index) => (
            <Expense
              key={expense._id}
              bg={index % 2 === 0 ? 'bg-[#262626]' : 'bg-[#0F0F0F]'}
              expense={expense}
            />
          ))}
        </ul>
      )}
    </>
  );
};
