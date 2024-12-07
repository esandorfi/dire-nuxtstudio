import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  extends: "content-wind",
  routeRules: {
    "/": {prerender: true},
  },
  modules: ["@nuxthq/studio", "@primevue/nuxt-module"],
  primevue: {
    autoImport: false,
    components: {
      include: ["Button"],
    },
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
