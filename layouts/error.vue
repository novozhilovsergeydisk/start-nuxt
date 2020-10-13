<template>
  <section>
    <main>
      <h1>Error 404</h1>

      <nuxt-link to="/">На главную страницу</nuxt-link>
    </main>

  </section>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
  section {
    margin: 0 auto;
  }

  h1 {
    color: red;
  }
</style>