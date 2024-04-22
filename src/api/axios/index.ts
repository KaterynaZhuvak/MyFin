import axios from 'axios';

export const BASE_URL: string = import.meta.env.VITE_BASE_URL as string;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
