<template>
  <v-container
    class="pa-0 pb-10"
    tag="main"
    fluid
  >
    <v-container
      class="pa-0"
      tag="section"
    >
      <v-row
        v-if="page"
        class="mx-md-n3 mx-0"
      >
        <v-col
          tag="section"
          cols="12"
        >
          <div
            class="page-text intro"
          >
            <h1 class="page-text--title">
              {{ page.title }}
            </h1>
          </div>
        </v-col>
        <v-col
          tag="section"
          cols="12"
        >
          {{ page.excerpt }}
        </v-col>
        <v-col
          tag="section"
          cols="12"
        >
          {{ page.excerpt }}
        </v-col>
        <v-col
          ref="body"
          tag="section"
          cols="12"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { Api } from '~/middleware/api'

export default {
  name: 'Expirience',
  async asyncData ({ params, $axios, route }) {
    const slug = route.name
    const page = await $axios
      .get(
        new Api({
          slug
        }).genUrl('pages')
      )
    return { page: page.data.data[0] }
  },
  data: () => {
    return {
      loaded: false
    }
  },
  watch: {
    page: {
      handler (val) {
        this.setBody(this.page)
      },
      deep: true
    }
  },
  methods: {
    setBody (page) {
      this.$refs.body.innerHTML = page.body
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
