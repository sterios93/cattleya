<template>
  <div class="home">
    <Header></Header>
    <main>
      <Article v-bind:pictureLeft="true"></Article>
      <Article v-bind:pictureLeft="false"></Article>
      <Article v-bind:pictureLeft="true"></Article>
      <google-map></google-map>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Article from '../components/Article.vue';
import GoogleMap from '../components/Map.vue';

export default {
  name: 'home',
  components: {
    Header,
    Article,
    GoogleMap,
  },
};
</script>
