<template>
  <b-container>
    <div class="bestBooksWrapper">
      <h1>Najlepiej oceniane książki</h1>
      <Filters 
        :rateFilterSelectSend = 'rateFilterSelect'
        :sortingSelectSend = 'sortingSelect'
        @update-sorting="updateSorting"
        @update-rate="updateRate" />
      </div>
      <!-- <b-form-select v-model="rateFilterSelect" :options="rateFilter"></b-form-select> -->
      <div class="overflow-auto">
        <h4 v-if="getBestBooksFilter.length === 0">Brak wyników dla tego ustawienia filtrów</h4>
        <div id="bestBooks" class="bestBooks">
          <div v-for="(book, index) in itemsForList" :key="book.id">
            <Product :book='book' :index='index'/>
          </div>
        </div>
      </div>
      <div class="pagination">
        <b-pagination
            v-model="currentPage"
            :total-rows="getBestBooksFilter.length"
            :per-page="perPage"
            aria-controls="bestBooks"
            first-number
            last-number>
        </b-pagination>
      </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'rate',
  data() {
    return {
      perPage: 12,
      currentPage: 1,
      rateFilterSelect: 4,
      sortingSelect: 'oceny malejąco',
    };
  },
  methods: {
    updateSorting (sortingSelectRecived) {
      this.sortingSelect = sortingSelectRecived;
    },
    updateRate (rateFilterSelectRecived) {
      this.rateFilterSelect = rateFilterSelectRecived;
    }
  },
  computed: {
    ...mapGetters(['books', 'categories', 'favorites']),
    getBestBooksFilter() {
      const bestBooks = this.books.filter(book => book.rate >= this.rateFilterSelect);
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
    itemsForList() {
      return this.getBestBooksFilter.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
  .collapsed > .when-open,
  .not-collapsed > .when-closed {
    display: none;
  }
  h1 {
    text-align: center;
  }
  .bestBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pagination {
    display: flex;
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