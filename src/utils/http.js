/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:37:50
 */
import axios from 'axios';


if (process.env.NODE_ENV) {

}

const addErrorLog = errorInfo => {
    const {
        statusText,
        status,
        request: {
            responseURL
        }
    } = errorInfo
    let info = {
        type: 'ajax',
        code: status,
        mes: statusText,
        url: responseURL
    }
}

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config;
    }

    destroy(url) {
        delete this.queue[url];
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            this.queue[url] = true;
            return config;
        }, error => {
            return Promise.reject(error);
        })

        instance.interceptors.response.use(res => {
            this.destroy(url);
            const {
                data: {
                    data
                },
                status
            } = res;
            return {
                data,
                status
            };
        }, error => {
            this.destroy(url);
            let errorInfo = error.response;
            if (!errorInfo) {
                const {
                    request: {
                        statusText,
                        status
                    }
                } = JSON.parse(JSON.stringify(error));
                errorInfo = {
                    status,
                    statusText,
                    
                }
            }

            addErrorLog(errorInfo);
            return Promise.reject(error);
        })
    }

    request(options) {
        const instance = axios.create({
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        });
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}




export default HttpRequest;