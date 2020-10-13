<!--<template>-->
<!--  <div class="" role="group">-->
<!--    <label for="input-live">Name:</label>-->
<!--    <b-form-input-->
<!--        id="input-live"-->
<!--        v-model="name"-->
<!--        :state="nameState"-->
<!--        aria-describedby="input-live-help input-live-feedback"-->
<!--        placeholder="Enter your name"-->
<!--        trim-->
<!--    ></b-form-input>-->

<!--    &lt;!&ndash; This will only be shown if the preceding input has an invalid state &ndash;&gt;-->
<!--    <b-form-invalid-feedback id="input-live-feedback">-->
<!--      Enter at least 3 letters-->
<!--    </b-form-invalid-feedback>-->

<!--    &lt;!&ndash; This is a form text block (formerly known as help block) &ndash;&gt;-->
<!--    <b-form-text id="input-live-help">Your full name.</b-form-text>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  layout: 'login',-->
<!--  computed: {-->
<!--    nameState() {-->
<!--      return this.name.length > 2 ? true : false-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      name: ''-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <section>
    <main>
      <form @submit="userLogin">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" v-model="login.password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <NuxtLink to="/" class="pt-10 pb-10">На главную страницу</NuxtLink>
    </main>
  </section>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  sections {
    width: 600px;
    border: 1px solid green;
  }
</style>