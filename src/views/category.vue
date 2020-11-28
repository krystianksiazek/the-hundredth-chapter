<template>
  <div>
    <h3>{{ name }}</h3>
    <div v-for="product in products" :key="product.id">{{ product.cover }}
    <div class="productWrapper">
    <div @click="$emit('run-modal', product.id)">
      <div class="bookTitle">{{ product.title }}</div>
      <div class="hoverImage">
        <!-- <div v-if="hover" class="hoverGenere">{{ product.genere }}</div>
        <img @mouseover="hover = true" @mouseleave="hover = false" :src="cover" height="250" />
        <div v-if="hover" class="hoverRate"><img src="../assets/Icons/star-fill.png" height="20" alt=""> {{ rate }}/5</div> -->
      </div>
    </div>
    {{ product.author }}
    <div class="addToCartSection">
      <span class="bookPrice">{{ product.price.toFixed(2) + " zł" }}</span>
      <!-- //TODO delete spinbutton and replace it with normal buttons -->
      <!-- <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-small" min="1" max="99"></b-form-spinbutton>
      <b-button
        :id="'addToCartBtn' + id"
        class="addToCart"
        @click="addToCart(id, basketValue)" 
        :disabled="basketValue <= 0">
        <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
      </b-button> -->
      <!-- <b-tooltip :target="'addToCartBtn'+id" placement="bottomleft" variant="success" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
        <strong>Dodaj do koszyka</strong>
      </b-tooltip> -->
      <!-- <b-button 
        :id="'addToFavoritesBtn' + id"
        v-bind:style= "[favorite ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]" 
        @click="favoriteToggle" 
        class="addToFavorites">
        <img v-if="!favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
        <img v-if="favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
      </b-button> -->
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
    }
  },
  computed: {
    category() {
      return this.$route.params.id;
    },
    name() {
      return this.$route.params.name;
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
  },
  // created() {
  //   this.$router.onReady(() => {
  //     this.$route.params.name = this.$route.params.name;
  //   })
  // },
};
</script>
