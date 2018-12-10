<template>
  <div class="home">
    <Spinner></Spinner>
    <Header></Header>
    <main>
      <Article
            v-bind:pictureLeft="true"
            :article="about.team"
            :isHome="true"
            :to="about.team.route">
      </Article>
      <Article
            v-bind:pictureLeft="false"
            :article="projectInfo.environment"
            :isHome="true"
            :to="projectInfo.environment.route">
      </Article>
      <Article
            v-bind:pictureLeft="true"
            :article="projectInfo.introduction"
            :isHome="true"
            :to="projectInfo.environment.route">
      </Article>
      <google-map :center="{ lat: 42.649435, lng: 23.354145 }"
                  :marker="{ lat: 42.649435, lng: 23.354145 }"></google-map>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/Header.vue';
import Article from '../components/Article.vue';
import GoogleMap from '../components/Map.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'home',
  components: {
    Header,
    Article,
    GoogleMap,
    Spinner,
  },
  data() {
    return {
      projectInfo: {},
      about: {},
    };
  },
  computed: {
    ...mapGetters([
      'getProjectDescription',
      'getAbout',
    ]),
  },
  beforeMount() {
    this.projectInfo = this.getProjectDescription;
    this.about = this.getAbout;
  },
};
</script>
