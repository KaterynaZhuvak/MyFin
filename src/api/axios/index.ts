import axios from 'axios';

export const BASE_URL: string = import.meta.env.VITE_BASE_URL as string;

const axiosInstance = axios.create({baseURL: BASE_URL, withCredentials: true});

export default axiosInstance;
