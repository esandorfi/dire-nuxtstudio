<template>
    <section class="not-prose">
        <h1 class="text-4xl md:text-6xl pb-0 pt-0 mt-0 mb-0">
            <slot />
        </h1>
        <div class="text-xl md:text-3xl font-bold md:pt-2">
            <slot name="description" />
        </div>
    </section>
</template>