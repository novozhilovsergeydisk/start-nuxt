<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        background="#ababab"
        img-width="1024"
        img-height="389"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!--      <b-carousel-slide-->
      <!--          caption="First slide"-->
      <!--          text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
      <!--          img-src="https://picsum.photos/1024/480/?image=52"-->
      <!--      ></b-carousel-slide>-->

      <!-- Slides with custom text -->
      <!--      <b-carousel-slide img-src="https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU">-->
      <!--        <h1>СНТ Загорье</h1>-->
      <!--      </b-carousel-slide>-->

      <!-- Slides with image only -->
      <!--      <b-carousel-slide img-src="<%= BASE_URL %>bg-main.jpg"></b-carousel-slide>-->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <h1>СНТ Загорье</h1>
        <template v-slot:img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              src="/images/bg-main.jpg"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!--      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
      <!--        <p>-->
      <!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
      <!--          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
      <!--        </p>-->
      <!--      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'

export default {
  layout: 'main',

  // async data({ params }) {
  //   const { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   return { title: data.title }
  // },
  data() {
    return {
      posts: [],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  // async fetch() {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
  //     this.remote_data = { data: res.data }
  //     return this.remote_data
  //     // return { data: res.data }
  //   })
  //
  //   console.log('this.remote_data = ', this.remote_data)
  //
  //   // this.remote_data.forEeach(item => {console.log(item)})
  //
  //
  //
  //   // this.posts = await this.$http.$get(
  //   //     'https://jsonplaceholder.typicode.com/posts'
  //   // )
  // },
  fetchOnServer: true
}
</script>