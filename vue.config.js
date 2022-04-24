/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 18:00:49
 * @LastEditTime: 2022-04-24 17:39:16
 * @LastEditors: LiChaoJun
 * @Description: vue.config.js
 */
module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/template' : '/',
    configureWebpack: (config) => {
        /** 关闭webpack的性能提示 */
        config.performance = {
            hints: false,
        };
    },
};
