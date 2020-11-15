import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
  },
  getters: {},
  mutations: {
    setAccounts(state, accounts) {
      state.accounts = accounts
    },
  },
  actions: {
    setAccounts({ commit }, accounts) {
      commit('setAccounts', accounts)
    },
  },
  modules: {},
})
