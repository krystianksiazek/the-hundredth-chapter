<template>
<div>
  <div class="bestBooksWrapper">
    <h1>Najlepiej oceniane książki</h1>
    <div class="filters">
      <label for="sb-step">Ocena powyżej: </label>
      <b-form-spinbutton
        class="rateSpinbutton"
        id="sb-small"
        v-model="rateFilterSelect"
        min="0"
        max="4.9"
        step="0.10">
      </b-form-spinbutton>
      <!-- <b-dropdown>
        <template #button-content>
          Ocena powyżej: <strong>{{ rateFilterSelect }}</strong>
        </template>
        <b-dropdown-item v-for="option in rateFilter" 
                        :key="option" 
                        :value="option"
                        @click="rateFilterSelect = option">
          {{ option }}
        </b-dropdown-item>
      </b-dropdown> -->
      <b-dropdown class="ml-2">
        <template #button-content>
          Sortowanie wg: <strong>{{ sortingSelect }}</strong>
        </template>
        <b-dropdown-item v-for="option in sorting" 
                        :key="option" 
                        :value="option"
                        @click="sortingSelect = option">
          {{ option }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <!-- <b-form-select v-model="rateFilterSelect" :options="rateFilter"></b-form-select> -->
    <div class="bestBooks">
      <div v-for="(book, index) in getBestBooksFilter" :key="book.id">
        <Product :book='book' :index='index'/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      rateFilterSelect: 4,
      sortingSelect: 'domyślnie',
      sorting: [
        'oceny rosnąco',
        'oceny malejąco',
        'tytyłu rosnąco',
        'tytyłu malejąco',
        'ceny rosnąco',
        'ceny malejąco',
        'domyślnie',
      ],
    };
  },
  computed: {
    ...mapGetters(['books', 'categories', 'favorites']),
    getBestBooksFilter() {
      const bestBooks = this.books.filter(book => book.rate > this.rateFilterSelect);
      switch (this.sortingSelect) {
        case 'oceny rosnąco':
          return bestBooks.sort((a, b) => a.rate < b.rate ? -1 : 1);
          break;
        case 'oceny malejąco':
          return bestBooks.sort((a, b) => a.rate < b.rate ? -1 : 1).reverse();
          break;
        case 'tytyłu rosnąco':
          return bestBooks.sort((a, b) => a.title < b.title ? -1 : 1);
          break;
        case 'tytyłu malejąco':
          return bestBooks.sort((a, b) => a.title < b.title ? -1 : 1).reverse();
          break;
        case 'ceny rosnąco':
          return bestBooks.sort((a, b) => a.price < b.price ? -1 : 1);
          break;
        case 'ceny malejąco':
          return bestBooks.sort((a, b) => a.price < b.price ? -1 : 1).reverse();
          break;
        case 'domyślnie':
          return bestBooks;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  h1 {
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
<style lang="scss">
//UNSCOPED CSS!
  .dropdown-menu {
    text-align: center;
    width: 100%;
  }
  .rateSpinbutton {
    width: 150px;
    position: relative;
  }
  .filters {
    display: flex;
    align-items: center;
  }
</style>