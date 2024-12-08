<template>
    <!-- Main navigation container -->
    <div class="relative z-50">
        <!-- Desktop & Mobile header -->
        <div class="bg-white shadow-sm">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between py-4">
                    <!-- Logo -->
                    <a href="/" class="flex items-center space-x-2">
                        <span class="sr-only">Les Façades du Thouet</span>
                        <!-- You can add your logo image here -->
                    </a>

                    <!-- Desktop Navigation - Hidden on mobile -->
                    <nav class="hidden lg:block">
                        <ul class="flex items-center space-x-8">
                            <li>
                                <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">
                                    Accueil
                                </a>
                            </li>

                            <!-- Services Dropdown -->
                            <li class="relative group">
                                <button class="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                                    @mouseenter="activeDesktopMenu = 'services'">
                                    Nos services
                                    <svg class="w-4 h-4 ml-1" :class="{ 'rotate-180': activeDesktopMenu === 'services' }"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <!-- Desktop Services Submenu -->
                                <div class="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2"
                                    @mouseleave="activeDesktopMenu = null" v-show="activeDesktopMenu === 'services'">
                                    <!-- Isolation -->
                                    <div class="group/isolation relative">
                                        <a href="/isolation-exterieure"
                                            class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                            @mouseenter="activeSubmenu = 'isolation'">
                                            Isolation par l'extérieur
                                            <svg class="w-4 h-4 ml-1 inline float-right" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>

                                        <!-- Desktop Isolation Submenu -->
                                        <div class="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-2"
                                            v-show="activeSubmenu === 'isolation'">
                                            <a v-for="(item, index) in isolationItems" :key="index" :href="item.href"
                                                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                                                {{ item.text }}
                                            </a>
                                        </div>
                                    </div>

                                    <a href="/location-echafaudage"
                                        class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                                        Location d'échafaudage
                                    </a>
                                </div>
                            </li>

                            <li>
                                <a href="/realisations" class="text-gray-700 hover:text-blue-600 transition-colors">
                                    Nos réalisations
                                </a>
                            </li>

                            <li>
                                <a href="/entreprise" class="text-gray-700 hover:text-blue-600 transition-colors">
                                    L'entreprise
                                </a>
                            </li>

                            <li>
                                <a href="/contact" class="text-gray-700 hover:text-blue-600 transition-colors">
                                    Devis & Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <!-- Mobile Menu Button -->
                    <button class="lg:hidden p-2" @click="isMobileMenuOpen = !isMobileMenuOpen">
                        <div class="w-6 h-5 relative flex flex-col justify-between">
                            <span class="w-full h-0.5 bg-gray-800 transition-all duration-300"
                                :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
                            <span class="w-full h-0.5 bg-gray-800 transition-opacity"
                                :class="{ 'opacity-0': isMobileMenuOpen }"></span>
                            <span class="w-full h-0.5 bg-gray-800 transition-all duration-300"
                                :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" v-show="isMobileMenuOpen"
            @click="isMobileMenuOpen = false">
            <div class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transition-transform duration-300"
                :class="{ 'translate-x-0': isMobileMenuOpen, 'translate-x-full': !isMobileMenuOpen }" @click.stop>
                <div class="p-5">
                    <ul class="space-y-4">
                        <li>
                            <a href="/" class="text-gray-700 hover:text-blue-600">Accueil</a>
                        </li>

                        <!-- Mobile Services Menu -->
                        <li>
                            <button class="flex items-center justify-between w-full text-gray-700 hover:text-blue-600"
                                @click="toggleMobileSubmenu('services')">
                                Nos services
                                <svg class="w-4 h-4 transition-transform"
                                    :class="{ 'rotate-180': activeMobileMenu === 'services' }" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <ul class="mt-2 ml-4 space-y-2" v-show="activeMobileMenu === 'services'">
                                <li>
                                    <button
                                        class="flex items-center justify-between w-full text-gray-700 hover:text-blue-600"
                                        @click="toggleMobileSubmenu('isolation')">
                                        Isolation par l'extérieur
                                        <svg class="w-4 h-4 transition-transform"
                                            :class="{ 'rotate-180': activeMobileMenu === 'isolation' }" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <ul class="mt-2 ml-4 space-y-2" v-show="activeMobileMenu === 'isolation'">
                                        <li v-for="(item, index) in isolationItems" :key="index">
                                            <a :href="item.href" class="block text-gray-700 hover:text-blue-600">
                                                {{ item.text }}
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="/location-echafaudage" class="block text-gray-700 hover:text-blue-600">
                                        Location d'échafaudage
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="/realisations" class="text-gray-700 hover:text-blue-600">
                                Nos réalisations
                            </a>
                        </li>

                        <li>
                            <a href="/entreprise" class="text-gray-700 hover:text-blue-600">
                                L'entreprise
                            </a>
                        </li>

                        <li>
                            <a href="/contact" class="text-gray-700 hover:text-blue-600">
                                Devis & Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
        activeDesktopMenu: null,
        activeMobileMenu: null,
        activeSubmenu: null,
        isolationItems: [
          {
            text: "Tout savoir sur l'isolation par l'extérieur",
            href: "/isolation-exterieure"
          },
          {
            text: "Finition enduite",
            href: "/isolation-exterieure/finition-enduite"
          },
          {
            text: "Finition bardage",
            href: "/isolation-exterieure/finition-bardage"
          },
          {
            text: "L'isolant thermique",
            href: "/isolation-exterieure/isolants"
          }
        ]
      }
    },
    methods: {
      toggleMobileSubmenu(menu) {
        this.activeMobileMenu = this.activeMobileMenu === menu ? null : menu
      }
    },
    watch: {
      isMobileMenuOpen(newVal) {
        // Prevent body scroll when mobile menu is open
        document.body.style.overflow = newVal ? 'hidden' : ''
      }
    }
  }
  </script>