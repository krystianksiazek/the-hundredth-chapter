<template>
  <b-container>
    <h3 v-if="!componentLoading">{{ prefix }} <span v-if="suffix != null"> => {{ suffix }} </span> ({{filterProducts.length}})</h3>
    <h4 v-if="componentLoading">Ładowanie...</h4>
    <h4 v-if="!componentLoading && filterProducts.length === 0">Brak książek tej katergorii</h4>
    <div v-if="!componentLoading && filterProducts.length > 0" class="byCategoryBooksWrapper">
      <Filters 
        :rateFilterSelectSend = 'rateFilterSelect'
        :sortingSelectSend = 'sortingSelect'
        @update-sorting="updateSorting"
        @update-rate="updateRate" />
      <!-- <b-form-select v-model="rateFilterSelect" :options="rateFilter"></b-form-select> -->
      <h4 v-if="!componentLoading && sortBooks.length === 0">Brak wyników dla tego ustawienia filtrów</h4>
      <div class="overflow-auto">
        <div id="byCategoryBooks" class="byCategoryBooks">
          <div v-for="(book, index) in itemsForList" :key="book.id">
            <Product :book='book' :index='index'/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!componentLoading && filterProducts.length > 0" class="pagination">
        <b-pagination
            v-model="currentPage"
            :total-rows="sortBooks.length"
            :per-page="perPage"
            aria-controls="byCategoryBooks"
            first-number
            last-number>
        </b-pagination>
      </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'category',
  data() {
    return {
      basketValue: 1,
      hover: null,
      componentLoading: true,
      prefix: '',
      suffix: '',
      perPage: 12,
      currentPage: 1,
      rateFilterSelect: 0,
      sortingSelect: 'tytyłu rosnąco',
    };
  },
  props: {
    myprop: String,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.category();
  },
  computed: {
    ...mapGetters(['books', 'categories']),
    filterProducts() {
      const productReturn = [];
      if (this.suffix === null) {
        for (let i = 0; i < this.categories[this.$route.params.id[0] - 1].subCat.length; i++) {
          for (let j = 0; j < this.books.length; j++) {
            if (((this.categories[this.$route.params.id[0] - 1].subCat[i]).toLowerCase()).includes((this.books[j].genere).toLowerCase())) {
              if (this.categories[this.$route.params.id[0] - 1].subCat[i].includes(' ') && !this.categories[this.$route.params.id[0] - 1].subCat[i].includes(',')) {
                if (((this.categories[this.$route.params.id[0] - 1].subCat[i]).toLowerCase()) === ((this.books[j].genere).toLowerCase())) {
                  productReturn[j] = this.books[j];
                }
              } else {
                productReturn[j] = this.books[j];
              }
            }
          }
        }
      } else {
        for (let i = 0; i < this.books.length; i++) {
          if (((this.suffix).toLowerCase()).includes((this.books[i].genere || ' ').toLowerCase())) {
            if (((this.suffix).toLowerCase()).includes(' ') && !((this.suffix).toLowerCase()).includes(',')) {
              if ((this.categories[this.$route.params.id[0] - 1].subCat[i]).toLowerCase() === ((this.books[i].genere).toLowerCase())) {
                productReturn[i] = this.books[i];
              }
            } else {
              productReturn[i] = this.books[i];
            }
          }
        }
      }
      this.rateFilterSelect = Math.floor(Math.min(...productReturn.map(book => book.rate).flat())* 1) / 1;
      return productReturn.flat();
    },
    sortBooks() {
      const bestBooks = this.filterProducts.filter(book => book.rate >= this.rateFilterSelect);
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
      return this.sortBooks.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage);
    },
    
  },
  methods: {
    category() {
      let subCategory = null;
      let link = this.$route.params.id + '';
      const split = link.split('.').join('');
      const category = split[0] - 1;
      if (split[2] === undefined) {
        subCategory = split[1] - 1;
      } else {
        subCategory = (split[1] + split[2]) - 1;
      }
      if (this.categories[category] != undefined) {
        setInterval(() => {
        if (this.categories.length > 1) {
          this.prefix = this.categories[category].cat;
          if (split[1] > 0) {
            this.suffix = this.categories[category].subCat[subCategory];
          } else {
            this.suffix = null;
          }
          this.componentLoading = false;
        }
      }, 100);
      }
      else this.$router.push({ path: '/505' });
    },
    addToCart(id, amount, index) {
      this.$store.dispatch('addToCart', { id, amount });
      this.basketValue[index] = 1;
      this.$forceUpdate();
    },
    favoriteToggle(id) {
      this.$store.dispatch('addToFavorite', id);
    },
    getIndex(id) {
      for (let i = 0; i < this.categories.length; i++) {
        for (let j = 0; j < this.categories[i].subCat.length; j++) {
          if (this.categories[i].subCat[j] === id) {
            return `${i + 1}.${j + 1}`;
          }
        }
      }
    },
    updateSorting (sortingSelectRecived) {
      this.sortingSelect = sortingSelectRecived;
    },
    updateRate (rateFilterSelectRecived) {
      this.rateFilterSelect = rateFilterSelectRecived;
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
  .byCategoryBooksWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .byCategoryBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
</style>