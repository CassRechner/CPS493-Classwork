<script setup lang="ts">
    import { RouterLink } from "vue-router"

    const isOpen = ref(false)
</script>

<template>
    <nav class="navbar is-info">
        <div class="container">
            <div class="navbar-brand">
                <img src="" alt="">

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen"
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu" :class=" { 'is-active'=isOpen } ">

            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    font-weight: bold;
    border-bottom: 2px solid blue;
}
</style>