<template>
<div>
  <Modal v-if="modalOpen" :id = "modalData" @close-modal="modalOpen = false;" />
  <h1>Produkty</h1>
  <Product @run-modal="runModal" />
</div>
</template>

<script>
import Product from '@/components/product.vue';

export default {
  name: 'home',
  components: {
    Product,
  },
  data() {
    return {
      modalOpen: false,
      modalData: null,
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    runModal(id) {
      this.modalOpen = true;
      this.modalData = id;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
