/*
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-24 17:26:18
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
import '@/assets/styles/common.css';

import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js';

const app = createApp(App);
app.use((app) => {
    app.directive('highlight', function (el) {
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach((block: any) => {
            hljs.highlightBlock(block);
            // 从这开始是设置行号
            block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g, `</li><li class="line">`)}</li></ol>`;
        });
    });
});

app.use(store);
app.use(router);
app.use(Antd);
app.use(components);
app.mount('#app');
