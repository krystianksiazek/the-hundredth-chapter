<template>
  <b-container>
    <transition name="modal">
      <Modal v-if="modalOpen" :id="modalData" @close-modal="modalOpen = false;" />
    </transition>
    <b-row class="justify-content-center">
        <div class="productWrapper">
          <div v-on:click="runModal(book.id)">
            <span :title='book.title' class="bookTitle">{{ book.title }}</span>
            <div class="hoverImage">
              <div v-if="hover === book.id" class="hoverGenere">{{ book.genere }}</div>
              <img @mouseover="hover = book.id"
                @mouseleave="hover = null"
                :src="book.cover"
                height="250" />
              <div v-if="hover === book.id" class="hoverRate"><img src="../assets/Icons/star-fill.png" height="20" alt=""> {{ book.rate }}/5</div>
            </div>
          </div>
          {{ book.author }}
          <div class="addToCartSection">
            <span class="bookPrice">{{ book.price ? book.price.toFixed(2) : null }} zł</span>
            <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-small" min="1" max="99"></b-form-spinbutton>
            <b-button
              :id="'addToCartBtn' + book.id"
              class="addToCart"
              @click="addToCart(book.id, basketValue)"
              :disabled="basketValue <= 0">
              <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
            </b-button>
            <b-tooltip :target="'addToCartBtn'+book.id" placement="bottomleft" variant="success" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
              <strong>Dodaj do koszyka</strong>
            </b-tooltip>
            <b-button
              :id="'addToFavoritesBtn' + book.id"
              v-bind:style= "[isBookFavorite(book.id) ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]"
              @click="favoriteToggle(book.id)"
              class="addToFavorites">
              <img v-if="!isBookFavorite(book.id)" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
              <img v-if="isBookFavorite(book.id)" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
            </b-button>
            <b-tooltip :target="'addToFavoritesBtn' + book.id" placement="bottomright" variant="danger" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
              <span v-if="!isBookFavorite(book.id)"><strong>Dodaj do ulubionych</strong></span>
              <span v-if="isBookFavorite(book.id)"><strong>Usuń z ulubionych</strong></span>
            </b-tooltip>
          </div>
        </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      basketValue: 1,
      hover: false,
      modalOpen: false,
      modalData: null,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  props: ['book', 'index'],
  computed: {
    ...mapGetters(['books', 'categories', 'favorites']),
  },
  methods: {
    runModal(id) {
      this.modalOpen = true;
      this.modalData = id;
    },
    addToCart(id, amount) {
      this.$store.dispatch('addToCart', { id, amount });
      this.basketValue = 1;
      this.$forceUpdate();
    },
    favoriteToggle(id) {
      this.$store.dispatch('addToFavorite', id);
    },
    isBookFavorite(id) {
      if (this.favorites.indexOf(this.books[id]) === -1) {
        return false;
      } return true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .addToCartSection {
    margin-bottom: 5px;
  }
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
    height: 450px;
    text-align: center;
  }
  .addToCart {
    margin-right: 10px;
  }
  .quantity {
    margin-bottom: 5px;
  }
  .bookTitle {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: bold;
    height: 48px;
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

  .modal-enter-active {
    animation: modal-show 0.5s ease;
  }
  .modal-leave-from {
    opacity: 1;
  }
  .modal-leave-to {
    opacity: 0;
  }
  .modal-leave-active {
    transition: all 0.5s ease;
  }
  @keyframes modal-show {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
