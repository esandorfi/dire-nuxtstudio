<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
    <div class="sm:pt-0 sm:pb-10">
        <Html lang="fr" />
        <Meta property="og:image" :content="cover" />
        <Meta name="twitter:card" content="summary_large_image" />
        <NuxtLoadingIndicator />
        <AppNavbar />
        <slot />
    </div>
</template>

<style lang="postcss">
body {
    @apply bg-[#F3EFFED] text-black dark:bg-gray-900 dark:text-white;
}
</style>