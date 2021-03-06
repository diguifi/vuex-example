import Vue from 'vue';
import Vuex from 'vuex';
import { promises } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      title: 'Shopping list',
      msgRemoveAll: '',
      itens: [
        'Milk',
        'Cereal',
        'Plastic spoons',
      ],
  },
  getters: {
      counterItens: (state) => {
        return state.itens.length;
      },
  },
  mutations: {
      ADD_ITEM: (state, item) => {
        state.itens.push(item);

        if (state.msgRemoveAll !== '') {
          state.msgRemoveAll = '';
        }
      },
      REMOVE_ITEM: (state, item) => {
        state.itens.splice(item, 1);
      },
      REMOVE_ALL: (state) => {
        state.itens = [];
        state.msgRemoveAll = 'They have been removed';
      },
  },
  actions: {
    removeItem: (context, item) => {
      context.commit('REMOVE_ITEM', item);
    },
    removeAll({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          resolve();
        }, 1500);
      });
    },
  },
});
