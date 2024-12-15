<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        <!-- Bouton Formations -->
        <NuxtLink to="/formations"
            class="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform duration-200"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h2 class="text-2xl font-bold mb-2">Les 4 Formations</h2>
            <p class="text-center text-white/80">Découvrez nos programmes de formation</p>
        </NuxtLink>

        <!-- Bouton Nathalie Pinot -->
        <NuxtLink to="/nathalie-pinot"
            class="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform duration-200"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
            <h2 class="text-2xl font-bold mb-2">Nathalie Pinot</h2>
            <p class="text-center text-white/80">En savoir plus sur votre formatrice</p>
        </NuxtLink>
    </div>
</template>

<script setup>
  // Pas de props nécessaires
  </script>