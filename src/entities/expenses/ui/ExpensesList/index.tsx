import { type FC } from 'react';
import { type ExpenseInterface } from '@entities/expenses/interfaces/expense.interface';
import { Expense } from '../Expense';

interface ExpensesListProps {
  expenses: ExpenseInterface[];
  isLoading?: boolean;
  isError?: boolean;
  error?: Error;
}

export const ExpensesList: FC<ExpensesListProps> = ({
  expenses,
  isLoading,
  isError,
  error,
}) => {
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
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
