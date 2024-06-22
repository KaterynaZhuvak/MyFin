import { axiosInstance } from '@shared/api/axios';
import type { LoginResponse } from '../interfaces/LoginResponse';

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    '/api/v1/auth/login',
    {
      email,
      password,
    }
  );
  return response.data;
};
