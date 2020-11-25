import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
    {
      id: 0,
      title: "Harry Potter i Komnata Tajemnic ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308636/532903-352x500.jpg",
      price: 22.13,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 4.75,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 1,
      title: "Harry Potter i więzień Azkabanu",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308637/532904-352x500.jpg",
      price: 22.30,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 4.87,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 2,
      title: "Harry Potter i Czara Ognia ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308633/494236-352x500.jpg",
      price: 20.43,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 4.50,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 3,
      title: "Harry Potter i Zakon Feniksa",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308635/532902-352x500.jpg",
      price: 25.11,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 4.63,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 4,
      title: "Harry Potter i Książę Półkrwi",
      cover: "https://cdn-lubimyczytac.pl/upload/books/308000/308638/494222-352x500.jpg",
      price: 19.79,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 4.58,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 5,
      title: "Harry Potter i Insygnia Śmierci ",
      cover: "https://cdn-lubimyczytac.pl/upload/books/310000/310990/494239-352x500.jpg",
      price: 25.11,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 3.95,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
  ],
},
  mutations: {
    ADD_TO_CART(state, { id, amount }) {
      state.products[id].quantityInCart += amount;
    },
    REMOVE_FROM_CART(state, id) {
      state.products[id].quantityInCart -= 1;
    },
    ADD_TO_FAVORITE(state, id) {
      state.products[id].favorite = !state.products[id].favorite;
    },
  },
  actions: {
    addToCart(context, { id, amount }) {
      context.commit("ADD_TO_CART", { id, amount });
    },
    removeFromCart(context, id) {
      context.commit("REMOVE_FROM_CART", id);
    },
    addToFavorite(context, id) {
      context.commit("ADD_TO_FAVORITE", id);
    },
  },
  getters: {
    products: (state) => state.products,
  },
  modules: {
  },
});
