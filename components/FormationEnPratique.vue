<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-gray-900">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            {{ title }}
        </h2>

        <div class="space-y-3">
            <div class="grid grid-cols-[auto_1fr] gap-2 items-start">
                <span class="font-semibold text-gray-700 dark:text-gray-200">DURÉE :</span>
                <span class="text-gray-600 dark:text-gray-300">{{ duration }}</span>
            </div>

            <div class="grid grid-cols-[auto_1fr] gap-2 items-start">
                <span class="font-semibold text-gray-700 dark:text-gray-200">GROUPE :</span>
                <span class="text-gray-600 dark:text-gray-300">{{ groupSize }}</span>
            </div>

            <div class="mt-4">
                <h3 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">CONDITIONS DE PARTICIPATION</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ prerequisites }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'FORMATION INTRA ENTREPRISE'
  },
  duration: {
    type: String,
    default: '2 jours soit 14h'
  },
  groupSize: {
    type: String,
    default: '12 participants'
  },
  prerequisites: {
    type: String,
    default: 'Aucun prérequis'
  }
})
</script>