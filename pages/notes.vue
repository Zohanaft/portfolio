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
          class="py-0 section-wrapper pt-16 pb-5"
          cols="12"
        >
          <div class="d-flex flex-row align-center flex-wrap">
            <h2 class="page-text--title d-flex">
              Заметки
            </h2>
            <TagList
              v-model="selectedNoteTags"
              :tags="noteTags"
            />
          </div>
        </v-col>
        <v-col
          v-for="(note, index) in items"
          :key="index"
          cols="12"
          class="col-md-6 col-lg-4 py-0 justify-sm-center"
        >
          <CardNotes
            :note="note"
          />
        </v-col>
        <v-col
          cols="12"
          class="d-flex flex-row justify-end align-baseline flex-wrap"
        >
          <TagList
            v-model="selectedNoteTags"
            :tags="noteTags"
          />
          <Button
            class="pl-5"
            :title="$vuetify.breakpoint.smAndDown ? '[ Загрузить ]' : '[ Загрузить еще ]'"
            @click="loadMore()"
          />
        </v-col>
        <!--
        <v-col
          v-for="(project, index) in 3"
          :key="index"
          cols="12"
          class="col-md-6 col-lg-4 py-0 justify-sm-center"
        >
          <CardProject
            :project="projects[index]"
          />
        </v-col>
        -->
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'

export default {
  name: 'PageNotes',
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
    ...mapState('notes', {
      yearList: state => state.yearList,
      tags: state => state.tags,
      items: state => state.items
    }),
    ...mapState('pages', {
      projects: state => state.items
    }),
    ...mapGetters('notes', [
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
    selectedNoteTags: {
      handler (val) {
        this.setTags(val)
      },
      deep: true
    },
    selectedProjectTags: {
      handler (val) {
        this.$store.dispatch('pages/setTags', val)
      },
      deep: true
    }
  },
  mounted () {
    this.init()
    // this.$store.dispatch('pages/init')
  },
  methods: {
    ...mapActions('notes', [
      'init',
      'setYear',
      'setTags',
      'setLimit',
      'setOffset',
      'updateItems'
    ]),
    loadMore () {
      this.offset += this.step
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
