import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Apartments from './views/Apartments.vue';
import ApartmentInfo from './views/ApartmentInfo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/apartments',
      name: 'apartments',
      component: Apartments,
    },
    {
      path: '/apartments/:id',
      props: true,
      name: 'apartmentInfo',
      component: ApartmentInfo,
    },
  ],
});
