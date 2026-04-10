import pkg from './package.json'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      version: pkg.version
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'TCG collage'
    }
  }
})