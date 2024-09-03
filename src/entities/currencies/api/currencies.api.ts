import { axiosInstance } from '@shared/api/axios';
import { type Currency } from '../interfaces';

export const currenciesApi = async (): Promise<Currency[]> => {
  const response = await axiosInstance.get<Currency[]>('/currencies');
  return response.data;
};
