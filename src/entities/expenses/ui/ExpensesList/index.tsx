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
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((expense) => (
            <Expense key={expense._id} expense={expense} />
          ))}
        </ul>
      )}
    </div>
  );
};
