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
const products = {
  state: () => [
    {
      id: 0,
      title: 'Harry Potter i Komnata Tajemnic',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/308000/308636/532903-352x500.jpg',
      price: 22.13,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 4.75,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 1,
      title: 'Harry Potter i więzień Azkabanu',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/308000/308637/532904-352x500.jpg',
      price: 22.30,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 4.87,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 2,
      title: 'Harry Potter i Czara Ognia ',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/308000/308633/494236-352x500.jpg',
      price: 20.43,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 4.50,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 3,
      title: 'Harry Potter i Zakon Feniksa',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/308000/308635/532902-352x500.jpg',
      price: 25.11,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 4.63,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 4,
      title: 'Harry Potter i Książę Półkrwi',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/308000/308638/494222-352x500.jpg',
      price: 19.79,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 4.58,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 5,
      title: 'Harry Potter i Insygnia Śmierci',
      author: 'J.K. Rowling',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/310000/310990/494239-352x500.jpg',
      price: 25.11,
      flag: 'Nowa',
      genere: 'Fantastyka',
      rate: 3.95,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń.</p><p>Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?</p>',
    },
    {
      id: 6,
      title: 'Finansowa Forteca',
      author: 'Marcin Iwuć',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/4940000/4940535/844684-352x500.jpg',
      price: 99.99,
      flag: 'Nowa',
      genere: 'Biznes',
      rate: 4.95,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Chcesz inwestować, ale nie wiesz, od czego zacząć? Czujesz opór przed nudnymi książkami? Masz dość akademickich tomiszczy, naszpikowanych trudnymi zagadnieniami, z których nic nie wynika? Zamiast próbować „uczyć się inwestować”, zbuduj krok po kroku Finansową Fortecę, która skutecznie ochroni majątek Twój i Twojej rodziny!</p><p>Finansowa Forteca to praktyczny przewodnik, który wyprowadzi Cię z inwestycyjnych krzaków i da zestaw umiejętności potrzebnych do tego, żeby rozpocząć swoją przygodę z inwestowaniem na poważnie.</p>',
    },
    {
      id: 7,
      title: 'Inteligentny inwestor',
      author: 'Benjamin Graham',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/12000/12037/352x500.jpg',
      price: 45.30,
      flag: 'Nowa',
      genere: 'Biznes',
      rate: 4.86,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Klasyczny tekst z adnotacjami uwspółcześniającymi ponadczasową wiedzę Grahama o inwestowaniu.</p><p>Najznakomitszy doradca inwestycyjny dwudziestego wieku, Benjamin Graham, uczył i inspirował ludzi na całym świecie. Jego filozofia „inwestowania wartościowego” – które chroni inwestorów przed podstawowymi błędami i uczy ich stosowania długofalowych strategii – od chwili pierwszego wydania uczyniła z Inteligentnego inwestora prawdziwą biblię giełdy papierów wartościowych.</p><p>Rozwój giełdy przez wiele lat potwierdzał mądrość strategii Grahama. Wydanie poprawione zachowuje integralność oryginalnego jego tekstu, a jednocześnie dodaje aktualne komentarze uznanego dziennikarza finansowego, Jasona Zweiga. Wnoszą spojrzenie z punktu widzenia współczesnego rynku, ukazują zbieżności pomiędzy przykładami podawanymi przez Grahama a nagłówkami obecnie wydawanych gazet finansowych. Pozwalają czytelnikom głębiej zrozumieć, w jaki sposób stosować reguły Grahama.</p><p>Obecne wydanie Inteligentnego inwestora to najważniejsza książka, jaką kiedykolwiek przeczytasz o osiąganiu zamierzonych celów finansowych. Jasno przedstawia podstawy, niezwykle skutecznego i popularnego podejścia do inwestowania.</p>',
    },
    {
      id: 8,
      title: 'Sapiens. Od zwierząt do bogów',
      author: 'Yuval Noah Harari',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/4867000/4867395/698542-352x500.jpg',
      price: 31.83,
      flag: 'Nowa',
      genere: 'Popularnonaukowa',
      rate: 4.23,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Światowy hit. Książka, dzięki której rozpoczęła się międzynarodowa kariera Harariego. Całościowa historia człowieka – od ukrywania się w jaskiniach do podróży na Księżyc i inżynierii genetycznej.</p><p>Sto tysięcy lat temu ludzie z trudem walczyli o przetrwanie, cały czas żyjąc w strachu przed wszechmocną naturą i rywalizującymi z nimi zwierzętami. Dzisiaj w XXI wieku opanowaliśmy cały świat i to nasz niekontrolowany rozwój jest zagrożeniem dla planety i zwierząt. Homo sapiens uczy się właśnie przekształcać swoje geny i chciałby stać się podobny do własnych wyobrażeń o bogach. „Przesiedliśmy się z dłubanek na żaglowce, z żaglowców na parostatki, z parostatków na promy kosmiczne, lecz nikt nie wie, dokąd zmierzamy.Dysponujemy niespotykaną dotąd potęgą, ale nie mamy pojęcia, co z nią zrobić”.</p>',
    },
    {
      id: 9,
      title: 'Jak zdobyć przyjaciół i zjednać sobie ludzi',
      author: 'Dale Carnegie',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/50000/50522/352x500.jpg',
      price: 17.50,
      flag: 'Nowa',
      genere: 'Poradniki',
      rate: 3.95,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Ta książka ułatwi ci swobodne poruszanie się w biznesie. Przyda się w życiu rodzinnym i towarzyskim. Każda rada w niej zawarta wydaje nam się oczywista. Wiedza o życiu, człowiecza mądrość tkwi w naszej podświadomości. Sztuką jest wydobycie tej mądrości i zastosowanie w działaniu. </p>',
    },
    {
      id: 10,
      title: 'Człowiek w poszukiwaniu sensu',
      author: 'Viktor E. Frankl',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/4924000/4924482/809224-352x500.jpg',
      price: 3.78,
      flag: 'Nowa',
      genere: 'Biografia, autobiografia, pamiętnik',
      rate: 5,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Człowiek w poszukiwaniu sensu Viktora E. Frankla to jedna z najbardziej wpływowych książek w literaturze psychiatrycznej od czasu Freuda. Zaczyna się od długiego, suchego i głęboko poruszającego osobistego eseju o pięcioletnim pobycie Frankla w Auschwitz i innych obozach koncentracyjnych i jego wysiłkach w tym czasie, by znaleźć powody do życia. Druga część książki opisuje metody psychoterapeutyczne, które Frankl opracował jako pierwszy na bazie swoich doświadczeń z obozów. Freud uważał, że życiem człowieka rządzi popęd seksualny i pokusy. Frankl z kolei wierzy, że najgłębszym popędem człowieka jest poszukiwanie sensu i celu. Logoterapia Frankla zatem bardziej przystaje do zachodnich religii niż freudeowskiej psychoterapii.</p>',
    },
    {
      id: 11,
      title: 'Czarny łabędź. Jak nieprzewidywalne zdarzenia rządzą naszym życiem',
      author: 'Nassim Nicholas Taleb',
      cover: 'https://cdn-lubimyczytac.pl/upload/books/4921000/4921407/802240-352x500.jpg',
      price: 32.42,
      flag: 'Nowa',
      genere: 'Popularnonaukowa',
      rate: 4.85,
      quantityInCart: 0,
      favorite: false,
      description: '<p>Bestsellerowa książka Nassima Nicholasa Taleba analizuje zjawisko Czarnych Łabędzi: niespodziewanych wydarzeń, które spadają na nas nagle i odciskają ogromne piętno na naszym życiu. Czy to będzie wybuch I wojny światowej, dojście Hitlera do władzy, zamachy z 11 września 2001 roku w Nowym Jorku, kryzys finansowy 2008 roku czy aktualna pandemia koronawirusa Covid-19, wydarzenia te całkowicie zmieniają podstawy naszego życia. Ich wpływ na los świata jest ogromny, ale są niemożliwe do przewidzenia, dopiero po ich wystąpieniu staramy się je zracjonalizować.</p>',
    },
  ],
};
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
    },
  },
  actions: {
    addToCart(context, { id, amount }) {
      context.commit('ADD_TO_CART', { id, amount });
    },
    removeFromCart(context, id) {
      context.commit('REMOVE_FROM_CART', id);
    },
    addToFavorite(context, id) {
      context.commit('ADD_TO_FAVORITE', id);
    },
    async loadCategories({ commit }) {
      const response = await Api().get('/categories');
      commit('SET_CATEGORIES', response.data);
    },
  },
  getters: {
    products() {
      return store.state.b;
    },
    categories() {
      return store.state.a;
    },
  },
});
const store = new Vuex.Store({
  modules: {
    a: categories,
    b: products,
  },
});
