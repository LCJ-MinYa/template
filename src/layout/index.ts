/*
 * @Author: LiChaoJun
 * @Date: 2022-04-19 15:44:56
 * @LastEditTime: 2022-04-22 15:35:32
 * @LastEditors: LiChaoJun
 * @Description: layout全局注册组件
 */
import LayoutBasicPage from './page/basic.vue';

export default function install(app: any): void {
    app.component('LayoutBasicPage', LayoutBasicPage);
}
