<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>СНТ Загорье</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active-class="active" to="/" exact no-prefetch>Главная</b-nav-item>
          <b-nav-item active-class="active" to="/billboard">Доска объявлений</b-nav-item>
          <b-nav-item active-class="active" exact no-prefetch to="/contacts">Контакты</b-nav-item>
          <b-nav-item active-class="active" exact no-prefetch to="/login">Личный кабинет</b-nav-item>

          <!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!--        <b-navbar-nav class="ml-auto">-->
        <!--          <b-nav-form>-->
        <!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
        <!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
        <!--          </b-nav-form>-->

        <!--          <b-nav-item-dropdown text="Lang" right>-->
        <!--            <b-dropdown-item href="#">EN</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">ES</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">RU</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">FA</b-dropdown-item>-->
        <!--          </b-nav-item-dropdown>-->

        <!--          <b-nav-item-dropdown right>-->
        <!--            &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
        <!--            <template v-slot:button-content>-->
        <!--              <em>User</em>-->
        <!--            </template>-->
        <!--            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
        <!--            <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
        <!--          </b-nav-item-dropdown>-->

        <!--        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>

    <nuxt />

    <b-container>
      <footer class="bd-footer text-muted docs-border" style="padding-top: 20px;">
        <div class="container">
          <div class="row justify-content-center">
            <div class="text-center text-sm-right col-sm order-sm-3 col-12">

                <b-img src="/images/logo.png" fluid alt="Responsive image"></b-img>

            </div>

            <div class="text-left col-md-4 col-auto">
              <h5 class="bd-text-purple-bright mb-1">Разделы сайта</h5>

              <ul class="list-unstyled ml-3" style="margin-top: 20px;">
<!--                <li><NuxtLink to="/about">О проекте</NuxtLink></li>-->
                <li><NuxtLink to="/" exact>Главная</NuxtLink></li>
                <li><NuxtLink to="/billboard">Доска объявлений</NuxtLink></li>
                <li><NuxtLink to="/login">Личный кабинет</NuxtLink></li>
                <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
              </ul>

            </div>

            <div class="text-left col-auto">
              <h5 class="bd-text-purple-bright mb-1">Контакты</h5>

              <ul class="list-unstyled ml-3" style="margin-top: 20px;">
                <li><b-icon icon="person"></b-icon> г. Шатура, мкр. Керва</li>
                <li><b-icon icon="mailbox"></b-icon> mail@sntzagorie.ru</li>
                <li><b-icon icon="phone"></b-icon> +7 (496) 457-25-60</li>
              </ul>
            </div>
          </div>
          <hr />

          <p class="mb-2">2020 © ТСН СНТ Загорье. Все права защищены.</p>

        </div>


      </footer>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
components: {
  BootstrapVue
}
}
</script>

<style>
  /*body {*/
  /*  color: red;*/
  /*}*/

  .b-form {
    width: 300px;
    margin: 0 auto;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .mt-10 {
    margin-top: 10px;
  }

</style>