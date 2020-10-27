<template>
  <div id="app">
    <Header />
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/header.vue';

export default {
  name: 'App',
  components: {
    Header,
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
