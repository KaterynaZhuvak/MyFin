import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { expensesApi } from '../api';
import { type UseExpensesQueryHookResponse } from '../interfaces/useExpensesQueryHookRespose.interface';

export const useExpensesQuery = (): UseExpensesQueryHookResponse => {
  const { expensesStore } = useStore();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: async () => {
      const response = await expensesApi(1, 12);
      expensesStore.setExpenses(response.expenses);
      return response;
    },
  });

  return { isLoading, isError, data, error };
};
