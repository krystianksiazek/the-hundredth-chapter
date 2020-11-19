import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import categories from '../views/categories.vue';

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
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
