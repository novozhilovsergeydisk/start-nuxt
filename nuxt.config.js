export default {
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['axios', 'vuetify']
  },
  plugins: ['~plugins/vuetify.js']
}
