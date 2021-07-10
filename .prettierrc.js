module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "singleQuote": true, // 使用单引号
    "printWidth": 200, // 超过最大值换行
    "htmlWhitespaceSensitivity": "ignore",
    "semi": true, // 结尾用分号
    "tabWidth": 4, // 缩进四个字符
    //"disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
    "trailingComma": "none", // 函数最后不需要逗号
    "arrowParens": "avoid"
};