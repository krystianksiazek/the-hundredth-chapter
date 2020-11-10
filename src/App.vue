<template>
  <div id="app">
    <Navbar :sendIsMobile="isMobile" />
    <div class="contentWrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      isMobile: null,
    }
  },
  created() {
    this.mobileChecker();
    window.addEventListener('resize', this.mobileChecker);
  },
  methods: {
    mobileChecker() {
      if(window.innerWidth > 991) {
        this.isMobile = false;
      } else this.isMobile = true;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #7395ae;
  margin: 0;
}
#app {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.contentWrapper {
  padding: 10px;
  
}
</style>
