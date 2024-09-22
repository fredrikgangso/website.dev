// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
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
  css: ["~/assets/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: false },
});
