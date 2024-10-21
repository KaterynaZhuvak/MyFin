import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { type UseExpensesQueryHookResponse } from '@entities/expenses/interfaces/useExpensesQueryHookRespose.interface';
import { expensesApi } from '../api/chart.api';

export const useGetExpenses = (): UseExpensesQueryHookResponse => {
  const { expensesStore } = useStore();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: async () => {
      const response = await expensesApi();
      expensesStore.getExpenses();
      return response;
    },
  });

  return { isLoading, isError, data, error };
};
