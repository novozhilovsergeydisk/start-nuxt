export default {
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/main.css'],
  loading: {
    color: '#456321'
  },
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
