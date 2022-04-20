/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-20 15:28:22
 * @LastEditors: LiChaoJun
 * @Description: main
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import components from '@/layout/index';

import 'highlight.js/styles/atom-one-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
app.use(components);
app.use(hljsVuePlugin);
app.mount('#app');
