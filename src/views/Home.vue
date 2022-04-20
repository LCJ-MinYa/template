<template>
    <a-card title="供应链template">
        <a-card-grid class="item-wrapper">
            <router-link to="about">base-element-table</router-link>
        </a-card-grid>
    </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {},
});
</script>

<style scoped>
.item-wrapper {
    width: 25%;
    text-align: center;
}
</style>
