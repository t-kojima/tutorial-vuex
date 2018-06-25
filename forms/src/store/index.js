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
      commit('setStepCount', null, { root: true })
    }
  }
}

const Head = {
  state: {
    title: ['感想を入力', '確認画面', '送信完了']
  },
  mutation: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount]
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0
  },
  mutations: {
    setStepCount (state) {
      console.log('root set Step Count')
      ++state.stepCount
    }
  },
  modules: {
    Form,
    Head
  }
})
