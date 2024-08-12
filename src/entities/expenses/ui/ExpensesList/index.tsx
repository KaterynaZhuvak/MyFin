import { type FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { expensesApi } from '@entities/expenses/api';
import { useStore } from '@shared/lib/useStore';
import { Expense } from '../Expense';

export const ExpensesList: FC = () => {
  const { expensesStore, userStore } = useStore();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: async () => {
      const userId = userStore.getUserData()?._id;
      if (!userId) return;
      const response = await expensesApi(userId);
      expensesStore.setExpenses(response.expenses);
      return response;
    },
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
          {data?.expenses.map((expense, index) => (
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
