import { type AxiosResponse } from 'axios';
import { axiosInstance } from '@shared/api/axios';

export const amountApi = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get<AxiosResponse>('expenses/amount');
  return response;
};
