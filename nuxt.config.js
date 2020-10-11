module.exports = {
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/main.css'],
  loading: {
    color: '#456321'
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
