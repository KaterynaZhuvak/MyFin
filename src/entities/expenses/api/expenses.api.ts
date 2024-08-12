import { axiosInstance } from '@shared/api/axios';
import { type ExpensesResponse } from '../interfaces';

export const expensesApi = async (
  userId: string
): Promise<ExpensesResponse> => {
  const response = await axiosInstance.get<ExpensesResponse>(
    `/expenses?userId=${userId}`
  );
  return response.data;
};
