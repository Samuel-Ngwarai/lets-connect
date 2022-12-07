// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.css'
    ],
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        title: 'Samuel Ngwarai',
        meta: [
          { name: 'description', content: 'Connect with Samuel Ngwarai' }
        ],
        link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ],
      }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/google-fonts', {
            download: true,
            prefetch: true,
            families: {
              Roboto: [100, 300],
              "M+PLUS+Rounded+1c": true,
            },
        },],
    ],
});
