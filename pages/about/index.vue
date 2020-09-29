<template>
  <main>
    <h1>About page</h1>

    <div class="pd-top-10 pd-bottom-10">
      Стартовый проект на Node JS
    </div>

    <div>
      <NuxtLink to="/" class="pd-top-10 pd-bottom-10">
        About (internal link that belongs to the Nuxt App)
      </NuxtLink>
      <p><a href="https://nuxtjs.org">External Link to another page</a></p>
    </div>

  </main>
</template>

<style scoped>
  .pd-top-10 {
    padding-top: 10px;
  }

  .pd-bottom-10 {
    padding-bottom: 10px;
  }
</style>