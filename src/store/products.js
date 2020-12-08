import Vue from 'vue';
import Vuex from 'vuex';
import Api from "../service/api.js";

Vue.use(Vuex);

const categories = {
  state: () => [
    {
      categories: []
    }
  ]
}
const products = {
  state: () => [
    {
      id: 0,
      title: "Harry Potter i Komnata Tajemnic ",
      author: "J.K. Rowling",
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
      author: "J.K. Rowling",
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
      author: "J.K. Rowling",
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
      author: "J.K. Rowling",
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
      author: "J.K. Rowling",
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
      title: "Harry Potter i Insygnia Śmierci",
      author: "J.K. Rowling",
      cover: "https://cdn-lubimyczytac.pl/upload/books/310000/310990/494239-352x500.jpg",
      price: 25.11,
      flag: "Nowa",
      genere: "Fantastyka",
      rate: 3.95,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>"
    },
    {
      id: 6,
      title: "Finansowa Forteca",
      author: "Marcin Iwuć",
      cover: "https://cdn-lubimyczytac.pl/upload/books/4940000/4940535/844684-352x500.jpg",
      price: 99.99,
      flag: "Nowa",
      genere: "Biznes",
      rate: 4.95,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Chcesz inwestować, ale nie wiesz, od czego zacząć? Czujesz opór przed nudnymi książkami? Masz dość akademickich tomiszczy, naszpikowanych trudnymi zagadnieniami, z których nic nie wynika? Zamiast próbować „uczyć się inwestować”, zbuduj krok po kroku Finansową Fortecę, która skutecznie ochroni majątek Twój i Twojej rodziny!</p><p>Finansowa Forteca to praktyczny przewodnik, który wyprowadzi Cię z inwestycyjnych krzaków i da zestaw umiejętności potrzebnych do tego, żeby rozpocząć swoją przygodę z inwestowaniem na poważnie.</p>"
    },
    {
      id: 7,
      title: "Inteligentny inwestor",
      author: "Benjamin Graham",
      cover: "https://cdn-lubimyczytac.pl/upload/books/12000/12037/352x500.jpg",
      price: 45.30,
      flag: "Nowa",
      genere: "Biznes",
      rate: 4.86,
      quantityInCart: 0,
      favorite: false,
      description: "<p>Klasyczny tekst z adnotacjami uwspółcześniającymi ponadczasową wiedzę Grahama o inwestowaniu.</p><p>Najznakomitszy doradca inwestycyjny dwudziestego wieku, Benjamin Graham, uczył i inspirował ludzi na całym świecie. Jego filozofia „inwestowania wartościowego” – które chroni inwestorów przed podstawowymi błędami i uczy ich stosowania długofalowych strategii – od chwili pierwszego wydania uczyniła z Inteligentnego inwestora prawdziwą biblię giełdy papierów wartościowych.</p><p>Rozwój giełdy przez wiele lat potwierdzał mądrość strategii Grahama. Wydanie poprawione zachowuje integralność oryginalnego jego tekstu, a jednocześnie dodaje aktualne komentarze uznanego dziennikarza finansowego, Jasona Zweiga. Wnoszą spojrzenie z punktu widzenia współczesnego rynku, ukazują zbieżności pomiędzy przykładami podawanymi przez Grahama a nagłówkami obecnie wydawanych gazet finansowych. Pozwalają czytelnikom głębiej zrozumieć, w jaki sposób stosować reguły Grahama.</p><p>Obecne wydanie Inteligentnego inwestora to najważniejsza książka, jaką kiedykolwiek przeczytasz o osiąganiu zamierzonych celów finansowych. Jasno przedstawia podstawy, niezwykle skutecznego i popularnego podejścia do inwestowania.</p>"
    },
  ]
}
export default new Vuex.Store({
  mutations: {
    ADD_TO_CART(state, { id, amount }) {
      store.state.b[id].quantityInCart += amount;
    },
    REMOVE_FROM_CART(state, id) {
      store.state.b[id].quantityInCart -= 1;
    },
    ADD_TO_FAVORITE(state, id) {
      store.state.b[id].favorite = !store.state.b[id].favorite;
    },
    SET_CATEGORIES(state, categories) {
      store.state.a = categories;
    }
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
    async loadCategories({commit}) {
      let response = await Api().get('/categories');
      commit('SET_CATEGORIES', response.data);
    }
  },
  getters: {
    products() {
      return store.state.b;
    },
    getCategories() {
      return store.state.a;
    }
  },
})
const store = new Vuex.Store({
  modules: {
    a: categories,
    b: products,
  }
});
