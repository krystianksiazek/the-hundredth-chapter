<template>
  <div class="productWrapper">
    <div @click="$emit('run-modal', id)">
      <div class="bookTitle">{{ title }}</div>
      <div class="hoverImage">
        <div v-if="hover" class="hoverGenere">{{ genere }}</div>
        <img @mouseover="hover = true" @mouseleave="hover = false" :src="cover" height="250" />
        <div v-if="hover" class="hoverRate"><img src="../assets/Icons/star-fill.png" height="20" alt=""> {{ rate }}/5</div>
      </div>
    </div>
    <div class="addToCartSection">
      <span class="bookPrice">{{ price.toFixed(2) + " zł" }}</span>
      <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-small" min="0" max="99"></b-form-spinbutton>
      <b-button
        :id="'addToCartBtn' + id"
        class="addToCart"
        @click="addToCart(id, basketValue)" 
        :disabled="basketValue <= 0">
        <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
      </b-button>
      <b-tooltip :target="'addToCartBtn'+id" placement="bottomleft" variant="success" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
        <strong>Dodaj do koszyka</strong>
      </b-tooltip>
      <b-button 
        :id="'addToFavoritesBtn' + id"
        v-bind:style= "[favorite ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]" 
        @click="favoriteToggle" 
        class="addToFavorites">
        <img v-if="!favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
        <img v-if="favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
      </b-button>
      <b-tooltip :target="'addToFavoritesBtn' + id" placement="bottomright" variant="danger" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
        <span v-if="!favorite"><strong>Dodaj do ulubionych</strong></span>
        <span v-if="favorite"><strong>Usuń z ulubionych</strong></span>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data () {
    return {
      basketValue: 1,
      hover: false
    }
  },
  props: ["id", "title", "cover", "price", "flag", "genere", "rate", "quantityInCart", "favorite", "description", "sendModalOpen"],
  methods: {
    addToCart(id, amount) {
      this.$store.dispatch("addToCart", { id, amount });
      this.basketValue = 1;
    },
    favoriteToggle() {
      this.$store.dispatch("addToFavorite", this.id);
    }
  }
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
