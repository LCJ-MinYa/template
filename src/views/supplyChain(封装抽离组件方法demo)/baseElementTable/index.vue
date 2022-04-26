<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-26 16:55:02
 * @LastEditors: LiChaoJun
 * @Description: baseElementTable模板
-->
<template>
    <a-card>
        <basic-form ref="basicFormRef" />

        <columns-form />
        <pre v-highlight>
            <code class="javascript">{{ code }}</code>
        </pre>
    </a-card>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef } from 'vue';
import { baseElementTableString } from '../index';
import BasicForm from './components/basicForm.vue';
import ColumnsForm from './components/columnsForm.vue';

const basicFormRef = ref();

const code: ComputedRef = computed(() => {
    return baseElementTableString(basicFormRef.value && basicFormRef.value.basicFormState);
});
</script>

