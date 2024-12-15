<script setup lang="ts">
import HomeLinks from '~/components/HomeLinks.vue';
</script>

<template>
    <div class="py-10 m-auto  sm:px-8  dark:bg-gray-800 ">
        <main class="max-w-none  ">
            <slot>
                <h1 class="text-2xl">
                    Page not found
                </h1>
            </slot>
            <HomeLinks></HomeLinks>
        </main>
        <Footer></Footer>
    </div>
</template>