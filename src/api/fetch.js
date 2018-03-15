import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://47.96.128.181:8090';
const LOGIN_URL = '/login';
const REST_URL = '/rest/';
// 创建axios实例
const service = axios.create({
    baseURL: BASE_URL, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    const url = config.url;
    const authorization = Cookies.get('Authorization');
    // 非登录页面，统一添加请求头，供后端做跨域处理
    if (url !== LOGIN_URL) {
        config.url = REST_URL.concat(url);
        config.headers.Authorization = authorization;
        console.log("result: ", authorization);
        console.log("config: ", config)
    }
    return config;
}, error => {
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(response => {
    // 登录时，判断是否正常登录，否则，异常处理
    if (response.config.url === BASE_URL.concat(LOGIN_URL)) {
        let accessToken = response.data.data.access_token;
        if (accessToken == null) {
            response.status = 5000;
            return response;
        }
    }
    return response;
},
error => {
    console.log('fail!');
    console.log('err', error);// for debug
    return Promise.reject(error);
}
);

export default service;
