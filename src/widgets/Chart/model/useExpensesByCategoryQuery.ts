import { useQuery } from '@tanstack/react-query';
import { expensesByCategoryApi } from '../api/chart.api';
import { type ExpensesByCategoryInterface } from '../interfaces/expensesByCategory.interface';

interface UseExpensesByCategoryQueryInterface {
  isLoading: boolean;
  isError: boolean;
  data: ExpensesByCategoryInterface[] | undefined;
}

export const useExpensesByCategoryQuery =
  (): UseExpensesByCategoryQueryInterface => {
    const { isLoading, isError, data } = useQuery({
      queryKey: ['expensesByCategory'],
      queryFn: expensesByCategoryApi,
    });
    return { isLoading, isError, data };
  };
