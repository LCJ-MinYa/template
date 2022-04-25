<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-25 15:45:08
 * @LastEditors: LiChaoJun
 * @Description: baseElementTable模板
-->
<template>
    <a-card>
        <a-card title="基本信息" class="margin-bottom-20">
            <a-form
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18, offset: 0 }"
                :model="formState"
                :rules="formRules"
            >
                <a-row :gutter="20">
                    <a-col :span="8">
                        <a-form-item label="组件引用名称" name="ref">
                            <a-input v-model:value="formState.ref" placeholder="请输入组件引用名称" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="显示搜索" name="search">
                            <a-switch v-model:checked="formState.search" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="内容居中" name="alignCenter">
                            <a-switch v-model:checked="formState.alignCenter" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="格式化内容" name="formatterValue">
                            <a-switch v-model:checked="formState.formatterValue" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="显示序号" name="showSerialNumber">
                            <a-switch v-model:checked="formState.showSerialNumber" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </a-card>

        <a-card title="columns配置">
            <a-form
                ref="columnsRef"
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
        <pre v-highlight>
            <code class="javascript">{{ code }}</code>
        </pre>
    </a-card>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef, onMounted, reactive } from 'vue';
import { baseElementTableString, BaseElementTableConfigForm, ColumnsForm } from './string';
import { baseRules } from '@/utils/rule';

/** onMounted */
onMounted(() => {
    // console.log('onMounted');
});

const formState = reactive<BaseElementTableConfigForm>({
    ref: 'table',
    search: true,
    alignCenter: true,
    formatterValue: true,
    showSerialNumber: false,
});
const formRules = reactive({
    // ref: [baseRules.required('组件引用名称')],
    // alignCenter: [baseRules.requireChange('是否居中')],
    // showSerialNumber: [baseRules.requireChange('是否显示序号')],
});

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
    columnsRef.value
        .validate()
        .then((result: ColumnsForm) => {
            columns.push(result);
        })
        .catch((err: any) => console.log(err));
};
const resetColumns = (): void => {
    columnsRef.value.resetFields();
};

const code: ComputedRef = computed(() => {
    return baseElementTableString(formState);
});
</script>

