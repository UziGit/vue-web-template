/* eslint-disable indent */
import axios from 'axios';
import NProgress from 'nprogress';

// 安装这个库可以转换数据形式
import qs from 'qs';

NProgress.configure({
    showSpinner: false
});

// let baseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.1.3:8080/' : (process.env.NODE_ENV === 'test' ? 'http://192.168.1.2' : 'http://192.168.1.3');

const _axios = axios.create({
    // baseURL: baseURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 15000
});

// 把{key:val}转成key：val
_axios.defaults.transformRequest = data => qs.stringify(data);

_axios.interceptors.request.use(req => {
    NProgress.start();

    return req;
});

_axios.interceptors.response.use(res => {
    NProgress.done();

    return res.data;
}, err => {
    let { response } = err;
    // 服务器最起码返回结果
    if (response) {
        switch (response.status) {
            case 401://= >权限问题，当前请求需要用户验证，一般是未登陆
                break;
            case 403://= >服务器已经理解请求，但是拒绝执行他，一般是token过期或session过期
                localStorage.removeItem('token');
                break;
            case 404://= >找不到页面
                break;
        }
    } else {
        // 服务器连结果都没有返回
        if (!window.navigator.onLine) {
            // 如果客户端断网了:可以跳转到断网页面
            return;
        }
    }
    return Promise.reject(err);
});

export default _axios;
