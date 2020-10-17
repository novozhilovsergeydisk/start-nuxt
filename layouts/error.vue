<template>
  <section>
    <main>
      <h1>404 | Not found</h1>

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
    color: #000000;
  }
</style>