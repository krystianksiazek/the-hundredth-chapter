<template>
  <b-container>
    <h3 v-if="!componentLoading">{{ prefix }} <span v-if="suffix != null"> => {{ suffix }} </span> ({{filterProducts.length}})</h3>
    <h4 v-if="componentLoading">Ładowanie...</h4>
    <h4 v-if="!componentLoading && filterProducts.length === 0">Brak książek tej katergorii</h4>
    <div class="filtredBooks">
      <div v-for="(book, index) in filterProducts" :key="book.id">
        <Product :book='book' :index='index'/>
      </div>
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
      return productReturn.flat();
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
      setInterval(() => {
        // simple checking if categories is loaded
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
  },
};
</script>

<style lang="scss" scoped>
  .filtredBooks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>