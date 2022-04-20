<!--
 * @Author: LiChaoJun
 * @Date: 2022-04-18 17:55:39
 * @LastEditTime: 2022-04-19 16:01:18
 * @LastEditors: LiChaoJun
 * @Description: 基础页面layout
-->
<template>
    <a-layout>
        <a-layout-header>模板生成</a-layout-header>
        <a-layout-content class="content-wrapper">
            <slot name="content" />
        </a-layout-content>
        <a-layout-footer style="text-align: center">template ©2022</a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'basic',
});
</script>

<style scoped>
.content-wrapper {
    min-height: calc(100vh - 70px - 64px);
}
</style>
