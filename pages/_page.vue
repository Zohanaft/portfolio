<template>
  <v-container
    class="pa-0"
    tag="main"
    fluid
  >
    <v-container
      class="pa-0 pt-16"
      tag="section"
    >
      <v-row
        v-if="page"
        class="mx-md-n3 mx-0"
      >
        <v-col
          class="pa-0 pt-4"
          tag="section"
          cols="12"
        >
          <span class="page-type">
            {{ group.title }}
          </span>
        </v-col>
        <v-col
          class="pa-0 pt-0 d-flex felx-row flex-wrap align-start"
          tag="section"
          cols="12"
        >
          <div
            class="page-text intro"
          >
            <h1 class="page-text--title font-bebas font-weight-bold">
              {{ page.title }}
            </h1>
          </div>
          <div class="left-menu ml-auto">
            <div class="page-year font-bebas">
              {{ page.year }}
            </div>
            <div class="social">
              <div class="page--social">
                <ul>
                  <li>
                    <a
                      v-if="page.social_fb"
                      :href="page.social_fb"
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="29" height="29" stroke="#00D1FF" />
                        <path d="M7.95508 22H9.58984V13.7471H13.2549V12.4902H9.58984V11.8223C9.58984 11.4238 9.63965 11.0752 9.73926 10.7764C9.84473 10.4775 9.99707 10.2344 10.1963 10.0469C10.3838 9.86523 10.6182 9.73047 10.8994 9.64258C11.1865 9.54883 11.5146 9.50195 11.8838 9.50195C12.2471 9.50195 12.5869 9.53418 12.9033 9.59863C13.2256 9.65723 13.5068 9.72754 13.7471 9.80957L13.9404 8.46484C13.7881 8.42383 13.6387 8.38867 13.4922 8.35938C13.3457 8.32422 13.1992 8.29199 13.0527 8.2627C12.8301 8.22168 12.6045 8.18945 12.376 8.16602C12.1475 8.13672 11.916 8.12207 11.6816 8.12207C11.1191 8.12207 10.6094 8.20117 10.1523 8.35938C9.69531 8.51758 9.30566 8.75195 8.9834 9.0625C8.65527 9.37305 8.40039 9.75977 8.21875 10.2227C8.04297 10.6797 7.95508 11.2129 7.95508 11.8223V12.4902H5.33594V13.7471H7.95508V22ZM24.7594 17.3506V17.166C24.7594 16.668 24.7184 16.1963 24.6364 15.751C24.5543 15.2998 24.4342 14.8896 24.276 14.5205C24.1237 14.1924 23.9479 13.8965 23.7487 13.6328C23.5495 13.3633 23.3239 13.1348 23.0719 12.9473C22.7907 12.748 22.4772 12.5928 22.1315 12.4814C21.7858 12.3701 21.4079 12.3145 20.9977 12.3145C20.6696 12.3145 20.3649 12.3467 20.0836 12.4111C19.8024 12.4756 19.5446 12.5693 19.3102 12.6924C19.1227 12.792 18.9469 12.9121 18.7829 13.0527C18.6188 13.1875 18.4694 13.3398 18.3346 13.5098V8.5H16.7086V22H18.2028L18.2819 20.9189C18.3873 21.0537 18.4987 21.1768 18.6159 21.2881C18.733 21.3994 18.8561 21.502 18.985 21.5957C19.2545 21.7832 19.5563 21.9268 19.8903 22.0264C20.2301 22.126 20.6051 22.1758 21.0153 22.1758C21.3727 22.1758 21.7037 22.1318 22.0084 22.0439C22.319 21.9561 22.6032 21.833 22.861 21.6748C23.2184 21.4463 23.5231 21.1592 23.775 20.8135C24.0329 20.4619 24.2409 20.0664 24.3991 19.627C24.5162 19.293 24.6041 18.9355 24.6627 18.5547C24.7272 18.168 24.7594 17.7666 24.7594 17.3506ZM23.1334 17.166V17.3506C23.1334 17.6318 23.1159 17.9072 23.0807 18.1768C23.0455 18.4463 22.9899 18.6982 22.9137 18.9326C22.82 19.2432 22.694 19.5244 22.5358 19.7764C22.3776 20.0283 22.1813 20.2363 21.9469 20.4004C21.7711 20.5293 21.5719 20.6289 21.3493 20.6992C21.1266 20.7637 20.8805 20.7959 20.611 20.7959C20.3297 20.7959 20.0719 20.7607 19.8375 20.6904C19.6032 20.6143 19.3922 20.5088 19.2047 20.374C19.0172 20.2393 18.8502 20.084 18.7037 19.9082C18.5631 19.7266 18.4401 19.5303 18.3346 19.3193V15.1621C18.4342 14.9512 18.5543 14.7578 18.695 14.582C18.8414 14.4004 19.0084 14.2422 19.1959 14.1074C19.3776 13.9785 19.5856 13.8789 19.82 13.8086C20.0543 13.7324 20.3121 13.6943 20.5934 13.6943C20.8512 13.6943 21.0856 13.7236 21.2965 13.7822C21.5075 13.8408 21.6979 13.9229 21.8678 14.0283C22.1139 14.1748 22.3219 14.377 22.4918 14.6348C22.6618 14.8926 22.7995 15.1768 22.9049 15.4873C22.9811 15.7393 23.0368 16.0088 23.0719 16.2959C23.1129 16.5771 23.1334 16.8672 23.1334 17.166Z" fill="#00D1FF" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      v-if="page.social_vk"
                      :href="page.social_vk"
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="29" height="29" stroke="#00D1FF" />
                        <path d="M8.66699 22H10.082L14.1162 9.20312H12.3848L9.55469 18.7393L9.36133 19.3809L9.17676 18.7568L6.36426 9.20312H4.62402L8.66699 22ZM19.5475 17.5615L23.0368 22H25.1022L20.6637 16.4541L24.5133 12.4902H22.5358L19.4157 15.6191L18.3522 16.7617V8.5H16.7174V22H18.3522V18.7129L19.5475 17.5615Z" fill="#00D1FF" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      v-if="page.social_tw"
                      :href="page.social_tw"
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="29" height="29" stroke="#00D1FF" />
                        <path d="M9.37891 10.1875H7.74414V12.4902H5.24805V13.7471H7.74414V18.915C7.74414 19.501 7.82031 20.002 7.97266 20.418C8.13086 20.8281 8.34473 21.1621 8.61426 21.4199C8.88379 21.6836 9.2002 21.877 9.56348 22C9.93262 22.1172 10.3281 22.1758 10.75 22.1758C11.002 22.1758 11.2539 22.1641 11.5059 22.1406C11.7637 22.1172 12.0068 22.082 12.2354 22.0352C12.4639 21.9941 12.6748 21.9443 12.8682 21.8857C13.0615 21.8213 13.2256 21.748 13.3604 21.666L13.1318 20.5146C13.0322 20.5381 12.9033 20.5674 12.7451 20.6025C12.5928 20.6318 12.4287 20.6611 12.2529 20.6904C12.0713 20.7197 11.8867 20.7461 11.6992 20.7695C11.5117 20.7871 11.3301 20.7959 11.1543 20.7959C10.9141 20.7959 10.6855 20.7666 10.4688 20.708C10.2578 20.6494 10.0703 20.5469 9.90625 20.4004C9.74219 20.2598 9.61328 20.0693 9.51953 19.8291C9.42578 19.5889 9.37891 19.2842 9.37891 18.915V13.7471H13V12.4902H9.37891V10.1875ZM17.6139 22H18.8971L20.3649 16.1729L20.6022 14.6963L20.8483 16.1729L22.3336 22H23.6168L25.6383 12.4902H24.1969L23.1422 18.5547L22.9049 20.0488L22.65 18.5547L21.1383 12.4902H20.0924L18.5719 18.5547L18.3346 19.917L18.1412 18.5547L17.0338 12.4902H15.5924L17.6139 22Z" fill="#00D1FF" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </v-col>
        <!--
        <v-col
          tag="section"
          class="pa-0 pt-10"
          cols="12"
        >
          {{ page.excerpt }}
        </v-col>
        -->
        <v-col
          ref="body"
          class="pa-0 pt-10 pb-10"
          tag="section"
          cols="12"
        />
        <v-container
          v-if="$vuetify.breakpoint.mdAndUp"
          class="pa-0 section-divider py-0"
          fluid
          tag="div"
        />
        <v-col
          class="pa-0 pt-5"
        >
          <span
            v-for="(tag, index) in page.tags.split(',')"
            :key="index"
            class="tag-list--item"
          >
            {{ tag }}
          </span>
        </v-col>
        <v-col
          cols="12"
          class="pa-0 pt-10"
        >
          <h2 class="page-text--title d-flex">
            Другие проекты
          </h2>
        </v-col>
        <v-col
          cols="12"
          class="pa-0 pb-16 d-flex flex-row flex-wrap"
        >
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            class="pa-0 col-lg-6 col-xl-4 py-0 px-0 justify-sm-center"
          >
            <component
              :is="group.view === 'NOTE' ? 'card-notes' : 'card-projects'"
              :item="item"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

