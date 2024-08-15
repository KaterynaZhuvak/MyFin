import { axiosInstance } from '@shared/api/axios';
import { type ExpensesResponse } from '../interfaces';

export const expensesApi = async (
  userId: string,
  page = 1,
  limit = 12
): Promise<ExpensesResponse> => {
  const response = await axiosInstance.get<ExpensesResponse>(
    `/expenses/${userId}?limit=${limit.toString()}&page=${page.toString()}`
  );
  return response.data;
};
