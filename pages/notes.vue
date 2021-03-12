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
              :tags="notesTags"
            />
          </div>
        </v-col>
        <v-col
          v-for="(note, index) in notes"
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
            :tags="notesTags"
          />
          <Button
            class="pl-5"
            :title="$vuetify.breakpoint.smAndDown ? '[ Загрузить ]' : '[ Загрузить еще ]'"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'PageNotes',
  data () {
    return {
      notesTags: [
        '[ Дизайн ]',
        '[ Маркетинг ]'
      ],
      selectedNoteTags: [],
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
