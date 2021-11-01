import axios, { AxiosRequestConfig } from 'axios';
import { PROXIFIED_API_ADDRESS, batchInterceptor } from '@/utils';

export const client = () => {
    const config: AxiosRequestConfig = {
        url: PROXIFIED_API_ADDRESS,
        baseURL: PROXIFIED_API_ADDRESS,
    };
    const instance = axios.create(config);
    batchInterceptor(instance);
    return instance;
};
