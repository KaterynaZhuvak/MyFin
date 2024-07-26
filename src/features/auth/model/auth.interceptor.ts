import axios from 'axios';
import type { AxiosError, AxiosInstance } from 'axios';
import { cookieManager } from '@shared/lib/cookieManager.ts';
import { useStore } from '@shared/lib/useStore';
import { HttpCodes } from '@shared/enums';
import { refreshApi } from '../api';

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
    (response) => {
      return response;
    },
    async (axiosError: AxiosError) => {
      const originalRequest = axiosError.config;
      const { userStore } = useStore();
      if (axiosError.response?.status === HttpCodes.Unauthorized) {
        try {
          const data = await refreshApi(
            cookieManager.getCookie('accessToken'),
            cookieManager.getCookie('refreshToken')
          );
          cookieManager.setCookie({
            name: 'accessToken',
            value: data.accessToken,
          });
          originalRequest
            ? (originalRequest.headers.Authorization = `Bearer ${data.accessToken}`)
            : null;
          return axios(window.location.pathname, originalRequest);
        } catch (error) {
          const isAxiosError = error as AxiosError;
          if (isAxiosError.response?.status === 403) {
            cookieManager.removeCookie('accessToken');
            cookieManager.removeCookie('refreshToken');
            userStore.clearUserData();
            window.location.href = '/login';
          }
          return Promise.reject(isAxiosError);
        }
      }
      return Promise.reject(axiosError);
    }
  );
};
