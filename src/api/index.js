/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:45:00
 */
import http from '../utils/http'

export const postLogin = data => {
    return http.post('/api/v1/users/login', data)
}

export const postRegister = data => {
    return http.post('/api/v1/users/register', data)
}

export const getSign = params => {
    return http.get('/api/v1/getSign');
}

export const getCategory = () => {
    return http.get('/category/query')
}