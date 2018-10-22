<template>
  <div class="home">
    <Header></Header>
    <main>
      <Article v-bind:pictureLeft="true"></Article>
      <!--<Article v-bind:pictureLeft="false"></Article>-->
      <!--<Article v-bind:pictureLeft="true"></Article>-->
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Article from '../components/Article.vue';

export default {
  name: 'home',
  components: {
    Header,
    Article,
  },
};
</script>
