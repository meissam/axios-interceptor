import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FileObject, RequestsMap, ResponseDataItems } from '@/types';

const requestsMapObject: RequestsMap = {};

const requestedFileIds: string[] = [];

export const batchInterceptor = (instance: AxiosInstance) => {
    const requestHandler = (request: AxiosRequestConfig) => {
        // assign a cancel token to each request
        const { CancelToken } = axios;
        const source = CancelToken.source();
        request.cancelToken = source.token;

        // pushed all id params to an array and remove duplicated ones
        requestedFileIds.push(...request.params.ids.filter((id: string) => requestedFileIds.indexOf(id) < 0));

        // if requested URL is duplicated then we cancel the request to avoid sending extra request
        // in other words, we always keep the first request and cancel other ones if the URL is duplicated.
        if (request.url !== undefined) {
            requestsMapObject[request.url] = requestsMapObject[request.url] + 1 || 1;

            if (requestsMapObject[request.url] > 1) {
                requestsMapObject[request.url]--;
                source.cancel(`Canceling ids ${request.params.ids}`);
            }
        }

        // add all unique file IDs to the first request's id params
        request.params = {
            ids: requestedFileIds,
        };

        return request;
    };

    const responseHandler = (response: AxiosResponse) => {
        const data: ResponseDataItems = response.data;

        const foundIds: string[] = data.items.map((item) => item.id);
        const notFoundIds: FileObject[] = [];

        requestedFileIds.map((id) => {
            if (!foundIds.includes(id)) {
                notFoundIds.push({ id });
                return Promise.reject(`${id} Not Found!`);
            }
        });

        response.data = {
            ...data,
            notFoundItems: notFoundIds,
        };
        return response;
    };

    const errorHandler = (error: Error) => {
        if (axios.isCancel(error)) {
            return Promise.reject('Canceled due to Merging Requests or Fulfilled before.');
        }

        return Promise.reject(error);
    };

    instance.interceptors.request.use(
        (request) => requestHandler(request),
        (error) => errorHandler(error),
    );

    instance.interceptors.response.use(
        (response) => responseHandler(response),
        (error) => errorHandler(error),
    );

    return instance;
};
