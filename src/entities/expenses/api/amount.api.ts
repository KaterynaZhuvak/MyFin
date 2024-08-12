import { type AxiosResponse } from 'axios';
import { axiosInstance } from '@shared/api/axios';

export const amountApi = async (userId: string): Promise<AxiosResponse> => {
  const response = await axiosInstance.get<AxiosResponse>(
    `/expenses/amount?userId=${userId}`
  );
  return response;
};
