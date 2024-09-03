import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { expensesApi } from '../api';
import { type UseExpensesQueryHookResponse } from '../interfaces/useExpensesQueryHookRespose.interface';

export const useExpensesQuery = (): UseExpensesQueryHookResponse => {
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

  return { isLoading, isError, data, error };
};
