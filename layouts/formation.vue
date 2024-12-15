<template>
    <div class="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 pt-4">

        <div
            class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
            <main
                class="prose max-w-none dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400">
                <slot>
                    <h1 class="text-2xl">
                        Page not found
                    </h1>
                </slot>
            </main>
        </div>
        <div>
            <FormationEnPratique />
            <br>
            <FormationBackTo />

        </div>
    </div>
</template>