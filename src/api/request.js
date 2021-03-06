import fetch from './fetch';
import axios from 'axios';

export function loginByUsername (username, password) {
    const data = {
        'username': username,
        'password': password
    };
    return fetch({
        url: '/login',
        method: 'post',
        data,
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}

export function sendRq () {
    return fetch({
        url: '/workflow/1c2f0495-b513-4c28-baa5-0f5205af777a',
        method: 'get'
    });
}

export function getDealer () {
    return fetch({
        url: '/dealer',
        method: 'get'
    });
}

export function getMonthAmount () {
    return fetch({
        url: '/dealer/monthAmount',
        method: 'get'
    });
}

export function getCityData () {
    return fetch({
        url: '/dealer/city',
        method: 'get'
    });
}

export function listProvinces () {
    return fetch({
        url: '/services/CompanyApp/actions/companyAddOfProvince/invoke',
        method: 'post',
        data: {}
    });
    // return fetch({
    //     url: '/services/TestApp',
    //     method: 'get'
    // });
}

export function listOrders (myParams) {
    return fetch({
        url: '/syh/order',
        method: 'post',
        data: myParams
    });
}

export function listRiskControlResult () {
    return fetch({
        url: '/syh/riskControl',
        method: 'post',
        data: {}
    });
}
