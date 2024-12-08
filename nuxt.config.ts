import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-12-08",
  extends: "content-wind",
  routeRules: {
    "/": {prerender: true},
  },
  modules: ["@nuxthq/studio", "@primevue/nuxt-module"],
  primevue: {
    autoImport: false,
    components: {
      include: ["Button", "Menubar", "Avatar", "Badge", "InputText"],
    },
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
