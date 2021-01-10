<template>
  <v-app
    id="portfolio-app"
    light
    data-app
  >
    <v-sheet
      tag="header"
      class="light pa-0"
      color="secondary darken-1"
    >
      <div class="logo--wrapper container pa-0">
        <v-row class="ma-0">
          <v-col
            class="logo--image-wrapper col-3 pa-0"
          >
            <v-sheet
              class="logo--image"
              min-width="230px"
              max-width="230px"
              width="230px"
              height="230px"
              color="accent"
              style="box-shadow: 0px 0px 20px #00D1FF;"
            >
              <div class="logo--description">
                рони<br>
                УРСУ
              </div>
            </v-sheet>
          </v-col>
          <v-col
            class="logo--title col-9 py-0"
            color="light darken-1"
          >
            UX-аналитика, <br>
            UX/UI-дизайн сайтов
          </v-col>
          <v-col
            tag="nav"
            cols="9"
            class="offset-3 pa-0"
          >
            <ul class="header--navbar">
              <li>
                <nuxt-link
                  class="header--navbar-item"
                  to="/projects"
                >
                  Проекты
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="header--navbar-item"
                  to="/expirience"
                >
                  Опыт работы
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="header--navbar-item"
                  to="/notes"
                >
                  Заметки
                </nuxt-link>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <Nuxt />
    <v-spacer />
    <v-sheet
      tag="footer"
      class="light pa-0"
      color="secondary darken-1"
    >
      <div class="logo--wrapper container pa-0">
        <v-row class="ma-0">
          <v-col
            class="logo--image-wrapper col-3 pa-0"
          >
            <v-sheet
              class="logo--image"
              min-width="230px"
              max-width="230px"
              width="230px"
              height="230px"
              color="accent"
              style="box-shadow: 0px 0px 20px #00D1FF;"
            >
              <div class="logo--description">
                рони<br>
                УРСУ
              </div>
            </v-sheet>
          </v-col>
          <v-col
            class="logo--title col-9 py-0"
            color="light darken-1"
          >
            UX-аналитика, <br>
            UX/UI-дизайн сайтов
          </v-col>
        </v-row>
      </div>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  &--image {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  &--description {
    font-size: 60px;
    line-height: 72px;
    letter-spacing: 0.12em;
    padding-left: 12px;
    text-transform: uppercase;
    font-family: 'Bebas Neue';
    position: relative;
    position: relative;
    bottom: -100%;
    transform: translateY(-100%);
  }
  &--title {
    margin-top: 60px;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.12em;
    color: white;
  }
}

.header {

  &--navbar {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    &-item{
      font-size: 40px;
      line-height: 53px;
      display: flex;
      align-items: center;
      text-align: right;
      letter-spacing: 0.12em;
      color: $color-accent;
    }
  }
}
</style>
