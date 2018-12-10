import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Apartments from './views/Apartments.vue';
import ApartmentInfo from './views/ApartmentInfo.vue';
import Project from './views/Project.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

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
      path: '/apartments/:floor/:id',
      props: true,
      name: 'apartmentInfo',
      component: ApartmentInfo,
    },
    {
      path: '/project',
      name: 'apartments',
      component: Project,
    },
    {
      path: '/about',
      name: 'apartments',
      component: About,
    },
    {
      path: '/contact',
      name: 'apartments',
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
