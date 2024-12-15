<script lang="ts" setup>
const { navigation } = useContent()
const content = await queryContent('formations').where({ _path: { $not: '/formations' } }).find()
const appConfig = useAppConfig()


</script>

<template>

    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="item of content" :key="item._path"
                class="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>

                <NuxtLink :to="item._path">
                    <h5 class="mt-2 mb-0 pb-0 text-2xl md:text-5xl  tracking-tight text-gray-900 dark:text-white">
                        {{ item.title2 }}
                    </h5>
                </NuxtLink>
                <p class="mb-3 mt-0 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ item?.description }}
                </p>
                <FormationGoTo :href="item._path" class="mt-6"></FormationGoTo>

            </div>


        </div>
    </div>



</template>