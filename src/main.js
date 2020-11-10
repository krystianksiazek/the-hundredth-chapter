import Vue from 'vue';
import Vuex from "vuex";
import jQuery from 'jquery';
import BootstrapVue from 'bootstrap-vue'
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue';
import router from './router';
import store from './store/products';
global.jQuery = jQuery;
global.Popper = Popper;

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(Popper)

new Vue({
  router,
  store,
  Vuex,
  render: (h) => h(App),
}).$mount('#app');