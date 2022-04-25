/*
 * @Author: LiChaoJun
 * @Date: 2022-04-25 09:36:37
 * @LastEditTime: 2022-04-25 09:47:38
 * @LastEditors: LiChaoJun
 * @Description: 全局公用插件注册
 */
import { App as Application } from 'vue';
import BaseDirective from './baseDirective';

const Plugins = {
    install(app: Application): void {
        app.use(BaseDirective);
    },
};

export default Plugins;
