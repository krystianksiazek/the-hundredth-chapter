import Vue from 'vue';
import VueRouter from 'vue-router';
import notFound from '../views/notFound.vue';
import home from '../views/home.vue';
import rate from '../views/rate.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import categories from '../views/categories.vue';
import category from '../views/category.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/najlepiej-oceniane',
    name: 'rate',
    component: rate,
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
    path: '/kategorie/:id/kategoria=:category',
    name: 'kategoria',
    component: category,
    params: true,
  },
  {
    path: '/505',
    name: 'notFound',
    component: notFound,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFoundAll',
    component: notFound,
  },
  {
    path: '/kategorie/:catchAll(.*)',
    name: 'notFoundID',
    component: notFound,
  },
  {
    path: '/kategorie/:id/:catchAll(.*)',
    name: 'notFoundCategory',
    component: notFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
