<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-24 17:11:57
 * @LastEditors: LiChaoJun
 * @Description: baseElementTable模板
-->
<template>
    <a-card>
        <a-form
            name="form"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18, offset: 0 }"
            autocomplete="off"
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
                    <a-form-item label="内容居中" name="alignCenter">
                        <a-switch v-model:checked="formState.alignCenter" />
                    </a-form-item>
                </a-col>
                <a-col :span="8">
                    <a-form-item label="显示序号" name="showSerialNumber">
                        <a-switch v-model:checked="formState.showSerialNumber" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <pre v-highlight>
            <code class="javascript">{{ code }}</code>
        </pre>
    </a-card>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onMounted, reactive } from 'vue';
import { baseElementTableString, BaseElementTableConfigForm } from './string';
import { baseRules } from '@/utils/rule';

/** onMounted */
onMounted(() => {
    // console.log('onMounted');
});

const formState: BaseElementTableConfigForm = reactive<BaseElementTableConfigForm>({
    ref: 'table',
    alignCenter: true,
    showSerialNumber: false,
});

const formRules = reactive({
    alignCenter: [baseRules.required('是否居中')],
});

const code: ComputedRef = computed(() => {
    return baseElementTableString(formState);
});
</script>

