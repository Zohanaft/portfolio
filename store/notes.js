import { Api } from '~/middleware/api'

export const state = () => ({
  collection: null,

  items: [],

  offset: 0,
  limit: 3,

  years: [''],
  year: '',

  tags: null,
  selectedTags: [],

  api: {}
})

export const mutations = {
  NB_INIT_CATALOG (state, { data }) {
    state.items = data
  },

  NB_SET_COLLECTION (state, { data }) {
    state.collection = data
  },

  NB_SET_TAGS (state, { data }) {
    state.tags = data
  },

  NB_SET_SELECTED_TAGS (state, { data }) {
    state.selectedTags = data
  },

  NB_SET_LIMIT (state, { data }) {
    state.limit = data
  },

  NB_SET_OFFSET (state, { data }) {
    state.offset = data
  },

  NB_UPDATE_ITEMS (state, { items }) {
    state.items = items
  },

  NB_UPDATE_SORT (state) {
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
  async noteBlockInit ({ state, commit }) {
    commit('NB_UPDATE_SORT')

    const pages = await this.$axios.get(
      new Api(state.api).genUrl('pages')
    )

    commit('NB_INIT_CATALOG', { data: pages.data.data })
  },

  noteBlockSetCollection ({ commit }, { collection }) {
    commit('NB_SET_COLLECTION', { data: collection })
  },

  noteBlockSetTags ({ commit }, { tags }) {
    commit('NB_SET_TAGS', { data: tags })
  },

  noteBlockSetSelectedTags ({ commit, dispatch }, { tags }) {
    commit('NB_SET_OFFSET', { data: 0 })
    commit('NB_SET_SELECTED_TAGS', { data: tags })
    commit('NB_UPDATE_SORT')
    dispatch('noteBlockUpdateItems')
  },

  noteBlockUpdateItems ({ commit, state }) {
    this.$axios.get(new Api(state.api).genUrl('pages')
    ).then((response) => {
      const items = response.data.data
      commit('NB_UPDATE_ITEMS', { items })
    }).catch((err) => {
      const er = err.message
      Error('NB_UPDATE REQUEST ERROR', er)
    })
  },

  noteBlockSetOffset ({ commit }, { offset }) {
    commit('NB_SET_OFFSET', { data: offset })
    commit('NB_UPDATE_SORT')
  },

  noteBlockSetLimit ({ commit }, { limit }) {
    commit('NB_SET_LIMIT', { data: limit })
    commit('NB_UPDATE_SORT')
  }
}
