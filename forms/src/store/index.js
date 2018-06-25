import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction ({ commit, state, rootState }) {
      console.log('buttonAction')
    }
  }
}

export default new Vuex.Store({
  modules: {
    Form
  }
})
