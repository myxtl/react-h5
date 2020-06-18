/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:45:00
 */
import http from '../utils/http'

export const getCategory = () => {
    return http.get('/category/query')
}