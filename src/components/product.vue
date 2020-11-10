<template>
  <div class="productWrapper">
    <div>{{ title }}</div>
    {{ quantityInCart }}
    <img :src="cover" height="250" /><br>
    <span>{{ price + " zł" }}</span><br>
    Ocena: {{ rate }} | Gatunek: {{ genere }}
    <div>
      <b-form-spinbutton class="quantity" v-model="basketValue" id="sb-vertical" min="0" max="99" inline></b-form-spinbutton><br>
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
  props: ["id", "title", "cover", "price", "flag", "genere", "rate", "quantityInCart"],

  
  methods: {
    addToCart(id, amount) {
      this.$store.dispatch("addToCart", { id, amount });
      this.basketValue = 1;
    },
    showList() {
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
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
    height: 400px;
    text-align: center;
}
</style>
