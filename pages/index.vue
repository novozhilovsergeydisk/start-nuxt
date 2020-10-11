<template>
  <main>
    <h1>Main page</h1>

    <NuxtLink to="/about">
      О проекте
    </NuxtLink>

    <p>
      <button @click="$fetch">Refresh</button>
    </p>
  </main>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'

export default {
  // async data({ params }) {
  //   const { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   return { title: data.title }
  // },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.remote_data = { data: res.data }
      return this.remote_data
      // return { data: res.data }
    })

    console.log(this.remote_data)

    // this.remote_data.forEeach(item => {console.log(item)})



    // this.posts = await this.$http.$get(
    //     'https://jsonplaceholder.typicode.com/posts'
    // )
  },
  fetchOnServer: true
}
</script>