import CardNotes from '@/components/CardNotes'
import CardProjects from '@/components/CardProject'

import { Api } from '~/middleware/api'

export default {
  name: 'Page',
  components: {
    'card-notes': CardNotes,
    'card-projects': CardProjects
  },
  async asyncData ({ params, $axios }) {
    const page = await $axios
      .get(
        new Api({
          slug: params.page
        }).genUrl('pages')
      )
    return { page: page.data.data[0] }
  },
  data: () => {
    return {
      index: false
    }
  },
  computed: {
    ...mapState('app', {
      group: state => state.group,
      groups: state => state.groups
    }),
    ...mapState('catalog', {
      tags: state => state.tags,
      items: state => state.items
    })
  },
  watch: {
    selectedTags (val) {
      const tags = val.toString()
      this.setSelectedTags({ tags: tags.split(',') })
    }
  },
  async created () {
    const collection = this.page.collections.split(',')[0]
    const group = this.groups.find(el => el.title === collection)

    this.setGroup({ group })
    this.clearSort()

    this.setCollection({ collection: this.group.title })
    this.setLimit({ limit: 3 })

    await this.initCatalog()
  },
  mounted () {
    this.$refs.body.innerHTML = this.page.body
  },
  methods: {
    ...mapActions('catalog', [
      'setCollection',
      'setLimit',
      'initCatalog',
      'setSelectedTags',
      'clearSort'
    ]),
    ...mapActions('app', [
      'setGroup'
    ])
  }
}
</script>

<style lang="scss" scoped>
::v-deep .card-notes {
  margin-left: 0px;
  margin-right: 0px;
}

::v-deep .card-project {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.page-type {
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: $color-accent;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-color: $color-accent;
    margin-right: 10px;
  }
}

.page-text--title {
  line-height: 90px;
}

.page {
  &-year {
    font-weight: bold;
    font-size: 60px;
    line-height: 150%;
    color: $color-light-gray;
  }

  &--social {
    ul {
      display: flex;
      align-items: center;

      li {
        &:not(:last-child) {
          padding-right: 10px;
        }

        a {
          border: solid 1px $color-accent;
          width: 30px;
          height: 30px;
          color: $color-accent;
          font-family: 'Roboto Mono';
          font-size: 18px;
          line-height: 30px;
          letter-spacing: 0.02em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
