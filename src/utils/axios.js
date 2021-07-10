import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({
    showSpinner: false
});

const _axios = axios.create({
    baseURL: 'http://192.168.1.1',
    timeout: 15000
});

_axios.interceptors.request.use(req => {
    NProgress.start();

    return req;
});

_axios.interceptors.response.use(res => {
    NProgress.done();

    return res;
}, err => {
    return Promise.reject(err);
});

export default _axios;
