import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import cinema from './cinema'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name : "胡凌峰"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    city,
    cinema,
  }
})
