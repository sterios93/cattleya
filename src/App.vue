<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view class="routerContainer"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
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
    color: white
</style>
