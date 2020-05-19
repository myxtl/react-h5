/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:37:50
 */
import axios from 'axios';


import config from './config';

let baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

class HttpRequest {
    constructor() {
        
    }
}




export default HttpRequest;