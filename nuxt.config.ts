export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/reset.css'],
  app: {
    baseURL: '/myTwitch/',
  },
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
  nitro: {
    preset: 'vercel',
    vercel: {
      regions: ['iad1'],
      functions: {
        'api/**': {
          memory: 3008,
          maxDuration: 30,
        },
      },
    },
    storage: {
      cache: {
        driver: 'memory',
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
