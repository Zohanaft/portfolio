<template>
  <v-container
    class="pa-0"
    tag="main"
    fluid
  >
    <nuxt-child />
    <!-- Для модуля х3
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
              Заметки
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
    -->
  </v-container>
</template>

<script>

export default {
  name: 'Catalog'
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
