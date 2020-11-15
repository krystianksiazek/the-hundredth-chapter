<template>
  <div @click="$emit('close-modal')">
    ID {{ item }}
    Tytuł {{ this.$store.getters.products[item].title }}
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    item: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
    };
  },
}
</script>
<style lang="scss" scoped>


</style>
