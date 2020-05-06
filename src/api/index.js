/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:45:00
 */
import axios from '../utils/api.request';

export const login = data => {
    return axios.request({
        url: '/users/login',
        method: 'post',
        data
    })
}