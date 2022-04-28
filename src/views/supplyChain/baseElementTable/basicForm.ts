/*
 * @Author: LiChaoJun
 * @Date: 2022-04-26 17:22:48
 * @LastEditTime: 2022-04-27 17:44:10
 * @LastEditors: LiChaoJun
 * @Description: 基本信息配置
 */

import { reactive } from 'vue';
import { BasicForm } from '../index';

const basicFormState = reactive<BasicForm>({
    ref: 'table',
    search: true,
    alignCenter: true,
    formatterValue: true,
    showSerialNumber: false,
    requestApi: '',
});

const basicFormRules = reactive({
    // ref: [baseRules.required('组件引用名称')],
    // alignCenter: [baseRules.requireChange('是否居中')],
    // showSerialNumber: [baseRules.requireChange('是否显示序号')],
});

export { basicFormState, basicFormRules };
