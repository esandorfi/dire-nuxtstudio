<template>
    <div class="flex bg-red-500">
        <p>before</p>
        <p>
            <ContentSlot name="title" />
        </p>
        <p>
            <ContentSlot name="subtitle" />
        </p>
        <p>after</p>
    </div>
</template>