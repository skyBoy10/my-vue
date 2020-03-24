import axios from 'axios';
import config from './config';

/**
 * 请求常量配置
 */

const TIME_OUT = 2000; // 请求超时
const baseUrl = config[process.env];

axios.defaults.timeout = TIME_OUT;