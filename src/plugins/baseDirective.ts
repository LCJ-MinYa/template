/*
 * @Author: LiChaoJun
 * @Date: 2022-04-25 09:37:22
 * @LastEditTime: 2022-04-25 10:24:18
 * @LastEditors: LiChaoJun
 * @Description: 全局公用vue指令注册
 */
import { App as Application } from 'vue';
import hljs from 'highlight.js';

const BaseDirective = {
    install(app: Application): void {
        app.directive('highlight', function (el) {
            const blocks: NodeList = el.querySelectorAll('pre code');
            // eslint-disable-next-line
            blocks.forEach((block: any) => {
                hljs.highlightElement(block);
                // 从这开始是设置行号
                block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g, `</li><li class="line">`)}</li></ol>`;
            });
        });
    },
};

export default BaseDirective;
