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
          </div>
        </v-col>
        <v-col
          v-for="(project, index) in projects"
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
          v-for="(note, index) in notes"
          :key="index"
          cols="12"
          class="col-lg-6 col-xl-4 py-0 px-0 px-md-3 justify-sm-center"
        >
          <CardNotes
            :note="note"
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

export default {
  name: 'Projects',
  data: () => {
    return {
      projectTags: [
        '[ Сайты ]',
        '[ Соц. сети ]'
      ],
      projects: [
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        },
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        },
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        },
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        },
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        },
        {
          title: 'Северная Сказка',
          year: '2020',
          img: '@/assets/img/card-project/36.png'
        }
      ],
      noteTags: [
        '[ Дизайн ]',
        '[ Маркетинг ]'
      ],
      notes: [
        {
          title: 'Дизайн кнопок по гороскопу',
          year: '2020',
          img: '@/assets/img/card-notes/10.png',
          tags: ['Дизайн', 'Маркетинг'],
          social: [
            {
              name: 'Vk',
              to: '#'
            },
            {
              name: 'fb',
              to: '#'
            },
            {
              name: 'tw',
              to: '#'
            }
          ]
        },
        {
          title: 'О том, как собеседование шло',
          year: '2020',
          img: '@/assets/img/card-notes/11.png',
          tags: ['Дизайн'],
          social: [
            {
              name: 'Vk',
              to: '#'
            },
            {
              name: 'fb',
              to: '#'
            }
          ]
        },
        {
          title: 'Дизайн кнопок по гороскопу',
          year: '2020',
          img: '@/assets/img/card-notes/10.png',
          tags: ['Дизайн', 'Маркетинг'],
          social: [
            {
              name: 'Vk',
              to: '#'
            },
            {
              name: 'fb',
              to: '#'
            }
          ]
        }
      ],
      selectedProjectTags: [],
      selectedNoteTags: []
    }
  },
  methods: {
    loadMore () {
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
