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
          <TagList
            v-if="tags"
            v-model="selectedTags"
            :tags="tags"
          />
          <YearSort
            v-model="year"
            class="pb-3"
            :year-list="years"
            right
          />
        </div>
      </v-col>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        class="col-lg-4 col-sm-6 py-0 d-flex justify-center"
      >
        <CardProject
          :item="item"
        />
      </v-col>
      <v-col
        cols="12"
        class="d-flex flex-row justify-end align-baseline flex-wrap py-0"
      >
        <TagList
          v-if="$vuetify.breakpoint.mdAndUp"
          v-model="selectedTags"
          :tags="tags"
        />
        <Button
          class="pl-5"
          :title="group.title"
          :to="`/catalog/${group.id}`"
        />
      </v-col>
    </v-row>
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
          class="py-0 pb-5 section-wrapper"
          cols="12"
        >
          <div class="d-flex flex-row align-center flex-wrap">
            <h2 class="page-text--title d-flex">
              {{ noteGroup.title }}
            </h2>
            <TagList
              v-model="selectedNoteTags"
              :tags="noteTags"
            />
          </div>
        </v-col>
        <v-col
          v-for="(note, index) in notes"
          :key="index"
          cols="12"
          class="col-lg-6 col-xl-4 py-0 px-0 px-md-3 justify-sm-center"
        >
          <CardNotes
            v-if="note"
            :item="note"
          />
        </v-col>
        <v-col
          cols="12"
          class="d-flex flex-row justify-end align-baseline flex-wrap"
        >
          <TagList
            v-model="selectedNoteTags"
            :tags="noteTags"
            style="margin-right: auto;"
          />
          <Button
            class="pl-5"
            :title="$vuetify.breakpoint.smAndDown ? `[ ${noteGroup.title} ]` : `[ Все ${noteGroup.title} ]`"
            :to="`/catalog/${noteGroup.id}`"
          />
        </v-col>
      </v-row>
    </v-container>
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
      index: false,
      year: '',

      selectedTags: [],
      selectedNoteTags: [],
      noteGroup: null
    }
  },
  computed: {
    ...mapState('app', {
      group: state => state.group,
      groups: state => state.groups
    }),
    ...mapState('catalog', {
      tags: state => state.tags,
      items: state => state.items,
      years: state => state.years,
      step: state => state.step
    }),
    ...mapState('notes', {
      noteTags: state => state.tags,
      notes: state => state.items
    })
  },
  watch: {
    selectedTags (val) {
      const tags = val.toString()
      this.setSelectedTags({ tags: tags.split(',') })
    },
    selectedNoteTags (val) {
      const tags = val.toString()
      this.noteBlockSetSelectedTags({ tags: tags.split(',') })
    },
    year (val) {
      this.setYear({ year: val })
    }
  },
  async created () {
    this.clearSort()

    this.setCollection({ collection: this.group.title })
    this.setTags({ tags: this.group.tags.split(',') })

    const group = this.groups.find(el => el.view === 'NOTE')
    this.noteGroup = group
    if (group) {
      this.noteBlockSetCollection({ collection: group.title })
      this.noteBlockSetTags({ tags: group.tags.split(',') })
    }
    await this.initCatalog()
    await this.noteBlockInit()
  },
  methods: {
    ...mapActions('catalog', [
      'setCollection',
      'setTags',
      'setSelectedTags',
      'initCatalog',
      'setYear',
      'clearSort'
    ]),
    ...mapActions('notes', [
      'noteBlockSetCollection',
      'noteBlockSetTags',
      'noteBlockSetSelectedTags',
      'noteBlockSetOffset',
      'noteBlockSetLimit',
      'noteBlockInit'
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
    margin-bottom: 0px;
  }
}

.section-divider {
  margin-bottom: 30px;
}
</style>
