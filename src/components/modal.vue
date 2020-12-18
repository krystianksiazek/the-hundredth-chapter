<template>
  <div class="dimmer">
    <div class="modalWrapper">
      <div class="titleAndClose">
        <span class="title">
          {{ book[id].title }}
        </span>
        <a class="close" @click="$emit('close-modal')" />
      </div>
      <div class="content">
        <a class="photoLink" target="_blank">
          <div class="photo"
          v-bind:style="{ backgroundImage: 'url(' + book[id].cover + ')' }">
          </div>
        </a>
        <div class="aboutPhoto">
          <h1>{{ book[id].title }}</h1>
          <p v-html="book[id].description" class="description">
          </p>
          {{ book[id].rate }}/5
          {{ book[id].price }}
          <router-link :to="{ name: 'kategoria', params: { id: book[id].genere }, query: { podkategoria: book[id].genere }}" >
            {{ book[id].genere }}
          </router-link>
          <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-small" min="0" max="99"></b-form-spinbutton>
          <b-button
            :id="'addToCartBtnModal' + id"
            class="addToCart"
            @click="addToCart(id, basketValue)" 
            :disabled="basketValue <= 0">
            <img class="addToCartIco" src="../assets/Icons/basket-green.png" height="30" alt="">
          </b-button>
          <b-tooltip :target="'addToCartBtnModal' + id" placement="bottomleft" variant="success" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
            <strong>Dodaj do koszyka</strong>
          </b-tooltip>
          <b-button 
            :id="'addToFavoritesBtnModal' + id"
            v-bind:style= "[book[id].favorite ? {'title':'Dodaj do ulubionych'} : {'title':'Usuń z ulubionych'}]" 
            @click="favoriteToggle(id)"
            class="addToFavorites">
            <img v-if="!book[id].favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red.png" height="30" alt="">
            <img v-if="book[id].favorite" class="addToFavoritesIco" src="../assets/Icons/heart-red-fill.png" height="30" alt="">
          </b-button>
          <b-tooltip :target="'addToFavoritesBtnModal' + id" placement="bottomright" variant="danger" triggers="hover" :delay="{show: 800, hide: 50}" noninteractive>
            <span v-if="!book[id].favorite"><strong>Dodaj do ulubionych</strong></span>
            <span v-if="book[id].favorite"><strong>Usuń z ulubionych</strong></span>
          </b-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      basketValue: 1,
    };
  },
  name: 'Modal',
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  computed: {
    book() {
      return this.$store.getters.products;
    }
  },
  methods: {
    addToCart(id, amount) {
      this.$store.dispatch("addToCart", { id, amount });
      this.basketValue = 1;
    },
    favoriteToggle(id) {
      this.$store.dispatch("addToFavorite", id);
    }
  },
  
}
</script>
<style lang="scss" scoped>
  .dimmer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,0.6);
  }
  .modalWrapper {
    width: 80%;
    position: absolute;
    background-color: rgb(70, 70, 70);
    // border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    z-index: 3;
    @media (max-width: 1000px)
    {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .titleAndClose {
    overflow: hidden;
    display: flex;
    background-color: black;
    height: 30px;
    align-items: center;
    justify-content: center;
  }
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 30px 0 5px;
  }
  .content {
    display: flex;
    height: 70vh;
    @media (max-width: 1000px)
    {
      flex-direction: column;
      height: calc(100% - 30px);
    }
  }
  .aboutPhoto {
    text-shadow: 0 0 10px #555;
    text-align: center;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      overflow: auto;
      margin: 0 20px 0 20px;
      border-bottom: 1px solid white;
    }
    @media (max-width: 1000px)
    {
      width: 100%;
      height: 50%;
    }
  }
  .photo {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-image: "";
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    @media (max-width: 1000px)
    {
      width: 100%;
    }
  }
  .photoLink {
    width: 100%;
    @media (max-width: 1000px)
    {
      width: 100%;
      height: 50%;
    }
  }
  .description {
    overflow: auto;
    margin: 20px 20px 0 20px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    opacity: 0.5;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 13px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: rgb(255, 255, 255);
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
</style>
