<template>
<div>
  <Modal v-if="modalOpen" :id = "modalData" @close-modal="modalOpen = false;" />
  <h1>Produkty</h1>
  <div v-for="(book, index) in books" :key="book.id">
    <Product :book='book' :index='index'/>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      modalOpen: false,
      modalData: null,
    };
  },
  computed: {
    ...mapGetters(['books', 'categories', 'favorites']),
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
