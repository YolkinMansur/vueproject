import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './catalog.js'
import cart from './cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog, cart
  }
})