/**
 * @file 用户模块接口
 */
import axios from '../utils/axios';

export default {
    // eslint-disable-next-line space-before-function-paren
    login(params) {
        return axios.post('/api/login', params);
    },

    // eslint-disable-next-line space-before-function-paren
    getUserList(url, method, params) {
        // todo
    }
};
