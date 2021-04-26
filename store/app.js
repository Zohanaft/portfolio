import { Api } from '~/middleware/api'

export const state = () => ({
  groups: null,
  group: null,
  uploaded: false
})

export const mutations = {
  APP_INIT (state, { data }) {
    state.groups = data
  },

  SET_GROUP (state, { data }) {
    if (typeof (data) === 'string') {
      state.group = state.groups.find(el => el.id === Number(data))
    } else {
      state.group = data
    }
  },

  APP_STATE_LOADED (state) {
    state.uploaded = true
  }
}

export const actions = {
  async appInit ({ commit }) {
    const groups = await this.$axios.get(
      new Api().genUrl('pages/groups')
    )

    const query = this.$router.history.current.params
    let group = null

    if (query.catalog) {
      group = groups.data.data.find(el => String(el.id) === String(query.catalog))
    }

    if (!group) {
      group = groups.data.data[0]
    }

    commit('APP_INIT', { data: groups.data.data })
    commit('SET_GROUP', { data: group })
    commit('APP_STATE_LOADED')
  },

  setGroup ({ commit }, { group }) {
    commit('SET_GROUP', { data: group })
  }
}
