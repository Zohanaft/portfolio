<template>
  <v-container
    class="pa-0"
    tag="section"
  >
    <v-row
      class="mx-md-n3 mx-0"
    >
      <v-col
        class="py-0 section-wrapper pt-16 pb-5"
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
            v-model="cYear"
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
        <component
          :is="group.view === 'NOTE' ? 'card-notes' : 'card-projects'"
          :item="item"
        />
      </v-col>
      <v-col
        cols="12"
        class="d-flex flex-row justify-end align-baseline flex-wrap"
      >
        <YearSort
          v-model="cYear"
          class="pb-3"
          :year-list="years"
          left
        />
        <TagList
          v-if="$vuetify.breakpoint.mdAndUp"
          v-model="selectedTags"
          :tags="tags"
        />
        <Button
          v-if="!(items.length % step)"
          class="pl-5"
          :title="$vuetify.breakpoint.mdAndUp ? 'Загрузить еще' : 'Еще'"
          @click="addItems"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import CardNotes from '@/components/CardNotes'
import CardProjects from '@/components/CardProject'

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'CatalogPage',
  components: {
    'card-notes': CardNotes,
    'card-projects': CardProjects
  },
  data: () => {
    return {
      index: false,
      selectedTags: [],
      year: ''
    }
  },
  computed: {
    ...mapState('app', {
      group: state => state.group
    }),
    ...mapState('catalog', {
      tags: state => state.tags,
      items: state => state.items,
      years: state => state.years,
      step: state => state.step
    }),
    cYear: {
      get () { return this.year },
      set (val) { this.year = val }
    }
  },
  watch: {
    selectedTags (val) {
      const tags = val.toString()
      this.setSelectedTags({ tags: tags.split(',') })
    },
    year (val) {
      this.setYear({ year: val })
    }
  },
  async created () {
    this.clearSort()

    this.setCollection({ collection: this.group.title })
    this.setTags({ tags: this.group.tags.split(',') })

    await this.initCatalog()
  },
  methods: {
    ...mapActions('catalog', [
      'setCollection',
      'setTags',
      'setSelectedTags',
      'initCatalog',
      'setYear',
      'clearSort',
      'addItems'
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
