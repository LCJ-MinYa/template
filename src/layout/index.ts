/*
 * @Author: LiChaoJun
 * @Date: 2022-04-19 15:44:56
 * @LastEditTime: 2022-04-25 10:14:48
 * @LastEditors: LiChaoJun
 * @Description: layout全局注册组件
 */
import { App as Application } from 'vue';
import LayoutBasicPage from './page/basic.vue';

export default function install(app: Application): void {
    app.component('LayoutBasicPage', LayoutBasicPage);
}
