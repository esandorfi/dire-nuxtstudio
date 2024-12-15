<template>
    <NuxtLink :to="href"
        class="not-prose group inline-flex items-center gap-2 px-4 py-2 underline text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        <span class="font-medium">Le programme</span>

    </NuxtLink>
</template>


<script setup>
   defineProps({
    href: {
      type: String,
      required: true
    }
   })
   </script>