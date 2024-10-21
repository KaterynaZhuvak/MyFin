import { type ExpensesResponse } from './expensesResponse.interface';

export interface UseExpensesQueryHookResponse {
  isLoading: boolean;
  isError: boolean;
  data: ExpensesResponse | undefined;
  error: Error | null;
}
