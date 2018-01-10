import fetch from './fetch';

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
