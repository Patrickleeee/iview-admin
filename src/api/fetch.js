import axios from 'axios';
// import store from '@/store';
import Cookies from 'js-cookie';

const BASE_URL = 'http://139.224.146.23:8088';
// const BASE_URL = 'http://127.0.0.1:8088';
const LOGIN_URL = '/login';
// 创建axios实例
const service = axios.create({
    baseURL: BASE_URL, // api的base_url
    // baseURL: 'http://139.224.146.23:8088', // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    // 先注释点请求头
    // const url = config.url;
    // const authorization = Cookies.get('Authorization');
    // // 非登录页面，添加请求头
    // if (url !== LOGIN_URL) {
    //     config.url = '/rest' + url;
    //     config.headers.Authorization = authorization;
    // }
    // // service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // console.log('request config:', config);
    return config;
}, error => {
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(response => {
    // response.headers['Access-Control-Allow-Origin'] = '*';
    // 登录时，异常处理
    // 先注释点响应处理
    // if (response.config.url === BASE_URL.concat(LOGIN_URL)) {
    //     let accessToken = response.data.access_token;
    //     if (accessToken == null) {
    //         alert('用户名密码错误');
    //         response.status = 5000;
    //         return response;
    //     }
    // }
    return response;
},
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    //  let res1 = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }
error => {
    console.log('fail!');
    console.log('err', error);// for debug
    return Promise.reject(error);
}
);

export default service;
