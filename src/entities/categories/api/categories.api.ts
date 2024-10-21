import { axiosInstance } from '@shared/api/axios';
import { type Category } from '../interfaces';

export const categoriesApi = async (): Promise<Category[]> => {
  const response = await axiosInstance.get<Category[]>('/categories');
  return response.data;
};
