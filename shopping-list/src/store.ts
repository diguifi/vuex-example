import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      title: 'My custom title',
      itens: [
        'Milk',
        'Cereal',
        'Plastic spoons',
      ],
  },
  mutations: {

  },
  actions: {

  },
});
