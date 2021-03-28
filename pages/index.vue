<template>
  <v-container
    class="pa-0"
    tag="main"
    fluid
  >
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
              Проекты
            </h2>
            <TagList
              v-model="selectedProjectTags"
              :tags="projectTags"
            />
            <YearSort
              v-model="year"
              class="pb-3"
              :year-list="yearList"
              right
            />
          </div>
        </v-col>
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
        <v-col
          cols="12"
          class="d-flex flex-row justify-end align-baseline flex-wrap"
        >
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
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-if="$vuetify.breakpoint.mdAndUp"
      class="section-divider py-0"
      fluid
      tag="div"
    />
    <v-container
      class="pa-0"
      tag="section"
    >
      <v-row
        class="mx-md-n3 mx-0"
      >
        <v-col
          v-if="notes"
          class="py-0 pb-5 section-wrapper"
          cols="12"
        >
          <div class="d-flex flex-row align-center flex-wrap">
            <h2 class="page-text--title d-flex">
              Проекты
            </h2>
            <TagList
              v-model="selectedNoteTags"
              :tags="noteTags"
            />
          </div>
        </v-col>
        <v-col
          v-for="(note, index) in 3"
          :key="index"
          cols="12"
          class="col-lg-6 col-xl-4 py-0 px-0 px-md-3 justify-sm-center"
        >
          <CardNotes
            v-if="notes[index]"
            :note="notes[index]"
          />
        </v-col>
        <v-col
          cols="12"
          class="d-flex flex-row justify-end align-baseline flex-wrap"
        >
          <Button
            class="pl-5"
            :title="$vuetify.breakpoint.smAndDown ? '[ Заметки ]' : '[ Все заметки ]'"
            to="/notes"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'Projects',
  data: () => {
    return {
      projectTags: [
        '[ Сайты ]',
        '[ Соц. сети ]'
      ],
      noteTags: [
        '[ Дизайн ]',
        '[ Маркетинг ]'
      ],
      selectedProjectTags: [],
      selectedNoteTags: []
    }
  },
  computed: {
    ...mapState('pages', {
      yearList: state => state.yearList,
      tags: state => state.tags,
      items: state => state.items
    }),
    ...mapState('notes', {
      notes: state => state.items
    }),
    ...mapGetters('pages', [
      'getYear',
      'getLimit',
      'getOffset',
      'getStep'
    ]),
    year: {
      get () {
        return this.getYear
      },
      set (val) {
        this.setYear(val)
      }
    },
    limit: {
      get () {
        return this.getLimit
      },
      set (val) {
        this.setLimit(val)
      }
    },
    offset: {
      get () {
        return this.getOffset
      },
      set (val) {
        this.setOffset(val)
      }
    },
    step () {
      return this.getStep
    }
  },
  watch: {
    year (val) {
      this.setYear(val)
    },
    selectedProjectTags: {
      handler (val) {
        this.setTags(val)
      },
      deep: true
    },
    selectedNoteTags: {
      handler (val) {
        this.$store.dispatch('notes/setTags', val)
      },
      deep: true
    }
  },
  mounted () {
    this.init()
    this.$store.dispatch('notes/init')
  },
  methods: {
    ...mapActions('pages', [
      'init',
      'setYear',
      'setTags',
      'setLimit',
      'setOffset',
      'updateItems'
    ]),
    ...mapActions('notes', [
      'init3'
    ]),
    loadMore () {
      this.offset += this.step
    }
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
