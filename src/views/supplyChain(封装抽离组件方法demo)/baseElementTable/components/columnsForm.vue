<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-26 16:27:39
 * @LastEditors: LiChaoJun
 * @Description: Columns配置
-->
<template>
    <a-card title="columns配置">
        <a-form
            ref="columnsRef"
            name="columnsForm"
            autocomplete="off"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18, offset: 0 }"
            :model="columnsFormState"
            :rules="columnsFormRules"
        >
            <a-row :gutter="20">
                <a-col :span="8">
                    <a-form-item label="表格标题" name="label">
                        <a-input v-model:value="columnsFormState.label" placeholder="请输入表格标题" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="表格属性" name="prop">
                        <a-input v-model:value="columnsFormState.prop" placeholder="请输入表格属性" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="表格宽度" name="width">
                        <a-input v-model:value="columnsFormState.width" placeholder="请输入表格宽度" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <a-row justify="start">
            <a-space>
                <a-button type="primary" @click="addColumns">添加</a-button>
                <a-button type="primary" @click="resetColumns">重置</a-button>
            </a-space>
        </a-row>
    </a-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ColumnsForm } from '../../index';
import { baseRules } from '@/utils/rule';

const columnsRef = ref();

const columnsFormState = reactive<ColumnsForm>({
    label: '',
    prop: '',
    width: '',
});

const columnsFormRules = reactive({
    label: [baseRules.required('表格标题')],
    prop: [baseRules.required('表格属性')],
    width: [baseRules.required('表格宽度'), baseRules.nums()],
});

const columns: Array<ColumnsForm> = [];

const addColumns = (): void => {
    console.log(this);
    console.log(columnsRef);
    columnsRef.value
        .validate()
        .then((result: ColumnsForm) => {
            columns.push(result);
        })
        .catch(() => console.log('error'));
};

const resetColumns = (): void => {
    columnsRef.value.resetFields();
};
</script>
