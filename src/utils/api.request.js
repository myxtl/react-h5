/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:39:17
 */
import HttpRequest from './http';
import config from './config';

console.log(config, 'config')
let baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;


const axios = new HttpRequest(baseUrl)
export default axios;