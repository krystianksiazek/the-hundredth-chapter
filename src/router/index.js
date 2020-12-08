import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import categories from '../views/categories.vue';
import category from '../views/category.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/rejestracja',
    name: 'rejestracja',
    component: register,
  },
  {
    path: '/kategorie',
    name: 'kategorie',
    component: categories,
  },
  {
    path: '/kategorie/kategoria/:id',
    name: 'kategoria',
    component: category,
    params: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
