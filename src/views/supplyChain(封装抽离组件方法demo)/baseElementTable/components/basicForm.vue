<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-26 16:51:00
 * @LastEditors: LiChaoJun
 * @Description: 基本信息配置
-->
<template>
    <a-card title="基本信息" class="margin-bottom-20">
        <a-form
            name="basicForm"
            autocomplete="off"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18, offset: 0 }"
            :model="basicFormState"
            :rules="basicFormRules"
        >
            <a-row :gutter="20">
                <a-col :span="8">
                    <a-form-item label="组件引用名称" name="ref">
                        <a-input v-model:value="basicFormState.ref" placeholder="请输入组件引用名称" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="显示搜索" name="search">
                        <a-switch v-model:checked="basicFormState.search" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="内容居中" name="alignCenter">
                        <a-switch v-model:checked="basicFormState.alignCenter" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="格式化内容" name="formatterValue">
                        <a-switch v-model:checked="basicFormState.formatterValue" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="显示序号" name="showSerialNumber">
                        <a-switch v-model:checked="basicFormState.showSerialNumber" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue';
import { BasicForm } from '../../index';

const basicFormState = reactive<BasicForm>({
    ref: 'table',
    search: true,
    alignCenter: true,
    formatterValue: true,
    showSerialNumber: false,
});

const basicFormRules = reactive({
    // ref: [baseRules.required('组件引用名称')],
    // alignCenter: [baseRules.requireChange('是否居中')],
    // showSerialNumber: [baseRules.requireChange('是否显示序号')],
});

defineExpose({
    basicFormState,
});
</script>
