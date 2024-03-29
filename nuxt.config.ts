// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["ninja-keys"],
  },
  ui: {
    icons: ["fa6-brands", "fa6-regular"],
  },
});
