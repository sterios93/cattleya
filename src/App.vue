<template>
  <div id="app">
    <Navigation class="d-none d-lg-block"></Navigation>
    <MobileNav class="d-lg-none"></MobileNav>
    <router-view class="routerContainer"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import MobileNav from './components/MobileNav.vue';

export default {
  components: {
    Navigation,
    Footer,
    MobileNav,
  },
};

</script>
<style lang="stylus">
  body
    display flex;
    flex-direction column;
    height 100vh;
  #app
    flex-grow 1;
    display flex;
    flex-direction:column;
  .routerContainer
    flex-grow 1;
  a
    text-decoration none!important;
    color: black
</style>
