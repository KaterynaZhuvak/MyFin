import { axiosInstance } from '@shared/api/axios';
import { type ExpensesResponse } from '../interfaces/expensesResponse.interface';

export const expensesApi = async (): Promise<ExpensesResponse> => {
  const response = await axiosInstance.get<ExpensesResponse>('/expenses');
  return response.data;
};
