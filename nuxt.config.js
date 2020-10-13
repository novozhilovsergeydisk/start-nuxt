module.exports = {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "СНТ Загорье",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/main.css'],
  loading: {
    color: 'green-light'
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['axios', 'vuetify']
  },
  /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
  components: true,
}
