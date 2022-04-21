<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 11:13:31
 * @LastEditTime: 2022-04-21 17:15:45
 * @LastEditors: LiChaoJun
 * @Description: 
-->
<template>
    <p>11</p>
    <highlightjs :code="code" />
</template>

<script lang="ts">
import { computed, onMounted, Ref, ref, defineComponent } from 'vue';
import { baseElementTableString, BaseElementTableConfigForm } from './string';

export default defineComponent({
    name: 'supplyChainBaseElementTable',
    setup() {
        /** onMounted */
        onMounted(() => {
            console.log('onMounted');
        });

        const form: Ref<BaseElementTableConfigForm> = ref({
            alignCenter: true,
        });

        const code = computed(() => {
            return baseElementTableString(form.value);
        });

        return {
            code,
            form,
        };
    },
});
</script>

