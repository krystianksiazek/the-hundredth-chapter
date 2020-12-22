/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../service/api';

Vue.use(Vuex);

const categories = {
  state: () => [
    {
      categories: [],
    },
  ],
};
const books = {
  state: () => [
    {
      books: [],
    },
  ],
};
const cart = {
  state: () => [
  ],
};
const favorites = {
  state: () => [
  ],
};
export default new Vuex.Store({
  mutations: {
    ADD_TO_CART(state, { id, amount }) {
      for (let i = 0; i < amount; i++) {
        store.state.d.push(store.state.c[id]);
      }
    },
    REMOVE_FROM_CART(state, id) {
      store.state.c[id].quantityInCart -= 1;
    },
    CLEAR_CART() {
      store.state.d = [];
    },
    ADD_TO_FAVORITE(state, id) {
      if (store.state.e.indexOf(store.state.c[id]) === -1) {
        store.state.e.push(store.state.c[id]);
      } else {
        store.state.e.splice(store.state.e.indexOf(store.state.c[id]), 1);
      }
    },
    SET_CATEGORIES(state, categories) {
      store.state.a = categories;
    },
    SET_BOOKS(state, books) {
      store.state.c = books;
    },
  },
  actions: {
    addToCart(context, { id, amount }) {
      context.commit('ADD_TO_CART', { id, amount });
    },
    removeFromCart(context, id) {
      context.commit('REMOVE_FROM_CART', id);
    },
    clearCart(context) {
      context.commit('CLEAR_CART');
    },
    addToFavorite(context, id) {
      context.commit('ADD_TO_FAVORITE', id);
    },
    async loadCategories(context) {
      const response = await Api().get();
      context.commit('SET_CATEGORIES', response.data.categories);
    },
    async loadBooks(context) {
      const response = await Api().get();
      context.commit('SET_BOOKS', response.data.books);
    },
  },
  getters: {
    categories() {
      return store.state.a;
    },
    books() {
      return store.state.c;
    },
    cart() {
      return store.state.d;
    },
    favorites() {
      return store.state.e;
    },
  },
});
const store = new Vuex.Store({
  modules: {
    a: categories,
    c: books,
    d: cart,
    e: favorites,
  },
});
