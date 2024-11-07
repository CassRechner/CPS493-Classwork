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
            <p class="price">{{ product.price }}</p>
            <button class="button is-success">Add to cart</button>
        </div>

    </div>
</template>

<style scoped>
    .price {
        color: burlywood;
        float: right;
    }
    
    .shelf .box {
        width: 17rem;
        flex-grow: 1;
    }
</style>