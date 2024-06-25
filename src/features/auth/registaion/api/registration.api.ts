import type { AuthResponse } from '@features/auth/interfaces/auth-response.interface';
import { axiosInstance } from '@shared/api/axios';

export const registration = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    '/auth/registration',
    {
      firstName,
      lastName,
      email,
      password,
    }
  );
  return response.data;
};
