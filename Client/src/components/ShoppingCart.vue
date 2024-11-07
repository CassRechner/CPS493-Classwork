<script setup lang="ts">
import { refCart, count, total, removeFromCart } from '@/models/shoppingCart';

const cart = refCart()

</script>
<template>
    <div>
        <div class="" v-if="cart.length===0">
            <p>Your cart is empty</p>
        </div>
        <div v-else>
            <div class="" v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" :alt="item.product.title"/>
                <h3>{{ item.product.title }}</h3>
                <div>
                    ${{ item.product.price }} *
                    <select v-model="item.quantity">
                        <option v-for="n in 10" :key="n" :value="n"></option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cart {

    }
</style>