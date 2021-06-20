export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '株式会社フードネットワーク',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon3.ico' },
      // { rel:"stylesheet" , href:"~/assets/style/bootstrap-reboot.css"},
      {rel : "stylesheet" , href : "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/bootstrap-reboot.css',
    { src: '~/assets/style/style.scss', lang: 'scss' },
    // '~/assets/style/style.sncss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    [
      '@nuxtjs/google-fonts',
      {
        families: {

          'Noto+Serif+JP': true,
          Roboto:true,
          'Reggae+One':true,
         
          

          // Varela: true,
          // 'Varela+Round': true
        },
      }
    ],


    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
