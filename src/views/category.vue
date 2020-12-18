<template>
  <div>
    <Modal v-if="modalOpen" :id = "modalData" @close-modal="modalOpen = false;" />
    <h3 v-if="!componentLoading">{{ prefix }} <span v-if="suffix != null"> => {{ suffix }} </span> ({{filterProducts.length}})</h3>
    <h4 v-if="componentLoading">Ładowanie...</h4>
    <h4 v-if="!componentLoading && filterProducts.length === 0">Brak książek tej katergorii</h4>
    <b-container>
    <b-row class="justify-content-center">
     <div v-for="(product, index) in filterProducts" :key="product.id">
      <div class="productWrapper">
        <div @click="runModal(product.id)">
          <div class="bookTitle">{{ product.title }}</div>
          <div class="hoverImage">
            <div v-if="hover === product.id" class="hoverGenere">{{ product.genere }}</div>
            <img @mouseover="hover = product.id"
              @mouseleave="hover = null"
              :src="product.cover"
              height="250" />
            <div v-if="hover === product.id" class="hoverRate">
              <img src="../assets/Icons/star-fill.png" height="20" alt="">
                {{ product.rate }}/5
            </div>
          </div>
        </div>
        {{ product.author }}
        <div class="addToCartSection">
          <span class="bookPrice">{{ product.price.toFixed(2) + " zł" }}</span>
          <b-form-spinbutton
            class="quantity"
            v-model="basketValue[index]"
            id="sb-small" min="1" max="99">
          </b-form-spinbutton>
          <b-button
            :id="'addToCartBtn' + product.id"
            class="addToCart"
            @click="addToCart(product.id, basketValue[index], index)"
            :disabled="basketValue[index] <= 0">
            <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
          </b-button>
          <b-tooltip
            :target="'addToCartBtn' + product.id"
            placement="bottomleft"
            variant="success"
            triggers="hover"
            :delay="{show: 800, hide: 50}"
            noninteractive>
            <strong>Dodaj do koszyka</strong>
          </b-tooltip>
          <b-button
            :id="'addToFavoritesBtn' + product.id"
            v-bind:style = "[product.favorite ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]"
            @click="favoriteToggle(product.id)"
            class="addToFavorites">
            <img v-if="!product.favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
            <img v-if="product.favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
          </b-button>
          <b-tooltip
            :target="'addToFavoritesBtn' + product.id"
            placement="bottomright"
            variant="danger"
            triggers="hover"
            :delay="{show: 800, hide: 50}"
            noninteractive>
            <span v-if="!product.favorite"><strong>Dodaj do ulubionych</strong></span>
            <span v-if="product.favorite"><strong>Usuń z ulubionych</strong></span>
          </b-tooltip>
        </div>
      </div>
    </div>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'category',
  data() {
    return {
      basketValue: [],
      hover: null,
      componentLoading: true,
      prefix: '',
      suffix: '',
      modalOpen: false,
      modalData: null,
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
    ...mapGetters(['products', 'categories']),
    filterProducts() {
      const productReturn = [];
      if (this.suffix === null) {
        for (let i = 0; i < this.categories[this.$route.params.id[0] - 1].subCat.length; i++) {
          // console.log(this.categories[this.$route.params.id[0] - 1].subCat[i]);
          for (let j = 0; j < this.products.length; j++) {
            if (((this.categories[this.$route.params.id[0] - 1].subCat[i]).toLowerCase()).includes((this.products[j].genere).toLowerCase())) {
              productReturn[j] = this.products[j];
            }
          }
        }
      }
      else {
        for (let i = 0; i < this.products.length; i++) {
          if (((this.suffix).toLowerCase()).includes((this.products[i].genere).toLowerCase())) {
            productReturn[i] = this.products[i];
          }
        }
      }
      return productReturn.flat();
    },
  },
  methods: {
    runModal(id) {
      this.modalOpen = true;
      this.modalData = id;
    },
    category() {
      let subCategory = null;
      const split = this.$route.params.id.split('.').join('');
      const category = split[0] - 1;
      if (split[2] === undefined) {
        subCategory = split[1] - 1;
      } else {
        subCategory = (split[1] + split[2]) - 1;
      }
      setTimeout(() => {
        this.prefix = this.categories[category].cat;
        if (split[1] > 0) {
          this.suffix = this.categories[category].subCat[subCategory];
        } else {
          this.suffix = null;
        }
        this.componentLoading = false;
        this.setBasketValue();
      }, 1500);
    },
    setBasketValue() {
      for (let i = 0; i < this.filterProducts.length; i++) {
        this.basketValue.push(1);
      }
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
.productWrapper {
  position: relative;
  padding: 10px;
  background-color: #557a95;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  text-align: center;
}
.addToCart {
  margin-right: 10px;
}
.quantity {
  margin-bottom: 5px;
}
.bookTitle {
  font-weight: bold;
}
.hoverImage {
  position: relative;
  display: inline-block;
}
.hoverGenere, .hoverRate {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  background-color: #7395ae;
}
.hoverGenere {
  top: 0;
}
.hoverRate {
  bottom: 0;
}
.bookPrice {
  font-size: 20px;
}
.addToFavoritesIco, .addToCartIco {
  filter: brightness(0);
  opacity: 0.5;
  transition: 0.25s ease-in-out;
}
.addToFavorites:hover > .addToFavoritesIco,
.addToCart:hover > .addToCartIco {
  filter: brightness(100%);
  opacity: 1;
  transition: 0.25s ease-in-out;
}

</style>