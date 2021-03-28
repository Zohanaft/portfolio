import { Api } from '~/middleware/api'

export const state = () => ({
  items: [],
  offset: 0,
  limit: 10,
  step: 10,
  yearList: [
    '---',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
  ],
  year: '---',
  tags: new Map([
    ['[ Сайты ]', 'sites'],
    ['[ Маркетинг ]', 'marc'],
    ['[ Соц. сети ]', 'social'],
    ['[ Дизайн ]', 'design'],
    ['sites', '[ Сайты ]'],
    ['marc', '[ маркетинг ]'],
    ['social', '[ Соц. сети ]'],
    ['design', '[ Дизайн ]']
  ]),
  selectedNoteTags: []
})

export const mutations = {
  init (state, { items }) {
    state.items = items
  },

  setYear (state, year) {
    state.year = year
  },

  setTags (state, tags) {
    state.selectedNoteTags = tags
  },

  setLimit (state, limit) {
    state.limit = limit
  },

  setOffset (state, offset) {
    state.offset = offset
  },

  add (state, { items }) {
    state.items = state.items.concat(items)
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
      type: 'NOTE'
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
      type: 'NOTE'
    }
    if (state.selectedNoteTags.length > 0) {
      reqObj.tags__like = state.selectedNoteTags.toString()
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
          __offset: state.offset,
          type: 'NOTE'
        }).genUrl('pages')
      )
    commit('init', { items: items.data.data })
  },

  async updateItems ({ commit, state }, request) {
    let tagsQuery = ''
    if (state.selectedNoteTags.length > 0) {
      tagsQuery = '&tags__like=' + state.selectedNoteTags.map(el => state.tags.get(el)).join('&tags__like=')
    }
    const items = await this.$axios
      .get(
        request.genUrl('pages') + tagsQuery
      )
    commit('init', { items: items.data.data })
  },

  async addItems ({ commit, state }, request) {
    let query = ''
    if (state.selectedNoteTags.length > 0) {
      query = '&tags__like=' +
        state.selectedNoteTags.map(el => state.tags.get(el)).join('&tags__like=')
    }
    const items = await this.$axios
      .get(
        request.genUrl('pages') + query
      )
    commit('add', { items: items.data.data })
  }
}

export const getters = {
  getYear: state => state.year,
  getLimit: state => state.limit,
  getOffset: state => state.offset,
  getStep: state => state.step,
  tagList: state => state.tags
}
