<template>
    <section class="">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    <slot name="title" />
                </h1>
                <p
                    class="max-w-4xl mb-6 text-2xl md:text-4xl font-extrabold tracking-tight leading-none dark:text-white">
                    <slot name="description" />
                </p>

            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex mr-auto place-self-center  ">
                <slot name="svg">

                </slot>

            </div>
        </div>
    </section>
</template>