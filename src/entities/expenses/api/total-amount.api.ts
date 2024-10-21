import { axiosInstance } from '@shared/api/axios';

export const expensesTotalAmountApi = async (): Promise<number> => {
  const response = await axiosInstance.get<number>('/expenses/amount');
  return response.data;
};
