import axios from 'axios';
import type { AxiosError, AxiosInstance } from 'axios';
import { cookieManager } from '@shared/lib/cookieManager.ts';
import { refresh } from '../api/refresh.api';

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
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (error.response?.status === 401) {
        try {
          const data = await refresh(
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
        } catch (error2) {
          const errorValue = error2 as AxiosError;
          if (errorValue.response?.status === 403) {
            cookieManager.removeCookie('accessToken');
            cookieManager.removeCookie('refreshToken');
            window.location.href = '/login';
          }
          return Promise.reject(new Error(error2 as string));
        }
      }
      return Promise.reject(error);
    }
  );
};
