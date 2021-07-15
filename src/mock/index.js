// 引入安装好的mock模块
const Mock = require('mockjs');

// 设置延迟，模拟请求的过程
Mock.setup({
    timeout: '200-600'
});

let configArr = [];

const files = require.context(
    './',
    true,
    /\.js$/
);

files.keys().forEach(item => {
    if (item !== './index.js') {
        configArr = configArr.concat(files(item).default);
    }
});

console.log(configArr);
configArr.forEach(mockFile => {
    for (const [path, target] of Object.entries(mockFile)) {
        const protocol = path.split('|');
        console.log(protocol);
        Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
    }
});
