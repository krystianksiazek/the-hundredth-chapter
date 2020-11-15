<template>
  <div class="productWrapper">
    <div @click="$emit('run-modal', id)">
      <div>{{ title }}</div>
      <!-- {{ quantityInCart }} -->
      <img :src="cover" height="250" /><br>
      <span>{{ price + " zł" }}</span><br>
      Ocena: {{ rate }} | Gatunek: {{ genere }}
    </div>
    <div>
      <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-small" min="0" max="99"></b-form-spinbutton>
      <b-button class="addToCart" @click="addToCart(id, basketValue)" :disabled="basketValue <= 0">Dodaj do koszyka</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data () {
    return {
      basketValue: 1,
    }
  },
  props: ["id", "title", "cover", "price", "flag", "genere", "rate", "quantityInCart", "description", "sendModalOpen"],
  methods: {
    addToCart(id, amount) {
      this.$store.dispatch("addToCart", { id, amount });
      this.basketValue = 1;
    },
  }
};
</script>

<style lang="scss" scoped>
.productWrapper {
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
</style>
