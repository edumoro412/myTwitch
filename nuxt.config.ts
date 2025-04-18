export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  css: ['~/assets/css/reset.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/main.scss" as *;`,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },
});
