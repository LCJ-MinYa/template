/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 18:00:49
 * @LastEditTime: 2022-04-19 10:24:12
 * @LastEditors: LiChaoJun
 * @Description: vue.config.js
 */
module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/template' : '/',
};
