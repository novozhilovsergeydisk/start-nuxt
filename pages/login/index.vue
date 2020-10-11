<template>
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
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>