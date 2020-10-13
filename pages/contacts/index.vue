<template>
  <div>
    <div class="container" style="margin-top: 20px">
<!--      <h1 class="text-muted">Контакты</h1>-->

      <h2 class="text-muted">Товарищество Собственников Недвижимости «Загорье»</h2>
      <h5 class="text-muted">Садоводческое Некоммерческое Товарищество</h5>

      <hr />

      <p>140713, Московская область, г. Шатура, мкр. Керва.</p>
      <p>Председатель правления: Иванов Иван Иваныч.</p>
      <p>тел. +7 (496) 111-22-33</p>
      <p>e-mail: <a href="mailto:mail@sntzagorie.ru">mail@sntzagorie.ru</a></p>

      <hr />

      <h3 class="text-muted">Банковские реквизиты</h3>

      <p>инн 1234567898</p>
      <p>кпп 123456789</p>
      <p>р/с. 12345678987654321123</p>
      <p>бик 123456789</p>
      <p>к/с. 12345678987654321234</p>
      <p>Банк ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)</p>
      <p><b-alert show variant="success">Для зачисления платежей обязательно указывать номер участка и наименование платежа.</b-alert></p>

      <p>
        <b-button id="print" class="" name="print">Печать реквизитов</b-button>
      </p>

      <hr>

      <h3 class="text-muted">Документы</h3>

      <p>
        <a to="http://sntzagorie.ru/docs/inn.pdf"><b-img src="http://sntzagorie.ru/public/images/adobe_pdf.png" alt="фото"></b-img> ЕГРЮЛ</a>

        <a to="http://sntzagorie.ru/docs/ogrn.pdf"><b-img src="http://sntzagorie.ru/public/images/adobe_pdf.png" alt="фото"></b-img> ОГРН</a>
      <p>

      <hr>

      <h3 class="text-muted">Карта</h3>

<!--      <yandex-map :settings="settings">-->
<!--        &lt;!&ndash;Markers&ndash;&gt;-->
<!--      </yandex-map>-->

    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

export default {
  layout: 'main',
  components: { yandexMap, ymapMarker }
}
</script>

<style scoped>

</style>