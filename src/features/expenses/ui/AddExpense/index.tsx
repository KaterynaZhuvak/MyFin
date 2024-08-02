import { useMutation } from '@tanstack/react-query';
import { type FC } from 'react';
import { addExpenseApi } from '@features/expenses/api/addExpense.api';
import { type CreateExpenseInterface } from '@features/expenses/interfaces';
import { queryClient } from '@shared/api/query-client';
import { Button } from '@shared/ui/Button';

export const AddExpense: FC<CreateExpenseInterface> = (body) => {
  const mutation = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  const createExpense = (): void => {
    mutation.mutate(body);
  };

  if (mutation.isError) {
    return <p>{mutation.error.message}</p>;
  }

  return (
    <Button
      title='Add Expense'
      disabled={mutation.isPending}
      onClick={createExpense}
    />
  );
};
