<script lang="ts" setup>
const { navigation } = useContent()
const content = await queryContent('formations').where({ _path: { $not: '/formations' } }).find()
const appConfig = useAppConfig()


</script>

<template>

    <ul>
        <li v-for="item of content" :key="item._path">
            <NuxtLink :to="item._path" active-class="bg-red-100" class="mr-6">
                <strong>{{ item.title }}</strong><br>
                {{ item?.description }}<br>
                {{ item?.extra }}
            </NuxtLink>


        </li>
    </ul>


    <div class="flex justify-between md:max-w-5xl px-4 py-4 mx-auto sm:px-8">
        <div v-if="appConfig.site?.name" class="text-gray-700 dark:text-gray-200">
            <strong>{{ appConfig.site.name }}</strong>
        </div>
        <!-- Navigation -->
        <div class="text-gray-700 dark:text-gray-200">
            <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold"
                class="mr-6">
                {{ link.title }}
            </NuxtLink>
        </div>
        <!-- Social icons & Color Mode -->
        <div class="space-x-3 transition text-gray-500">

            <a v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`"
                title="Twitter" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
                <Icon name="fa-brands:twitter" class="w-5 h-5" />
            </a>
            <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub"
                class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
                <Icon name="fa-brands:github" class="w-5 h-5" />
            </a>
            <a v-if="appConfig.socials?.mastodon" :href="`https://elk.zone/${appConfig.socials?.mastodon}`"
                title="Mastodon" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
                <Icon name="fa-brands:mastodon" class="w-5 h-5" />
            </a>
            <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
        </div>
    </div>
</template>