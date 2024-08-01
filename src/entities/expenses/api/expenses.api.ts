import { axiosInstance } from '@shared/api/axios';
import { type ExpenseInterface } from '../interfaces/expense.interface';

export const expensesApi = async (): Promise<ExpenseInterface[]> => {
  const response = await axiosInstance.get<ExpenseInterface[]>('/expenses');
  return response.data;
};
