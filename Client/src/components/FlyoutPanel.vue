<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean
}>()
</script>

<template>
    <div class="flyout" :class="{ isOpen }">
        <slot />
    </div>
</template>

<style scoped>
    .flyout {
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        bottom: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(80%);
    }
    .flyout:hover, .flyout.isOpen {
        transform: translateX(0);
    }
</style>