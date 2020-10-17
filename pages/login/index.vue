<template>
  <section>
    <b-row class="mt-20">
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="b-form">
          <b-form-group
              id="input-group-1"
              label="логин:"
              label-for="input-1"
              description=""
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Введите email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="пароль:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Введите пароль"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Войти</b-button>
          <b-button type="reset" variant="danger">Очистить поля</b-button>
        </b-form>

        <!--    <b-card class="mt-3" header="Вывод полей формы">-->
        <!--      <pre class="m-0">{{ form }}</pre>-->
        <!--    </b-card>-->

      </b-col>

    </b-row>

    <b-row class="text-center mt-20">
      <b-col>
        <b-link to="/" class="mt-20" >На главную страницу</b-link>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        food: null,
        // checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // this.form.food = null
      // this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>



<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div class="" role="group">&ndash;&gt;-->
<!--&lt;!&ndash;    <label for="input-live">Name:</label>&ndash;&gt;-->
<!--&lt;!&ndash;    <b-form-input&ndash;&gt;-->
<!--&lt;!&ndash;        id="input-live"&ndash;&gt;-->
<!--&lt;!&ndash;        v-model="name"&ndash;&gt;-->
<!--&lt;!&ndash;        :state="nameState"&ndash;&gt;-->
<!--&lt;!&ndash;        aria-describedby="input-live-help input-live-feedback"&ndash;&gt;-->
<!--&lt;!&ndash;        placeholder="Enter your name"&ndash;&gt;-->
<!--&lt;!&ndash;        trim&ndash;&gt;-->
<!--&lt;!&ndash;    ></b-form-input>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; This will only be shown if the preceding input has an invalid state &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <b-form-invalid-feedback id="input-live-feedback">&ndash;&gt;-->
<!--&lt;!&ndash;      Enter at least 3 letters&ndash;&gt;-->
<!--&lt;!&ndash;    </b-form-invalid-feedback>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; This is a form text block (formerly known as help block) &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <b-form-text id="input-live-help">Your full name.</b-form-text>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  layout: 'login',&ndash;&gt;-->
<!--&lt;!&ndash;  computed: {&ndash;&gt;-->
<!--&lt;!&ndash;    nameState() {&ndash;&gt;-->
<!--&lt;!&ndash;      return this.name.length > 2 ? true : false&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  data() {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      name: ''&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--<template>-->
<!--  <section>-->
<!--    <main>-->
<!--&lt;!&ndash;      <form @click="userLogin">&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          <label>Username</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="text" v-model="login.username" />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          <label>Password</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="text" v-model="login.password" />&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button">Submit</button>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </form>&ndash;&gt;-->

<!--        <b-container>-->
<!--          <b-row class="text-center">-->
<!--            <b-col sm="2">-->
<!--              <label>login</label>-->
<!--            </b-col>-->
<!--            <b-col sm="2">-->
<!--              <b-form-input></b-form-input>-->
<!--            </b-col>-->
<!--          </b-row>-->

<!--          <b-row class="text-center">-->
<!--            <b-col class="mt-10 mb-10 text-center">-->
<!--              <b-button variant="success">Войти</b-button><br />-->
<!--            </b-col>-->
<!--          </b-row>-->

<!--          <b-row class="text-center">-->
<!--            <b-col>-->
<!--              <NuxtLink to="/">На главную страницу</NuxtLink>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--        </b-container>-->
<!--    </main>-->
<!--  </section>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  layout: 'login',-->
<!--  data() {-->
<!--    return {-->
<!--      login: {-->
<!--        username: '',-->
<!--        password: ''-->
<!--      },-->
<!--      types: [-->
<!--        'логин',-->
<!--        'пароль',-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    async userLogin() {-->
<!--      try {-->
<!--        console.log(this.$auth)-->
<!--        let response = await this.$auth.loginWith('local', { data: this.login })-->
<!--        console.log(response)-->
<!--      } catch (err) {-->
<!--        console.log(err)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--  sections {-->
<!--    width: 600px;-->
<!--    border: 1px solid green;-->
<!--  }-->
<!--</style>-->