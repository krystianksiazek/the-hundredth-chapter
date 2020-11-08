<template>
  <div class="homeWrapper">
    <h1>Strona główna</h1>
    <div>
      <label for="sb-vertical">Dodawanie do koszyka</label><br>
      <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-vertical" min="0" max="99" inline></b-form-spinbutton><br>
      <b-button class="addToCart" @click="updateCart()" :disabled="basketValue <= 0">Dodaj do koszyka</b-button>
      <p>Rzeczy w koszyku: {{ store.itemsInCart }} {{ basketValue }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      basketValue: 0,
    }
  },
  methods: {
    updateCart() {
      this.store.itemsInCart += this.basketValue;
      this.basketValue = 0;
    }
  },
  // methods: {
  //   increase() {
  //     this.store.itemsInCart += 1;
  //   },
  //   decrease() {
  //     var $ = require('jquery');
  //     if(this.store.itemsInCart === 0) {
  //       $('.decrease').attr('disable');
  //     } else this.store.itemsInCart -= 1;
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.quantity {
  background-color: #557a95;
  border: 1px solid #2b3d4b;
  color: #fff;
  margin-bottom: 10px;
}
</style>