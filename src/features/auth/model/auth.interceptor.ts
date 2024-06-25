import type { AxiosInstance } from 'axios';
import { cookieManager } from '@shared/lib/cookieManager.ts';
import { axiosInstance } from '@shared/api/axios';
import { refresh } from '../refresh/refresh.api';
import { setCookies } from './setCookies';

export const setupAuthInterceptors = (Api: AxiosInstance): void => {
  Api.interceptors.request.use(
    (config) => {
      const token = cookieManager.getCookie('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(new Error(error as string));
    }
  );
  Api.interceptors.response.use(
    async (response) => {
      const accessToken = cookieManager.getCookie('accessToken');
      const refreshToken = cookieManager.getCookie('refreshToken');
      if (response.status === 401) {
        await refresh(accessToken, refreshToken)
          .then((data) => {
            setCookies(data.accessToken, data.refreshToken, 7);
            return axiosInstance.request(response.config);
          })
          .catch((error: unknown) => {
            return Promise.reject(new Error(error as string));
          });
      }
      return response;
    },
    (error) => {
      return Promise.reject(new Error(error as string));
    }
  );
};
