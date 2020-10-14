import axios, { AxiosResponse } from 'axios';
import { ResultStatus } from '../models';

export const http = axios.create({
  // bot所在的地址
  baseURL: 'https://redive.estertion.win',
});
// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // accessToken
    console.log('req start');
    return config;
  },
  function (error) {
    // 处理请求错误
    console.log('req err');
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // 响应数据
    console.log('req end');
    if (response.status === ResultStatus.success) {
      const data = response.data;
      return data;
    }
    throw new Error(response.status.toString());
  },
  function (error) {
    console.log('req eror');
    throw error;
    //  处理相应错误
  },
);
