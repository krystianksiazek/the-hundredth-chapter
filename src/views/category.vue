<template>
  <div>
    <h3>{{ category }}</h3>
    <div v-for="(product, index) in products" :key="product.id">
    <div class="productWrapper">
    <div @click="$emit('run-modal', product.id)">
      <div class="bookTitle">{{ product.title }}</div>
      <div class="hoverImage">
        <div v-if="hover === product.id" class="hoverGenere">{{ product.genere }}</div>
        <img @mouseover="hover = product.id" @mouseleave="hover = null" :src="product.cover" height="250" />
        <div v-if="hover === product.id" class="hoverRate"><img src="../assets/Icons/star-fill.png" height="20" alt=""> {{ product.rate }}/5</div>
      </div>
    </div>
    {{ product.author }}
    <div class="addToCartSection">
      <span class="bookPrice">{{ product.price.toFixed(2) + " zł" }}</span>
      <b-form-spinbutton class="quantity" v-model="basketValue[index]" id="sb-small" min="1" max="99"></b-form-spinbutton>
      <b-button
        :id="'addToCartBtn' + product.id"
        class="addToCart"
        @click="addToCart(product.id, basketValue[index], index)" 
        :disabled="basketValue[index] <= 0">
        <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
      </b-button>
      <b-tooltip :target="'addToCartBtn' + product.id" placement="bottomleft" variant="success" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
        <strong>Dodaj do koszyka</strong>
      </b-tooltip>
      <b-button 
        :id="'addToFavoritesBtn' + product.id"
        v-bind:style= "[product.favorite ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]" 
        @click="favoriteToggle(product.id)" 
        class="addToFavorites">
        <img v-if="!product.favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
        <img v-if="product.favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
      </b-button>
      <!-- <b-tooltip :target="'addToFavoritesBtn' + id" placement="bottomright" variant="danger" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
        <span v-if="!favorite"><strong>Dodaj do ulubionych</strong></span>
        <span v-if="favorite"><strong>Usuń z ulubionych</strong></span>
      </b-tooltip> -->
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data () {
    return {
      basketValue: [],
      hover: null
    }
  },
  props: {
    myprop: String
  },
  mounted() {
    this.setBasketValue();
    window.scrollTo(0, 0);
  },
  computed: {
    category() {
      var split = this.$route.params.id.split('.').join('');
      var category = split[0]-1;
      if(split[2] === undefined) {
        var subCategory = split[1]-1;
      } else {
        var subCategory = (split[1] + split[2]) - 1;
      }
      var prefix = this.$store.getters.getCategories[category].cat;
      var suffix = this.$store.getters.getCategories[category].subCat[subCategory];
      return prefix + " => " + suffix;
    },
    book() {
      return this.$store.getters.products;
    },
    products() {
      let productReturn = [];
      for(let i = 0; i < this.book.length; i++) {
        if(((this.category).toLowerCase()).includes((this.book[i].genere).toLowerCase())) {
          productReturn[i] = this.book[i];
        }
      }
      return productReturn.flat();
    }
  },
  methods: {
    setBasketValue() {
      this.basketValue = [];
      for(let i = 0; i < this.products.length; i++) {
        this.basketValue.push(1);
      }
    },
    addToCart(id, amount, index) {
      this.$store.dispatch("addToCart", { id, amount });
      this.basketValue[index] = 1;
      this.$forceUpdate();
    },
    favoriteToggle(id) {
      this.$store.dispatch("addToFavorite", id);
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