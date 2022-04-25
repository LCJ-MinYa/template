/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-25 10:14:15
 * @LastEditors: LiChaoJun
 * @Description: main
 */
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/common.css';
import 'highlight.js/styles/atom-one-light.css';

import { createApp, App as Application } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import components from '@/layout/index';
import Plugins from '@/plugins';

const app: Application = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
app.use(components);
app.use(Plugins);
app.mount('#app');
