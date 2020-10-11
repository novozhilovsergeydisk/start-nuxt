<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">СНТ Загорье</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="active" to="/">Главная</b-nav-item>
          <b-nav-item to="/billboard">Доска объявлений</b-nav-item>
          <b-nav-item to="/contacts">Контакты</b-nav-item>
          <b-nav-item to="/login">Личный кабинет</b-nav-item>

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



    <!--    <p class="mt-4">-->
    <!--      Slide #: {{ slide }}<br>-->
    <!--      Sliding: {{ sliding }}-->
    <!--    </p>-->

    <!--    <b-container>-->
    <!--      <b-row class="w-100">-->
    <!--        <b-col>-->
    <!--          HI-->
    <!--        </b-col>-->
    <!--        <b-col>-->
    <!--          Joker-->
    <!--        </b-col>-->
    <!--      </b-row>-->
    <!--    </b-container>-->

    <!--    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>-->
    <!--    <b-sidebar id="sidebar-1" title="Sidebar" shadow>-->
    <!--      <div class="px-3 py-2">-->
    <!--        <p>-->
    <!--          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis-->
    <!--          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.-->
    <!--        </p>-->
    <!--        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>-->
    <!--      </div>-->
    <!--    </b-sidebar>-->

    <!--    <b-container class="container" style="">-->
    <!--            <b-row class="w-100">-->
    <!--              <b-col>-->
    <!--                <h3>Разделы</h3>-->

    <!--                <ul class="list-unstyled">-->
    <!--                  <li class="g-mb-10"><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary&#45;&#45;hover active-link" href="/">Главная</a></li>-->
    <!--                  <li class="g-my-10"><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary&#45;&#45;hover " href="/contacts">Доска объявлений</a></li>-->
    <!--                  <li class="g-my-10"><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary&#45;&#45;hover" href="/admin">Личный кабинет</a></li>-->
    <!--                  <li class="g-my-10"><a class="u-link-v5 g-color-gray-dark-v4 g-color-primary&#45;&#45;hover " href="/contacts">Контакты</a></li>-->
    <!--                </ul>-->
    <!--              </b-col>-->

    <!--              <b-col>-->
    <!--                <h3 class="">Контакты</h3>-->

    <!--                &lt;!&ndash; Links &ndash;&gt;-->
    <!--                <ul class="list-unstyled g-color-gray-dark-v4 g-font-size-13">-->
    <!--                  <li class="media my-3">-->
    <!--                    <i class="d-flex mt-1 mr-3 icon-hotel-restaurant-235 u-line-icon-pro"></i>-->

    <!--                      г. Шатура, мкр. Керва-->

    <!--                  </li>-->
    <!--                  <li class="media my-3">-->
    <!--                    <i class="d-flex mt-1 mr-3 icon-communication-062 u-line-icon-pro"></i>-->

    <!--                      mail@sntzagorie.ru-->

    <!--                  </li>-->
    <!--                  <li class="media my-3">-->
    <!--                    <i class="d-flex mt-1 mr-3 icon-communication-033 u-line-icon-pro"></i>-->

    <!--                      +7 (496) 457-25-60-->

    <!--                  </li>-->
    <!--                </ul>-->
    <!--                &lt;!&ndash; End Links &ndash;&gt;-->
    <!--              </b-col>-->
    <!--            </b-row>-->

    <!--    </b-container>-->

    <b-container>
      <footer class="bd-footer text-muted docs-border" style="padding-top: 20px;">
        <div class="container">
          <div class="row justify-content-center">
            <div class="text-center text-sm-right col-sm order-sm-3 col-12">
              <a to="/" class="d-inline-block mx-auto nuxt-link-active" target="_self">
                <b-img src="/images/logo.png" fluid alt="Responsive image"></b-img>
              </a>
            </div>

            <div class="text-left col-md-4 col-auto">
              <h5 class="bd-text-purple-bright mb-1">Разделы сайта</h5>

              <ul class="list-unstyled ml-3" style="margin-top: 20px;">
                <li><NuxtLink to="/about">О проекте</NuxtLink></li>
                <li><NuxtLink to="/about">Главная</NuxtLink></li>
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
    BootstrapVueIcons
  },
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>