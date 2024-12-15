<!-- https://pagedone.io/blocks/marketing/features -->

<template>
    <section class="pt-4 pb-10 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center  [&_p]:m-0">
            <h1
                class="m-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <slot name="title" />
            </h1>
            <p class="text-xl pt-4 font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
                <slot name="description" />
            </p>
        </div>
    </section>
</template>