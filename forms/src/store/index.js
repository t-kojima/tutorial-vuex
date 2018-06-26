import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    button: ['確認', '送信'],
    component: ['TextareaComp', 'StringComp']
  },
  mutations: {},
  actions: {
    buttonAction ({ commit, state, rootState }) {
      console.log('buttonAction')
      if (rootState.errorFlag) {
        commit('setStepCount', null, { root: true })
      }
    }
  },
  getters: {
    getButton (state, getters, rootState) {
      return state.button[rootState.stepCount]
    },
    getComponent (state, getters, rootState) {
      return state.component[rootState.stepCount]
    }
  }
}

const String = {
  namespaced: true,
  getters: {
    getString (state, getters, rootState) {
      return rootState.impression
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

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: '入力は必須必須'
  },
  getters: {
    getError (state, getters, rootState) {
      if (rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: '',
    errorFlag: false
  },
  mutations: {
    setStepCount (state) {
      console.log('root set Step Count')
      ++state.stepCount
    },
    updateImpression (state, value) {
      state.impression = value
      state.errorFlag = !!state.impression
    }
  },
  modules: {
    Form,
    Head,
    Textarea,
    String
  }
})
