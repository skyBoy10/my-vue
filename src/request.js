import axios from 'axios';
import config from './config';

/**
 * 验证errorCode
 * @param {*} res
 */
const checkCode = res => {
    const { data: { errorCode } } = res;

    if (+errorCode !== 0) {
        return false;
    }

    return true;
};

/**
 * 请求常量配置
 */

const TIME_OUT = 2000; // 请求超时
const baseUrl = config[process.env];
const token = localStorage.getItem('token');

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = TIME_OUT;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['Authorization'] = token || '';

/**
 * 拦截请求
 */
axios.interceptors.request.use(config => {
    // 做请求前的验证操作
    return config;
}, err => {
    return Promise.reject(err);
});

/**
 * 拦截响应
 */
axios.interceptors.response.use(res => {
    const isValidate = checkCode(res);

    if (isValidate) {
        return Promise.resolve(res);
    }

    return Promise.reject(res);
}, err => {
    return Promise.reject(err);
});

/**
 * post请求
 * @param {*} url 地址
 * @param {*} params 参数
 */
export const post = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: {
            ...params
        }
    });
};

/**
 * get请求
 * @param {*} url 地址
 * @param {*} params 参数
 */
export const get = (url, params) => {
    return axios.get(url, { params });
}