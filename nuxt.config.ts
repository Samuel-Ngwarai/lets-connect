// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    css: [
        '~/assets/css/main.css'
    ],
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        title: 'Samuel N',
        meta: [
          { name: 'description', content: 'Virtual coffee with Samuel Ngwarai' }
        ],
        link: [
          { onload: "this.onload=null; this.rel='stylesheet'; document.body.classList.add('fontLoaded')", as: 'style', rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap', fetchpriority: 'low' },
          { onload: "this.onload=null; this.rel='stylesheet'; document.body.classList.add('fontLoaded')", as: 'style', rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&display=swap', fetchpriority: 'low' },
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ],
      }
    },
    modules: [
        '@vueuse/nuxt',
    ],
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
    },
});
