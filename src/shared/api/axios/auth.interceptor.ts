import { cookieManager } from '@shared/lib/cookieManager.ts';
import { axiosInstance } from './index.ts';

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
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(new Error(error as string));
  }
);
