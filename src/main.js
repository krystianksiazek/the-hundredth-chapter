import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store/products';
import router from './router';
import App from './App.vue';
import Modal from './components/modal.vue';
import Filters from './components/filters.vue';
import Product from './components/product.vue';

Vue.config.productionTip = false;

Vue.component('Modal', Modal);
Vue.component('Filters', Filters);
Vue.component('Product', Product);
Vue.use(BootstrapVue);
Vue.use(Popper);

new Vue({
  router,
  store,
  Vuex,
  render: (h) => h(App),
}).$mount('#app');
