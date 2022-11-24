import * as api from './api.js';

const endpoints = {
    "login": "/users/login",
    "register": "/users/register",
    "logout": "/users/logout",
    "createItem": "/data/catalog"
}

export async function login(email, password) {
    const res = await api.post(endpoints.login, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(res));
    return res;
};

export async function register(email, password) {
    const res = await api.post(endpoints.register, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(res));
    return res;
};

export async function logout() {
    const res = await api.get(endpoints.logout);
    sessionStorage.removeItem('userData'); 
    return res;
};

export async function createItem(data) {
    const res = await api.post(endpoints.createItem, data);
    return res;
};

//to be continued 

