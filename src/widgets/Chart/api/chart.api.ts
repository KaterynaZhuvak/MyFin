import { axiosInstance } from '@shared/api/axios';
import { type ExpensesByCategoryInterface } from '../interfaces/expensesByCategory.interface';

export const expensesByCategoryApi = async (): Promise<
  ExpensesByCategoryInterface[]
> => {
  const response = await axiosInstance.get<ExpensesByCategoryInterface[]>(
    '/expenses/by-category'
  );
  return response.data;
};
