/*
 * @Author: LiChaoJun
 * @Date: 2022-04-19 15:44:56
 * @LastEditTime: 2022-04-19 16:24:09
 * @LastEditors: LiChaoJun
 * @Description: layout全局注册组件
 */
import LayoutBasicPage from './page/basic.vue';

export default function install(app: any) {
    app.component('LayoutBasicPage', LayoutBasicPage);
}
