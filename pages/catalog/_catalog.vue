<template>
  <v-container
    class="pa-0"
    tag="section"
  >
    <v-row
      class="mx-md-n3 mx-0"
    >
      <v-col
        cols="12"
      >
        <div class="page-text intro">
          <h1 class="page-text--title">
            Метод работы
          </h1>
          <p class="page-text--text">
            Предпочитаю командную игру. Не боюсь ошибок — исправить их легко, а нового без них не создать. Дохну от рутины. Продукт должен работать, а кнопки после покрасим. Придерживаюсь понятия “Клиент не может быть прав, он не специалист. Но у него вся нужная информация”.
          </p>
        </div>
      </v-col>
      <v-col
        class="py-0 d-flex justify-end justify-sm-start"
        cols="12"
      >
        <Button
          title="[ Написать ]"
          href="mailto:fivych@mail.ru"
        />
      </v-col>
      <v-col
        class="py-0 section-wrapper"
        cols="12"
      >
        <div class="d-flex flex-row align-center flex-wrap">
          <h2 class="page-text--title d-flex">
            {{ group.title }}
          </h2>
          <!--
          <TagList
            v-model="selectedProjectTags"
            :tags="projectTags"
          />
          -->
          <!--
          <YearSort
            v-model="year"
            class="pb-3"
            :year-list="yearList"
            right
          />
          -->
        </div>
      </v-col>
      <!--
      <v-col
        v-for="(project, index) in items"
        :key="index"
        cols="12"
        class="col-md-6 col-lg-4 py-0 justify-sm-center"
      >
        <CardProject
          :project="project"
        />
      </v-col>
      -->
      <v-col
        cols="12"
        class="d-flex flex-row justify-end align-baseline flex-wrap"
      >
        <!--
        <TagList
          v-if="$vuetify.breakpoint.mdAndUp"
          v-model="selectedProjectTags"
          :tags="projectTags"
        />
        <Button
          class="pl-5"
          :title="$vuetify.breakpoint.smAndDown ? '[ Проекты ]' : '[ Все проекты ]'"
          @click="loadMore()"
        />
        -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'CatalogPage',
  data: () => {
    return {
      index: false
    }
  },
  computed: {
    ...mapState('app', {
      group: state => state.group
    })
  },
  async created () {
    this.setCollection({ collection: this.group.title })
    this.setTags({ tags: this.group.tags })
    await this.initCatalog()
  },
  methods: {
    ...mapActions('catalog', [
      'setCollection',
      'setTags',
      'setSelectedTags',
      'initCatalog'
    ])
  }
}
</script>

<style lang="scss" scoped>

.intro {
  padding-top: 80px;
  padding-bottom: 30px;
}

.page-text{
  &--title {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
  }

  &--text {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
}

.section-divider {
  margin-bottom: 30px;
}
</style>
