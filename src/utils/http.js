import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 50000;
axios.defaults.baseURL = 'http://192.168.3.87:8088';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// axios.defaults.withCredentials = true;

let http = {
    post: "",
    get: ""
};

http.post = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(api, params).then((res) => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
};

http.get = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.get(api, params).then((res) => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    })
};

export default http