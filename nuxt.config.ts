// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: ["en", "no"].map((i) => ({
      code: i,
      file: i + ".json",
      isCatchallLocale: i === "en",
    })),
    defaultLocale: "en",
    langDir: "lang/",
    strategy: "no_prefix",
  },
  devtools: { enabled: false },
});
