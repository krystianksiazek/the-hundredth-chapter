<template>
  <b-container>
    <div class="bestBooksWrapper">
      <h1>Niektóre najlepiej oceniane</h1>
      <h6>Książki z oceną co najmniej <strong>{{ rateFilterSelect }}</strong></h6>
      <div class="bestBooks">
        <div v-for="(book, index) in getBestBooks" :key="book.id">
          <Product :book='book' :index='index'/>
        </div>
      </div>
      <router-link :to="'/najlepiej-oceniane'">
        Wszystkie najlepiej oceniane
      </router-link>
    </div>
    <h1>Wszystkie książki</h1>
    <div class="allBooks">
      <div v-for="(book, index) in books" :key="book.id">
        <Product :book='book' :index='index'/>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      rateFilterSelect: (Math.random() * (4.90 - 4) + 4).toFixed(2),
    };
  },
  computed: {
    ...mapGetters(['books', 'categories', 'favorites']),
    getBestBooks() {
      return this.books.filter(book => book.rate > this.rateFilterSelect);
    },
  },
};
</script>

<style lang="scss" scoped>
  h1, h6 {
    text-align: center;
  }
  .bestBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .allBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
