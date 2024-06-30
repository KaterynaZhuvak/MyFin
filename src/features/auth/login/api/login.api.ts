import type { AuthResponse } from '@features/auth/interfaces/auth-response.interface';
import { axiosInstance } from '@shared/api/axios';

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>('/auth/login', {
    email,
    password,
  });
  return response.data;
};
