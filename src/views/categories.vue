<template>
  <div class="categoriesWrapper">
    <h1>Categories</h1>
    
    <b-button @click="getProducts('fantasy')">Beletrystyka</b-button>
    <span v-if="products.length != 0">{{ products }}</span>
    fantastyka, fantasy, science fiction
    horror
    klasyka
    kryminał, sensacja, thriller
    literatura młodzieżowa
    literatura obyczajowa, romans
    literatura piękna
    powieść historyczna
    powieść przygodowa

  </div>
</template>

<script>

export default {
  name: 'categories',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts(genere) {
      for(let i = 0; i < this.$store.getters.products.length; i++) {
        if(this.$store.getters.products[i].genere == genere) {
          this.products += this.$store.getters.products[i].title;
        }
      }
    }
  }
};
</script>
