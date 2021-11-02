import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_ADDRESS, batchInterceptor } from '@/utils';

export const client = () => {
    const config: AxiosRequestConfig = {
        url: BASE_API_ADDRESS,
        baseURL: BASE_API_ADDRESS,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    };
    const instance = axios.create(config);
    batchInterceptor(instance);
    return instance;
};
