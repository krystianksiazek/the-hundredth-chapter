<template>
<div>
  <h1>Produkty</h1>
  Duplikaty w koszyku: {{ this.$store.getters.duplicatesInCart }}
  <b-container>
    <b-row class="justify-content-center">
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :cover="product.cover"
        :price="product.price"
        :flag="product.flag"
        :genere="product.genere"
        :rate="product.rate"
        :quantityInCart="product.quantityInCart"
      />
    </b-row>
  </b-container>
</div>
</template>

<script>
import Product from '@/components/product.vue';

export default {
  name: 'home',
  components: {
    Product
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    
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
.homeWrapper {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: auto auto; 
  column-gap: 10px;
  row-gap: 15px;
  align-items: stretch;
  justify-items: stretch;
}
</style>