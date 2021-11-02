# Batch Interceptor

The deployed version can be found here: 
https://heuristic-galileo-5d25a0.netlify.app/

![](https://gcdn.pbrd.co/images/15rkryZPYYXb.png)

### Features

This application was developed by TypeScript, React, Hooks, Styled-Component. The frontend folder structure is bootstrapped from my personal react-boilerplate: https://github.com/meissam/react-boilerplate. I didn't want to over do the project, but I've thought that it can be cleaner and more structured. 



### How to Run the App

1. **Please clone the project.** 

2. first, run: 

   `yarn`

   to install required packages and then run

   `yarn start`

   to run API on [http://localhost:3001] 



### How it works

As mentioned in the task, we should implement an interceptor for batch requests. It was mentioned that **"All requests should run at the same time and produce only one request to the backend. All requests should return or reject."** It seems a little bit **confusing**, we can have two different perceptions (**and I selected the second one finally**):

1. If we mean that only one request can be sent to the server at a time, then we can queue the requests and send them to the server one by one in different intervals. We can also use for example `promise.allSettled` to get the response. In this scenario we just need to implement a queue and interval mechanism in our Interceptor
2. If we mean that we should merge the request, As far as I know, the Axios doesn't have such a feature. We have to cancel all the requests but one by cancel token and then remaining request by new params. (***This is what I implement. Because it seems to be the point of the question***.) 



### Notes about CORS Policy:

- The backend API didn't handle CORS Policy. So we cannot send request from localhost and have to use deployed version to check the result. 

- another solution is using a http proxy. for this scenario if you want to check the code from localhost please replace the `apiClient.ts` codes with this: 

  ```javascript
  // apiClient.ts
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
  ```

  it will use `PROXIFIED_API_ADDRESS` instead of `BASE_API_ADDRESS`. Also, you have to go to this URL: https://cors-anywhere.herokuapp.com/corsdemo and click on **"Request temporary access to the demo server"** button for the first time. 