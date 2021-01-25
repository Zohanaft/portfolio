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
      <v-container
        class="logo--wrapper container pa-0"
      >
        <v-row
          class="mx-sm-n3 mx-0"
        >
          <v-col
            class="logo--image-wrapper col-12 col-xl-3 py-0"
          >
            <v-sheet
              class="logo--image mx-auto mr-xl-auto mx-xl-0 ma-0 mt-xl-15 mb-xl-15 mt-10 mb-5"
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
            class="logo--title mt-xl-15 mt-0 col-12 col-xl-9 py-0"
            color="light darken-1"
          >
            UX-аналитика, <br>
            UX/UI-дизайн сайтов
          </v-col>
          <v-col
            tag="nav"
            cols="9"
            class="pt-0 pl-11 pl-md-0 offset-xl-3 justify-xl-end"
          >
            <ul class="header--navbar">
              <li>
                <nuxt-link
                  class="header--navbar-item"
                  to="/"
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
      </v-container>
    </v-sheet>
    <Nuxt />
    <v-spacer />
    <v-sheet
      tag="footer"
      class="light pa-0"
      color="secondary darken-1"
    >
      <div class="logo--wrapper container pa-0">
        <v-row class="mx-sm-n3 mx-0">
          <v-col
            class="logo--image-wrapper col-12 col-xl-3 py-0"
          >
            <v-sheet
              class="logo--image mx-auto ma-0 mt-xl-15 mb-xl-15 mt-10 mb-5"
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
            class="logo--title mt-xl-15 mt-0 col-12 col-xl-9 py-0 pb-20"
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
    font-size: 16px;
    line-height: 21px;
    padding-left: 44px;
    letter-spacing: 0.12em;

    @media (min-width: 540px) {
      font-size: 32px;
      line-height: 42px;
      padding-left: 0px;
    }

    color: white;
  }
}

.header {

  &--navbar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding-top: 30px;
    flex-direction: column;
    padding-bottom: 20px;

    @media (min-width: 540px) {
      padding-top: 16px;
      padding-bottom: 0px;
      flex-direction: row;
    }

    &-item {
      display: flex;
      align-items: center;
      text-align: right;
      letter-spacing: 0.12em;
      color: $color-accent;

      padding-bottom: 20px;
      font-size: 20px;
      line-height: 26px;

      @media (min-width: 540px) {
        font-size: 40px;
        line-height: 53px;
        padding-bottom: 0px;
      }
    }
  }
}
</style>
