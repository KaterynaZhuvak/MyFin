import { axiosInstance } from '@shared/api/axios';
import { type ExpensesResponse } from '../interfaces';

export const expensesApi = async (
  page = 1,
  limit = 12
): Promise<ExpensesResponse> => {
  const response = await axiosInstance.get<ExpensesResponse>(
    `/expenses?limit=${limit.toString()}&page=${page.toString()}`
  );
  return response.data;
};
