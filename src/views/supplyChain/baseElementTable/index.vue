<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-28 10:16:02
 * @LastEditors: LiChaoJun
 * @Description: baseElementTable模板
-->
<template>
    <a-card>
        <a-card title="组件配置" class="margin-bottom-20">
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
                        <a-form-item label="请求地址" name="requestApi">
                            <a-input
                                v-model:value="basicFormState.requestApi"
                                placeholder="请输入请求地址"
                            />
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

        <a-card title="表格配置" class="margin-bottom-20">
            <a-tabs>
                <a-tab-pane style="min-height: 100px;" key="1" tab="自定义配置">
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
                                    <a-input
                                        v-model:value="columnsFormState.label"
                                        placeholder="请输入表格标题"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="表格属性" name="prop">
                                    <a-input
                                        v-model:value="columnsFormState.prop"
                                        placeholder="请输入表格属性"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="表格宽度" name="width">
                                    <a-input
                                        v-model:value="columnsFormState.width"
                                        placeholder="请输入表格宽度"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="对齐方式" name="align">
                                    <a-select
                                        v-model:value="columnsFormState.align"
                                        placeholder="请选择表格对齐方式"
                                    >
                                        <a-select-option
                                            v-for="item in TABLE_COLUMNS_ENUM.ALIGN"
                                            :key="item.value"
                                            :value="item.value"
                                        >{{ item.label }}</a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="内容过长省略" name="showOverflowTooltip">
                                    <a-switch
                                        v-model:checked="columnsFormState.showOverflowTooltip"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="搜索序号" name="searchOrder">
                                    <a-input
                                        v-model:value="columnsFormState.searchOrder"
                                        placeholder="请输入搜索序号"
                                    />
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="搜索类型" name="searchType">
                                    <a-select
                                        v-model:value="columnsFormState.searchType"
                                        placeholder="请选择搜索类型"
                                    >
                                        <a-select-option
                                            v-for="item in TABLE_COLUMNS_ENUM.SEARCH_TYPE"
                                            :key="item.value"
                                            :value="item.value"
                                        >{{ item.label }}</a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane style="min-height: 100px;" key="2" tab="通用配置">12</a-tab-pane>
            </a-tabs>
            <a-row justify="start">
                <a-space>
                    <a-button type="primary" @click="addColumns">添加</a-button>
                    <a-button type="primary" @click="resetColumns">重置</a-button>
                </a-space>
            </a-row>
        </a-card>

        <a-card title="代码展现">
            <pre v-highlight>
                <code class="javascript">{{ code }}</code>
            </pre>
            <a-row justify="start">
                <a-space>
                    <a-button class="copy" type="primary" @click="copyCode">复制</a-button>
                </a-space>
            </a-row>
        </a-card>
    </a-card>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { baseElementTableString } from '../index';
import { basicFormState, basicFormRules } from './basicForm';
import columnsForm from './columnsForm';
import clipboardJS from 'clipboard';
import { message } from 'ant-design-vue';
import { codeNewLineReplaceLogo } from '@/utils/util';

const { columnsRef, columnsFormState, columnsFormRules, columns, addColumns, resetColumns, TABLE_COLUMNS_ENUM } = columnsForm();

const code: ComputedRef = computed(() => {
    return baseElementTableString(basicFormState, columns);
});

const copyCode = () => {
    const clipboard = new clipboardJS('.copy', {
        text: () => codeNewLineReplaceLogo(code.value),
    });
    clipboard.on('success', () => {
        clipboard.destroy();
        message.success('复制成功');
    });
    clipboard.on('error', () => {
        clipboard.destroy();
        message.error('复制失败');
    });
};
</script>

