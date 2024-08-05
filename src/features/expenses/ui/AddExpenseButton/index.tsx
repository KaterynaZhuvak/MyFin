import { useMutation } from '@tanstack/react-query';
import { type FC } from 'react';
import { addExpenseApi } from '@features/expenses/api/addExpense.api';
import { type CreateExpenseInterface } from '@features/expenses/interfaces';
import { queryClient } from '@shared/api/query-client';
import { Button } from '@shared/ui/Button';

export const AddExpenseButton: FC<CreateExpenseInterface> = ({
  userId,
  category,
  currency,
  amount,
  details,
}) => {
  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  const createExpense = (): void => {
    mutation.mutate({
      userId,
      category,
      currency,
      amount,
      details,
    });
  };

  if (mutation.isError) {
    return <p>{mutation.error.message}</p>;
  }

  return (
    <Button
      title='Add Expense'
      className='gradient h-[72px] w-[526px] rounded-[15px] text-[32px] font-bold'
      disabled={mutation.isPending}
      onClick={createExpense}
    />
  );
};
