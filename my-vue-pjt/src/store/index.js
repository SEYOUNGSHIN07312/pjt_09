import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    watchLists: [],
  },
  getters: {
  },
  mutations: {
    ADD_WATCH_LIST(state, title) {
      const watchList = {'title': title, 'done': false}
      state.watchLists.push(watchList)
    }
  },
  actions: {
    addWatchList(context, title) {
      context.commit('ADD_WATCH_LIST', title)
    }
  },
  modules: {
  }
})
