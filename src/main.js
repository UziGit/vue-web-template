import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import 'normalize.css/normalize.css';
import axios from './utils/axios';
import mock from './mock/index';
import api from './api/index';

Vue.use(mock);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$api = api;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
