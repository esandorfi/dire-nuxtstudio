<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>

<template>

    <div class="flex justify-end max-w-6xl px-4 py-4 mx-auto gap-4 sm:px-8 text-sm">

        <div><a class="inline-flex items-center justify-center" href="tel:0663963910"> <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>&nbsp;
                06.63.96.39.10</a></div>
        <div><a class="inline-flex items-center justify-center" href="mailto:np@dire-estunart.com"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                &nbsp;
                <span class="underline">Nous écrire</span></a></div>
    </div>

    <div class="flex justify-between max-w-6xl px-4 py-4 mx-auto sm:px-8 bg-white dark:bg-black">
        <div v-if="appConfig.site?.name"
            class="inline-flex items-center text-gray-700 dark:text-gray-200 text-2xl font-extrabold">
            {{ appConfig.site.name }}
        </div>
        <!-- Navigation -->
        <div class="hidden md:inline-flex text-gray-700 dark:text-gray-200 items-center justify-center">
            <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold"
                class="mr-6 ">
                <span v-if="link._path === '/'">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg></span>
                <span v-else>{{ link.title }}</span>


            </NuxtLink>
        </div>
        <!-- Social icons & Color Mode -->
        <div class="space-x-3 transition text-gray-500">


            <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
        </div>
    </div>
</template>