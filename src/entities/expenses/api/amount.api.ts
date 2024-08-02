import { axiosInstance } from '@shared/api/axios';

interface AmountResponse {
  amount: number;
}

export const amountApi = async (): Promise<AmountResponse> => {
  const response = await axiosInstance.get<AmountResponse>('expenses/amount');
  return response.data;
};
