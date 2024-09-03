import { axiosInstance } from '@shared/api/axios';
import { type CreateExpenseInterface } from '../interfaces';

export const addExpenseApi = async (
  body: CreateExpenseInterface
): Promise<CreateExpenseInterface> => {
  const response = await axiosInstance.post<CreateExpenseInterface>(
    'expenses/create',
    body
  );
  return response.data;
};
