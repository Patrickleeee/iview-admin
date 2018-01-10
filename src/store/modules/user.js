import Cookies from 'js-cookie';
import {sendRq, getDealer} from '@/api/request';

const user = {
    state: {},
    mutations: {
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('access');
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        }
    },
    actions: {
        // 用户名登录
        // LoginByUsername ({ commit }, userInfo) {
        //     const username = userInfo.username.trim();
        //     return new Promise((resolve, reject) => {
        //         loginByUsername(username, userInfo.password).then(response => {
        //             const data = response.data;
        //             setToken(response.data.token);
        //             commit('SET_TOKEN', data.token);
        //             resolve();
        //         }).catch(error => {
        //             reject(error);
        //         });
        //     });
        // },

        SendRq ({ commit }) {
            return new Promise((resolve, reject) => {
                sendRq().then(response => {
                    // console.log('登录请求结果：'.concat(response.data));
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            }

            );
        },

        GetDealer ({ commit }) {
            return new Promise((resolve, reject) => {
                getDealer().then(response => {
                    console.log('经销商数据：'.concat(response.data.data.datas));
                    resolve();
                    return response;
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};

export default user;
