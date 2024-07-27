import { axiosInstance } from '@shared/api/axios';

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export const refreshApi = async (
  accessToken: string | undefined,
  refreshToken: string | undefined
): Promise<RefreshResponse> => {
  const response = await axiosInstance.post<RefreshResponse>(
    '/auth/updateAccessToken',
    {
      accessToken,
      refreshToken,
    }
  );
  return response.data;
};
