import { useQuery } from '@tanstack/react-query';
import { useStore } from '@shared/lib/useStore';
import { expensesTotalAmountApi } from '../api';

interface ExpensesTotalMoneyAmountQuery {
  isLoading: boolean;
  isError: boolean;
  data: number | undefined;
  error: Error | null;
}

export const useExpensesTotalMoneyAmountQuery =
  (): ExpensesTotalMoneyAmountQuery => {
    const { expensesStore, userStore } = useStore();

    const { isLoading, isError, data, error } = useQuery({
      queryKey: ['expenses', { type: 'amount' }],
      queryFn: async () => {
        const userId = userStore.getUserData()?._id;
        if (!userId) return;
        const response = await expensesTotalAmountApi(userId);
        expensesStore.setAmount(response);
        return response;
      },
    });

    return { isLoading, isError, data, error };
  };
