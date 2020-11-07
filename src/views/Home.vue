<template>
  <div class="homeWrapper">
    <h1>Strona główna</h1>
    <div>
      <label for="sb-vertical">Dodawanie do koszyka</label><br>
      <b-form-spinbutton id="sb-vertical" v-model="store.itemsInCart" min="0" max="99" vertical></b-form-spinbutton>
      <p>Rzeczy w koszyku: {{ store.itemsInCart }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    // increase() {
    //   this.store.itemsInCart += 1;
    // },
    // decrease() {
    //   var $ = require('jquery');
    //   if(this.store.itemsInCart === 0) {
    //     $('.decrease').attr('disable');
    //   } else this.store.itemsInCart -= 1;
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>