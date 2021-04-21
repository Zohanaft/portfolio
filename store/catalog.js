import { Api } from '~/middleware/api'

export const state = () => ({
  collection: null,

  items: [],

  offset: 0,
  limit: 9,
  step: 9,

  years: ['---'],
  year: '---',

  tags: [],
  selectedTags: []
})

export const mutations = {
  INIT_CATALOG (state, { data }) {
    state.items = data
  },

  SET_COLLECTION (state, { data }) {
    state.collection = data
  },

  SET_TAGS (state, { data }) {
    state.tags = data
  },

  SET_SELECTED_TAGS (state, { data }) {
    state.selectedTags = data
  },

  SET_YEARS (state, { data }) {
    state.years.splice(1, state.years.length)
    state.years = state.years.concat(data)
  }
}

export const actions = {
  async initCatalog ({ state, commit }) {
    const pages = await this.$axios.get(
      new Api({
        __limit: state.limit,
        __offset: state.offset,
        collections__like: state.collection
      }).genUrl('pages')
    )
    const years = await this.$axios.get(
      new Api({
        __sort: 'year',
        collections__like: state.collection
      }).genUrl('pages')
    )

    commit('INIT_CATALOG', { data: pages.data.data })
    commit('SET_YEARS', { data: years.data.data.map(el => el.year) })
  },

  setCollection ({ commit }, { collection }) {
    commit('SET_COLLECTION', { data: collection })
  },

  setTags ({ commit }, { tags }) {
    commit('SET_TAGS', { data: tags })
  },

  setSelectedTags ({ commit }, { tags }) {
    commit('SET_SELECTED_TAGS', { data: tags })
  }

}
