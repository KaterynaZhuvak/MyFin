import { cookieManager } from '@shared/lib/cookieManager.ts';
import { axiosInstance } from '@shared/api/axios';
import { refresh } from '../refresh/refresh.api';

axiosInstance.interceptors.request.use(
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

axiosInstance.interceptors.response.use(
  async (response) => {
    const accessToken = cookieManager.getCookie('accessToken');
    const refreshToken = cookieManager.getCookie('refreshToken');
    if (response.status === 403) {
      await refresh(accessToken, refreshToken)
        .then((data) => {
          cookieManager.setCookie({
            name: 'accessToken',
            value: data.accessToken,
          });
          cookieManager.setCookie({
            name: 'refreshToken',
            value: data.refreshToken,
          });
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
