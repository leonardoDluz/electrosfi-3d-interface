import Vue from 'vue'
import Vuex from 'vuex'

import simulator from './module-simulator'
import simulator3d from  './module-simulator-3d'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    simulator,
    simulator3d
  }
})
