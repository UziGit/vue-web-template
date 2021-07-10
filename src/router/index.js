import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

// NProgress配置， 去掉有个滚动加载的样式
NProgress.configure({
    showSpinner: false
});

let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    }
];

/**
 * @param directory: 要查找的文件路径
 * @param useSubdirectories: 是否查找子目录
 * @param regExp: 要匹配文件的正则
 */
// require.context执行后得到的是函数，并且这个函数有三个属性
// 1、resolve属性是一个函数，它接收一个参数request，request为当前文件夹下面匹配到的相对路径，返回这个匹配文件相对于整个项目的相对路径
// 2、keys属性是一个函数，返回匹配成功模块的名字组成的一个数组
// 3、id属性是一个字符串，主要用在module.hot.accept，应该是热加载
const requireContext = require.context(
    './',
    true,
    /\.js$/
);

// 必须要.keys方法 获取到的是当前目录下面所有的文件夹的里面路径的数组["./index.js", "./user/index.js"]
const pathList = requireContext.keys();
console.log(pathList);

pathList.forEach(fileName => {
    // 需要排除router里面的入口文件（也就是router里面的index文件）
    if (fileName !== './index.js') {
        const routeFile = requireContext(fileName);

        routes = [...routes, ...(routeFile.default || routeFile)];
    }
});

const router = new VueRouter({
    routes
});

// 做路由的异常处理
router.addRoutes([
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/error.vue')
    }
]);

router.beforeEach((to, from, next) => {
    // todo 设置路由拦截
    NProgress.start();
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});
export default router;
