<script setup lang="ts">
import type { Product } from '@/models/products';

const props = defineProps<{
    product: Product
}>()
</script>

<template>
    <div class="box">
        <div class="box-image">
            <img :src="product.thumbnail" alt="product.name" />
        </div>
        <div class="box-content">
            <h3>{{ product.title }}</h3>
            <h3>{{ product.description }}</h3>
            <h3>{{ product.price }}</h3>
        </div>

    </div>
</template>

<style scoped>

</style>