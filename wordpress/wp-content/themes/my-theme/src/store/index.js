import { createStore } from 'vuex'

import { BasketModule } from '@/store/BasketModule.js'
import { KatalogModule } from '@/store/KatalogModule.js'
import { UserModule } from '@/store/UserModule.js'

export default createStore({
  state: () => ({
    page: {},
    app: {},
  }),
  getters: {

  },
  mutations: {

    setPage(state, newValue) {
      state.page = newValue
    },
    setApp(state, newValue) {
      state.app = newValue
    }
  },
  actions: {
  },
  modules: {
    basket: BasketModule,
    katalog: KatalogModule,
    user: UserModule
  }
})