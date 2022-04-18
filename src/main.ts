/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-18 11:59:25
 * @LastEditors: LiChaoJun
 * @Description: main
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router).use(Antd).mount('#app');
