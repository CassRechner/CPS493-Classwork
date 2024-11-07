import { computed, ref } from "vue";
import type { Product } from "./products";

export interface CartItem {
    product: Product;
    quantity: number;
}

const shoppingCart = ref<CartItem[]>([])

export const refCart = () => shoppingCart;
export const count = computed(() => shoppingCart.value.length)

export function addToCart(product: Product) {
    const item = shoppingCart.value.find((i) => i.product.id == product.id)
    //copy stuff from repo
}