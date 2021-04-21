import { Api } from '~/middleware/api'

export const state = () => ({
  items: [],

  offset: 0,
  limit: 10,
  step: 10,

  yearList: ['---'],
  year: '---',

  tags: [],

  selectedProjectTags: [],
  page: null
})

export const mutations = {
  init (state, { items }) {
    state.items = items
  },

  setYear (state, year) {
    state.year = year
  },

  setTags (state, tags) {
    state.selectedProjectTags = tags
  },

  setLimit (state, limit) {
    state.limit = limit
  },

  setOffset (state, offset) {
    state.offset = offset
  },

  add (state, { items }) {
    state.items = state.items.concat(items)
  },

  customQuery (state, { items }) {
    state.items = items
  }
}

export const actions = {

  setYear ({ commit, dispatch }, year) {
    commit('setYear', year)
    dispatch('resetApiState')
  },

  setTags ({ commit, dispatch }, tags) {
    commit('setTags', tags)
    dispatch('resetApiState')
  },

  setLimit ({ commit, dispatch }, limit) {
    commit('setLimit', limit)
    dispatch('addApiState')
  },

  setOffset ({ commit, dispatch }, offset) {
    commit('setOffset', offset)
    dispatch('addApiState')
  },

  resetApiState ({ state, dispatch }) {
    state.offset = 0
    state.limit = 10

    const reqObj = {
      __limit: state.limit,
      __offset: state.offset,
      type: 'PROJECT'
    }
    if (state.year !== '---') {
      reqObj.year = state.year
    }

    dispatch('updateItems', new Api(reqObj))
  },

  addApiState ({ state, dispatch }) {
    const reqObj = {
      __limit: state.limit,
      __offset: state.offset,
      type: 'PROJECT'
    }
    if (state.selectedProjectTags.length > 0) {
      reqObj.tags__like = state.selectedProjectTags.toString()
    }
    if (state.year !== '---') {
      reqObj.year = state.year
    }
    dispatch('addItems', new Api(reqObj))
  },

  async init ({ commit, state }) {
    const items = await this.$axios
      .get(
        new Api({
          __limit: state.limit,
          __offset: state.offset
        }).genUrl('pages')
      )
    commit('init', { items: items.data.data })
  },

  async updateItems ({ commit, state }, request) {
    let tagsQuery = ''
    if (state.selectedProjectTags.length > 0) {
      tagsQuery = '&tags__like=' + state.selectedProjectTags.map(el => state.tags.get(el)).join('&tags__like=')
    }
    const items = await this.$axios
      .get(
        request.genUrl('pages') + tagsQuery
      )
    commit('init', { items: items.data.data })
  },

  async addItems ({ commit, state }, request) {
    let query = ''
    if (state.selectedProjectTags.length > 0) {
      query = '&tags__like=' +
        state.selectedProjectTags.map(el => state.tags.get(el)).join('&tags__like=')
    }
    const items = await this.$axios
      .get(
        request.genUrl('pages') + query
      )
    commit('add', { items: items.data.data })
  },

  async customQuery ({ commit }, { reqObj }) {
    const el = await this.$axios
      .get(
        new Api(
          reqObj
        ).genUrl('pages')
      )
    commit('customQuery', { items: el.data.data })
  }
}

export const getters = {
  getYear: state => state.year,
  getLimit: state => state.limit,
  getOffset: state => state.offset,
  getStep: state => state.step
}