<template>
    <a-layout>
        <a-layout-header></a-layout-header>
        <a-layout-content class="content-wrapper">
            <a-card title="template">
                <a-card-grid style="width: 25%; text-align: center">base-element-table</a-card-grid>
                <a-card-grid style="width: 25%; text-align: center">base-element-table</a-card-grid>
                <a-card-grid style="width: 25%; text-align: center">base-element-table</a-card-grid>
            </a-card>
        </a-layout-content>
        <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {},
});
</script>

<style scoped>
.content-wrapper {
    min-height: calc(100vh - 70px - 64px);
}
</style>
