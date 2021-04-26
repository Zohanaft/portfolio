import { Api } from '~/middleware/api'

export const state = () => ({
  collection: null,

  items: [],

  offset: 0,
  limit: 9,
  step: 9,

  years: [''],
  year: '',

  tags: null,
  selectedTags: [],

  api: {}
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

  SET_YEAR (state, { data }) {
    state.year = data
  },

  SET_YEARS (state, { data }) {
    state.years.splice(1, state.years.length)
    state.years = state.years.concat(data)
  },

  SET_LIMIT (state, { data }) {
    state.limit = data
  },

  SET_OFFSET (state, { data }) {
    state.offset = data
  },

  CLEAR_SORT (state) {
    state.offset = 0
    state.limit = 9
    state.step = 9
    state.year = ''
    state.selectedTags = []
  },

  NEXT_STEP (state) {
    state.offset += state.step
  },

  ADD_ITEMS (state, { items }) {
    state.items = state.items.concat(items)
  },

  UPDATE_ITEMS (state, { items }) {
    state.items = items
  },

  UPDATE_SORT (state) {
    state.api = {
      __limit: state.limit,
      __offset: state.offset,
      collections__like: state.collection,
      year__like: state.year,
      tags__like: state.selectedTags.toString()
    }
  }
}

export const actions = {
  async initCatalog ({ state, commit }) {
    commit('UPDATE_SORT')

    const pages = await this.$axios.get(
      new Api(state.api).genUrl('pages')
    )

    const years = await this.$axios.get(
      new Api({
        __sort: 'year',
        __unique: true,
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

  setSelectedTags ({ commit, dispatch }, { tags }) {
    commit('SET_OFFSET', { data: 0 })
    commit('SET_SELECTED_TAGS', { data: tags })
    commit('UPDATE_SORT')
    dispatch('updateItems')
  },

  setYear ({ commit, dispatch }, { year }) {
    commit('SET_OFFSET', { data: 0 })
    commit('SET_YEAR', { data: year })
    commit('UPDATE_SORT')
    dispatch('updateItems')
  },

  updateItems ({ commit, state }) {
    this.$axios.get(new Api(state.api).genUrl('pages')
    ).then((response) => {
      const items = response.data.data
      commit('UPDATE_ITEMS', { items })
    }).catch((err) => {
      const er = err.message
      Error('UPDATE REQUEST ERROR', er)
    })
  },

  addItems ({ commit, state }) {
    commit('NEXT_STEP')
    commit('UPDATE_SORT')
    this.$axios.get(new Api(state.api).genUrl('pages')).then((response) => {
      const items = response.data.data
      commit('ADD_ITEMS', { items })
    }).catch((err) => {
      const er = err.message
      Error('ADD ITEMS REQUEST ERROR', er)
    })
  },

  clearSort ({ commit }) {
    commit('CLEAR_SORT')
  },

  setOffset ({ commit }, { offset }) {
    commit('SET_OFFSET', { data: offset })
    commit('UPDATE_SORT')
  },

  setLimit ({ commit }, { limit }) {
    commit('SET_LIMIT', { data: limit })
    commit('UPDATE_SORT')
  }
}
