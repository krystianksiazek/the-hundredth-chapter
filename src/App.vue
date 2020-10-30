<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  background-color: #777777;
  margin: 0;
}
#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
