<template>
  <main>
    <h1>About page</h1>

    <div>
      Стартовый проект на Node JS
    </div>

    <NuxtLink to="/" class="pd-10">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <p><a href="https://nuxtjs.org">External Link to another page</a></p>
  </main>
</template>

<style scoped>
  .pd-top-10 {
    padding-top: 10px;
  }

  .pd-10 {
    padding: 10px;
  }
</style>