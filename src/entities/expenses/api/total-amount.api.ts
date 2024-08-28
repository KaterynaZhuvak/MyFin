import { axiosInstance } from '@shared/api/axios';

export const expensesTotalAmountApi = async (
  userId: string
): Promise<number> => {
  const response = await axiosInstance.get<number>(
    `/expenses/amount/by-users/${userId}`
  );
  return response.data;
};
