import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
    {
      id: 1,
      title: "Harry Potter i Komnata Tajemnic ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308636/532903-352x500.jpg",
      price: 22.13,
      flag: "new",
      genere: "fantasy",
      rate: "8,5",
      quantityInCart: 0
    },
    {
      id: 2,
      title: "Harry Potter i więzień Azkabanu",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308637/532904-352x500.jpg",
      price: 22.30,
      flag: "new",
      genere: "fantasy",
      rate: "8,3",
      quantityInCart: 0
    },
    {
      id: 3,
      title: "Harry Potter i Czara Ognia ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308633/494236-352x500.jpg",
      price: 20.43,
      flag: "new",
      genere: "fantasy",
      rate: "9,3",
      quantityInCart: 0
    },
    {
      id: 4,
      title: "Harry Potter i Zakon Feniksa",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308635/532902-352x500.jpg",
      price: 25.11,
      flag: "new",
      genere: "fantasy",
      rate: "7,3",
      quantityInCart: 0
    },
    {
      id: 5,
      title: "Harry Potter i Książę Półkrwi",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308638/494222-352x500.jpg",
      price: 19.79,
      flag: "new",
      genere: "fantasy",
      rate: "8,9",
      quantityInCart: 0
    },
    {
      id: 6,
      title: "Harry Potter i Insygnia Śmierci ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/310000/310990/494239-352x500.jpg",
      price: 25.11,
      flag: "new",
      genere: "fantasy",
      rate: "8,1",
      quantityInCart: 0
    },
  ],
  StoreCart: [],
  duplicatesInCart: 0
},
  mutations: {
    ADD_TO_CART(state, { id, amount }) {
      // for(let i = 1; i<=amount; i++) {
        state.products[id-1].quantityInCart += amount;
        // state.StoreCart.push(id);
      // }
    },
    REMOVE_FROM_CART(state, { index, id }) {
      state.StoreCart.splice(index, 1);
      state.products[id-1].quantityInCart -= 1;
    },
    REMOVE_ALL_FROM_CART(state) {
      state.StoreCart.splice(0, state.StoreCart.length);
    },
  },
  actions: {
    addToCart(context, { id, amount }) {
      context.commit("ADD_TO_CART", { id, amount });
    },
    removeFromCart(context, { index, id }) {
      context.commit("REMOVE_FROM_CART", { index, id });
    },
    removeAllFromCart(context) {
      context.commit("REMOVE_ALL_FROM_CART");
    },
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
    duplicatesInCart: (state) => state.duplicatesInCart,
  },
  modules: {
  },
});
